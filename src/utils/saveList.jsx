import { useState, useContext } from "react";
import { userStore } from "../Store/userStore.js";
import { HandleCart } from "./handleCart.jsx";;
import { Link } from "react-router-dom";
import { PopUp } from "./popupMessage.jsx";
import { ProductsContext } from "./ProductsProvider.jsx";

export const Saves = ({ user, products }) => {
  const { updateSave, removeSaved } = userStore();
    const [popupMsg, setPopupMsg] = useState(null);
    const { discounts } = useContext(ProductsContext);
  const saveItemsList =  products.filter(product => user?.saved?.includes(product?._id)) || [];
  const getDiscountedPrice = (price, category) => {
    const discount = discounts?.find(dis => dis.category == category);
    return discount?.percent
      ? parseFloat((price - (price * discount.percent) / 100).toFixed(2))
      : parseFloat(price?.toFixed(2));
  };
  if (saveItemsList?.length === 0) {
    return (
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Nothing In Saved Items</h1>
      </div>
    );
  }
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      {/* pop up message */}
        {popupMsg && <PopUp popupMsg={popupMsg} setPopupMsg={setPopupMsg}/>}
      {saveItemsList.map((item, index) => (
        <div
          key={`${item?._id}-${index}`}
          className="w-auto flex flex-row items-center justify-start py-6 max-[600px]:py-2 gap-4 max-[600px]:gap-2 border-t-2 border-t-gray-400"
        >
          <Link to={`/ProductDetail/${item?._id}`}>
            <img
              className="w-32 h-32 max-[400px]:w-24 max-[400px]:h-24 rounded-sm"
              src={item?.imageUrl}
              alt={item?.name}
            />
          </Link>
          <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-start justify-between gap-12 ">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-[1.3rem] leading-7 line-clamp-1 max-[750px]:text-[1rem] max-[750px]:leading-5 w-[20rem] max-[750px]:w-56 max-[650px]:w-40 max-[600px]:w-[18rem] max-[440px]:w-60 max-[400px]:w-48 max-[320px]:w-40 overflow-hidden font-bold max-[400px]:text-[0.85rem] max-[400px]:font-semibold">
                {item?.name}
              </h1>
                <p className="text-md text-nowrap max-[400px]:text-sm">
                   ${getDiscountedPrice(item?.price, item?.category).toFixed(2)}
                </p>
            </div>
            <div className="flex flex-row items-start justify-start gap-2">
              <HandleCart productId={item?._id} setPopupMsg={setPopupMsg}/>
              <button
                onClick={() => updateSave({productId: item?._id})}
                className="w-auto py-1 px-2 rounded-sm cursor-default bg-red-600 hover:bg-red-600/70"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    <button onClick={() => removeSaved()} className="text-red-700 p-1 hover:text-red-900">remove all</button>
    </section>
  );
};