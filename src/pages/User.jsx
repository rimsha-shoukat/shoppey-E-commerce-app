import { userStore } from "../Store/userStore.js";
import { LuPencilLine } from "react-icons/lu";
import { useState, useEffect } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { DeleteAccount } from "../utils/deleteAccount.jsx"; import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { UpdateImage } from "../utils/updateImage.jsx";
import { timeAgo } from "../utils/timeAgo.js";
import { getSimulatedStatus, STATUS_COLOR, STATUS_LABELS } from "../utils/orderStatus.js";
import { UpdatePassword } from "../utils/updatePassword.jsx";

// Reusable editable field row
const EditableField = ({ label, value, field, enableEdit, setEnableEdit, onChange, onSave, type = "text", placeholder }) => {
  const isEditing = enableEdit === field;
  return (
    <div className="flex items-center justify-between w-full py-3 border-b border-gray-100 group">
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">{label}</span>
        <input
          disabled={!isEditing}
          autoFocus={isEditing}
          onBlur={() => setEnableEdit("")}
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          className={`text-sm font-medium text-gray-800 bg-transparent outline-none transition-all duration-200 w-full
            ${isEditing ? "border-b-2 border-[#b48068] pb-0.5" : "border-b-2 border-transparent"}
            placeholder:text-gray-300`}
        />
      </div>
      <button className="cursor-default ml-3 text-base text-gray-300 hover:text-[#b48068] transition-colors duration-200 shrink-0">
        {isEditing ? (
          <MdFileDownloadDone
            className="text-[#b48068] text-lg"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onSave}
          />
        ) : (
          <LuPencilLine onClick={() => setEnableEdit(field)} />
        )}
      </button>
    </div>
  );
};

