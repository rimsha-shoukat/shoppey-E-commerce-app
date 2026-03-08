import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { UserProfileButton } from "../utils/navItems.jsx";
import { BackButton } from "../utils/navItems.jsx";
import { Carts } from "../utils/cartList.jsx";

function Cart() {
  const { user } = useContext(UserContext);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [bill, setBill] = useState(0);
  const [show, setShow] = useState(false);
  const [coupon, setCoupon] = useState("");

  return (
    <>
      <div className="w-[100%] h-auto  flex flex-col items-center justify-between select-none px-4 max-[350px]:px-2">
        <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
          <BackButton />
          <div className="flex flex-row items-center justify-center gap-6 text-xl">
            <Link to="/Save">
              <FaRegHeart className="cursor-default hover:text-gray-500" />
            </Link>
            <UserProfileButton user={user} />
          </div>
        </section>
        <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
        </section>
        {user ? (
          <section className="w-[100%] h-auto flex flex-col items-center justify-center">
            <Carts
              user={user}
            />

            <div className="w-[100%] flex flex-row max-[500px]:flex-col items-start max-[500px]:items-center gap-2 max-[500px]:gap-4 justify-between py-6 border-t-2 border-t-gray-400">
              <div className="w-[100%] flex flex-col items-start justify-start gap-2">
                <h1 className="font-semibold">Do you have a discount?</h1>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="w-[10rem] h-[2.5rem] px-4 rounded-sm border-gray-300 bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]"
                  />
                  <FaArrowRight className="w-[2rem] h-[2rem] text-white cursor-default p-2 bg-black rounded-full" />
                </div>
                {show && (
                  <p className="text-sm text-red-500">Code does not exist!</p>
                )}
              </div>
              <div className="w-[100%] flex flex-col gap-2 items-start justify-start">
                <h1>
                  Delivery charges:{" "}
                  <span className="font-bold">${delivery?.toFixed(2)}</span>
                </h1>
                <h1>
                  Discount:{" "}
                  <span className="font-bold">${discount?.toFixed(2)}</span>
                </h1>
                <h1 className="text-[2rem] max-[350px]:text-[1rem]">
                  Total: <span className="font-bold">${bill?.toFixed(2)}</span>
                </h1>
                <button className="w-[100%] bg-black text-white rounded-sm cursor-default py-2">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="w-[100%] h-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              Please Sign In to view your cart
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
