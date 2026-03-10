import { userStore } from "../Store/userStore.js";
import { LuPencilLine } from "react-icons/lu";
import { useState, useEffect } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { BackButton } from "../utils/navItems.jsx";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { UpdateImage } from "../utils/updateImage.jsx";

export default function User() {
  const { user } = useContext(UserContext);
  const {
    logout,
    deleteAccount,
    updateName,
    updateEmail,
    updateNumber,
    updateLocation,
    updateRank,
  } = userStore();
  const [active, setActive] = useState("comments");
  const [enableEdit, setEnableEdit] = useState("");
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    name: user?.name || "",
    email: user?.email || "",
    number: user?.number || "",
    location: user?.location || "",
  });

  useEffect(() => {
    if (user) {
      setUserState({
        name: user?.name || "",
        email: user?.email || "",
        number: user?.number || "",
        location: user?.location || "",
      });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleDeleteAccount = () => {
    deleteAccount();
    navigate("/");
  };

  return (
    <>
      <div className="mt-4">
        <BackButton />
      </div>

      <div className="w-full h-full flex flex-col items-start justify-center p-6 mt-4 bg-[#b48068]/10 gap-4">
        <div className="w-full flex flex-row items-center justify-between gap-4">
          <div className="w-auto flex flex-row items-end gap-1">
            {/* allow user to change image */}
            <UpdateImage/>
            {/* update user name */}
            <input
              disabled={enableEdit !== "name"}
              autoFocus={enableEdit === "name"}
              onBlur={() => setEnableEdit("")}
              className={`text-[#b48068] ${enableEdit === "name" ? "bg-white border px-2 rounded-sm text-[1rem] border-[#b48068]" : "leading-5 text-[1.65rem]"}`}
              size={(userState.name.slice(0, 8) || "").length || 1}
              type="text"
              value={userState.name || ""}
              onChange={(e) =>
                setUserState({ ...userState, name: e.target.value })
              }
            />
            <button className="cursor-default pb-1 text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">
              {" "}
              {enableEdit === "name" ? (
                <MdFileDownloadDone
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    updateName(userState.name);
                    setEnableEdit("");
                  }}
                />
              ) : (
                <LuPencilLine onClick={() => setEnableEdit("name")} />
              )}{" "}
            </button>
          </div>

          {/* update user rank */}
          <select
            value={user?.rank || "customer"}
            onChange={(e) => updateRank(e.target.value)}
            className="cursor-default text-[#b48068] border border-[#b48068] rounded-sm px-2 py-1 bg-white text-[0.9rem] focus:outline-none"
          >
            <option value="customer">customer</option>
            <option value="wholesaler">wholesaler</option>
          </select>
        </div>

        {/* update user email */}
        <div className="flex flex-row items-center justify-between w-full mt-4">
          <input
            disabled={enableEdit !== "email"}
            autoFocus={enableEdit === "email"}
            onBlur={() => setEnableEdit("")}
            className={`text-[1.2rem] px-2 py-1 ${enableEdit === "email" ? "bg-white border rounded-sm border-[#b48068]" : ""}`}
            type="email"
            placeholder="Add Email"
            value={userState.email || ""}
            onChange={(e) =>
              setUserState({ ...userState, email: e.target.value })
            }
          />
          <button className="cursor-default text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">
            {enableEdit === "email" ? (
              <MdFileDownloadDone
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  updateEmail(userState.email);
                  setEnableEdit("");
                }}
              />
            ) : (
              <LuPencilLine onClick={() => setEnableEdit("email")} />
            )}
          </button>
        </div>
        {/* update user number */}
        <div className="w-full flex flex-row items-center justify-between">
          <input
            disabled={enableEdit !== "number"}
            autoFocus={enableEdit === "number"}
            onBlur={() => setEnableEdit("")}
            type="number"
            className={`text-[1.2rem] px-2 py-1 ${enableEdit === "number" ? "bg-white border rounded-sm border-[#b48068]" : ""}`}
            placeholder="Add Number"
            value={userState.number || ""}
            onChange={(e) =>
              setUserState({ ...userState, number: e.target.value })
            }
          />
          <button className="cursor-default text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">
            {enableEdit === "number" ? (
              <MdFileDownloadDone
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  updateNumber(userState.number);
                  setEnableEdit("");
                }}
              />
            ) : (
              <LuPencilLine onClick={() => setEnableEdit("number")} />
            )}
          </button>
        </div>

        {/* update user location */}
        <div className="flex flex-row items-center justify-between w-full">
          <input
            disabled={enableEdit !== "location"}
            autoFocus={enableEdit === "location"}
            onBlur={() => setEnableEdit("")}
            className={`text-[1.2rem] px-2 py-1 ${enableEdit === "location" ? "bg-white border rounded-sm border-[#b48068]" : ""}`}
            type="text"
            placeholder="Add Location"
            value={userState.location || ""}
            onChange={(e) =>
              setUserState({ ...userState, location: e.target.value })
            }
          />
          <button className="cursor-default text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">
            {enableEdit === "location" ? (
              <MdFileDownloadDone
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  updateLocation(userState.location);
                  setEnableEdit("");
                }}
              />
            ) : (
              <LuPencilLine onClick={() => setEnableEdit("location")} />
            )}
          </button>
        </div>
        {/* user saved items count */}
        <div className="text-[1rem] flex flex-row items-center justify-start gap-4 w-full">
          <Link to="/Save">
            <span className="flex flex-row gap-3 items-end justify-start">
              <h1 className="font-semibold cursor-default">Wish List</h1>
              <p className="text-[#b48068]">{user?.saved?.length || "0"}</p>
            </span>
          </Link>
          {/* user cart items count */}
          <Link to="/Cart">
            <span className="flex flex-row gap-3 items-end justify-start">
              <h1 className="font-semibold cursor-default">Cart</h1>
              <p className="text-[#b48068]">{user?.cart?.length || "0"}</p>
            </span>
          </Link>
        </div>
        {/* user (history) comments reviews and orders */}
        <div className="w-full flex flex-col gap-2">
          <div>
            <button
              onClick={() => setActive("comments")}
              className={`cursor-default text-[1rem] border-2 border-black ${active === "comments" ? "text-black bg-[#b48068]" : "bg-black text-[#b48068]"} px-[1rem] py-[0.35rem]`}
            >
              Comments
            </button>
            <button
              onClick={() => setActive("orders")}
              className={`cursor-default text-[1rem] border-2 border-black ${active === "orders" ? "text-black bg-[#b48068]" : "bg-black text-[#b48068]"} px-[1rem] py-[0.35rem]`}
            >
              Orders
            </button>
            <button
              onClick={() => setActive("reviews")}
              className={`cursor-default text-[1rem] border-2 border-black ${active === "reviews" ? "text-black bg-[#b48068]" : "bg-black text-[#b48068]"} px-[1rem] py-[0.35rem]`}
            >
              Reviews
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full max-h-[10rem] overflow-y-scroll [scrollbar-width:none] ">
            {/* comment history  */}
            {active === "comments" &&
              (user?.comments?.length > 0 ? (
                user?.comments?.map((comment) => (
                  <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                    <p>{comment.product}</p>
                    <h1 className="text-[1rem]">{comment.text}</h1>
                    <p>{comment.createdAt?.split("T")[0]}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No Comment yet</p>
              ))}

            {/* order history  */}
            {active === "orders" &&
              (user?.order?.length > 0 ? (
                user?.order?.map((order) => (
                  <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                    <div className="flex flex-row items-center justify-between">
                      <span className="w-full flex flex-row items-center justify-between">
                        <p>{order._id}</p>
                        <p>{order.status}</p>
                      </span>
                      <h1 className="text-[1rem]">{order.totalPrice}$</h1>
                    </div>
                    <h1 className="text-[1rem]">
                      {order.products.length} items
                    </h1>
                    <p className="text-sm">View order details</p>
                    <p>{order.createdAt?.split("T")[0]}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No Orders yet</p>
              ))}

            {/* review history */}
            {active === "reviews" &&
              (user?.reviews?.length > 0 ? (
                user?.reviews?.map((review) => (
                  <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                    <p>{review.order}</p>
                    <h1 className="text-[1rem]">{review.text}</h1>
                    <p>{review.createdAt?.split("T")[0]}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No Review Yet</p>
              ))}
          </div>
        </div>
        {/* logout and delete account button */}
        <div>
          <button
            onClick={handleLogout}
            className="cursor-default text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]"
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="cursor-default text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