export default function User() {
  const { user } = useContext(UserContext);
  const { logout, updateName, updateEmail, updateNumber, updateLocation, updateRank } = userStore();
  const [active, setActive] = useState("comments");
  const [enableEdit, setEnableEdit] = useState("");
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

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

  const handleLogout = () => { logout(); navigate("/"); };
  const tabs = ["comments", "orders"];

  return (
    <section className="min-h-screen w-full bg-[#faf8f5] flex flex-col items-center pb-12">

      {/* Top bar */}
      <div className="w-full max-w-lg px-4 pt-5 pb-2 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">My Profile</span>
      </div>
      {showDeleteModal && <DeleteAccount onClose={() => setShowDeleteModal(false)} />}
      {showUpdatePassword && <UpdatePassword onClose={() => setShowUpdatePassword(false)} />}
      <div className="w-full max-w-lg px-4 flex flex-col gap-4">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="h-16 bg-gradient-to-r from-[#b48068] to-[#eee2ca]">
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex flex-row gap-2">
                <UpdateImage />
                <div className="flex items-center gap-1">
                  <input
                    disabled={enableEdit !== "name"}
                    autoFocus={enableEdit === "name"}
                    onBlur={() => setEnableEdit("")}
                    type="text"
                    value={userState.name || ""}
                    onChange={(e) => setUserState({ ...userState, name: e.target.value })}
                    className={`font-bold text-gray-900 bg-transparent outline-none transition-all duration-200
            ${enableEdit === "name"
                        ? "border-b-2 border-[#b48068] text-base"
                        : "border-b-2 border-transparent text-lg"
                      }`}
                    size={(userState.name?.length || 4) + 1}
                  />
                  <button className="cursor-default text-gray-300 hover:text-[#b48068] transition-colors text-sm">
                    {enableEdit === "name" ? (
                      <MdFileDownloadDone
                        className="text-[#b48068]"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => { updateName(userState.name); setEnableEdit(""); }}
                      />
                    ) : (
                      <LuPencilLine onClick={() => setEnableEdit("name")} />
                    )}
                  </button>
                </div>
              </div>
              <div >
                <select
                  value={user?.rank || "customer"}
                  onChange={(e) => updateRank(e.target.value)}
                  className="cursor-default text-xs font-semibold text-[#b48068] border border-[#b48068]/40 rounded-full px-3 py-1 bg-[#b48068]/5 focus:outline-none"
                >
                  <option value="customer">Customer</option>
                  <option value="wholesaler">Wholesaler</option>
                </select>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5">
            {/* Editable fields */}
            <EditableField
              label="Email" field="email" value={userState.email}
              enableEdit={enableEdit} setEnableEdit={setEnableEdit}
              type="email" placeholder="Add email"
              onChange={(e) => setUserState({ ...userState, email: e.target.value })}
              onSave={() => { updateEmail(userState.email); setEnableEdit(""); }}
            />
            <EditableField
              label="Phone" field="number" value={userState.number}
              enableEdit={enableEdit} setEnableEdit={setEnableEdit}
              type="number" placeholder="Add phone number"
              onChange={(e) => setUserState({ ...userState, number: e.target.value })}
              onSave={() => { updateNumber(userState.number); setEnableEdit(""); }}
            />
            <EditableField
              label="Location" field="location" value={userState.location}
              enableEdit={enableEdit} setEnableEdit={setEnableEdit}
              placeholder="Add location"
              onChange={(e) => setUserState({ ...userState, location: e.target.value })}
              onSave={() => { updateLocation(userState.location); setEnableEdit(""); }}
            />
          </div>
        </div>

        {/* ── stats ── */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/Save">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center justify-between hover:border-[#b48068]/40 transition-colors">
              <span className="text-sm font-semibold text-gray-700">Wish List</span>
              <span className="text-lg font-bold text-[#b48068]">{user?.saved?.length || 0}</span>
            </div>
          </Link>
          <Link to="/Cart">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center justify-between hover:border-[#b48068]/40 transition-colors">
              <span className="text-sm font-semibold text-gray-700">Cart</span>
              <span className="text-lg font-bold text-[#b48068]">{user?.cart?.length || 0}</span>
            </div>
          </Link>
        </div>
        {/* Coupons */}
        {user?.coupons?.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Your Coupons
            </h3>
            <div className="flex flex-col gap-2">
              {user.coupons.map((coupon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gradient-to-r from-[#b48068]/10 to-[#eee2ca]/30 border border-[#b48068]/20 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏷️</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Coupon Code
                      </p>
                      <p className="font-bold text-sm tracking-widest text-gray-900 border border-dashed border-[#b48068] px-2 py-0.5 rounded mt-0.5 inline-block">
                        {coupon.code}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-semibold">Value</p>
                    <p className="text-lg font-bold text-[#b48068]">${coupon.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Activity */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`cursor-default flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200
                  ${active === tab
                    ? "text-[#b48068] border-b-2 border-[#b48068] bg-[#b48068]/5"
                    : "text-gray-400 hover:text-gray-600 border-b-2 border-transparent"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 p-3 max-h-72 overflow-y-auto [scrollbar-width:none]">
            {/* Comments */}
            {active === "comments" &&
              (user?.userComments?.length > 0 ? (
                [...user.userComments].reverse().map((comment) => (
                  <div key={comment._id} className="px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <Link
                        to={`/ProductDetail/${comment.product}`}
                        className="text-xs font-semibold text-[#b48068] hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Product →
                      </Link>
                      <span className="text-[10px] text-gray-400">{timeAgo(comment.createdAt)}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{comment.text}</p>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-400">No comments yet</p>
                </div>
              ))}

            {/* Orders */}
            {active === "orders" &&
              (user?.userOrders?.length > 0 ? (
                [...user.userOrders].reverse().map((order) => {
                  const liveStatus = getSimulatedStatus(order.createdAt);
                  const items = order.products || [];
                  return (
                    <div
                      key={order._id}
                      onClick={() => navigate("/OrderDetail", { state: { order } })}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-3 cursor-default hover:border-[#b48068]/40 hover:bg-[#b48068]/5 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-bold text-gray-400 truncate max-w-[130px]">{order._id}</p>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${STATUS_COLOR[liveStatus]}`}>
                          {STATUS_LABELS[liveStatus]}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        {items.slice(0, 3).map((item, i) => (
                          <img key={i} src={item.imageUrl} alt={item.name}
                            className="w-9 h-9 rounded-lg object-cover border border-gray-200" />
                        ))}
                        {items.length > 3 && (
                          <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                            +{items.length - 3}
                          </div>
                        )}
                        <div className="ml-auto text-right">
                          <p className="font-bold text-sm text-gray-800">${order.totalPrice}</p>
                          <p className="text-[10px] text-gray-400">{items.length} item{items.length !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1.5 border-t border-gray-200">
                        <p className="text-[10px] text-gray-400">{timeAgo(order.createdAt)}</p>
                        <p className="text-[10px] text-[#b48068] font-bold">View Details →</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-400">No orders yet</p>
                </div>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setShowUpdatePassword(true)}
            className="cursor-default py-3 rounded-xl text-sm font-bold tracking-wide border-2 border-[#b48068] text-[#b48068] hover:bg-[#b48068] hover:text-white transition-all duration-300"
          >
            Password
          </button>
          <button
            onClick={handleLogout}
            className="cursor-default py-3 rounded-xl text-sm font-bold tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Logout
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="cursor-default py-3 rounded-xl text-sm font-bold tracking-wide border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Delete
          </button>
        </div>

      </div>
    </section>
  );
}