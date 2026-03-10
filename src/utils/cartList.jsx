import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../utils/ProductsProvider.jsx";
import { userStore } from "../Store/userStore";

export const Carts = (user) => {
  const { products } = useContext(ProductsContext);
  const { removeCart, setItemQuantity } = userStore();
  const cartItemsList = user?.user?.cart?.map((item) => {
    const productDetails = products.find(
      (p) => String(p._id) == String(item.product),
    );
    return {
      ...item,
      name: productDetails?.name,
      imageUrl: productDetails?.imageUrl,
      price: productDetails?.price,
      stock: productDetails?.stock,
    };
  });

  if (cartItemsList?.length === 0) {
    return (
      <section className="w-full h-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Nothing In Cart</h1>
      </section>
    );
  }

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      {cartItemsList?.map((item) => (
        <div
          key={item?._id}
          className="w-full flex flex-row items-center justify-center py-6 max-[350px]:py-2 gap-4 border-t-2 border-t-gray-400"
        >
          <Link to={`/ProductDetail/${item?.product}`}>
            <img
              className="w-24 h-24 rounded-sm"
              src={item?.imageUrl}
              alt={item?.name}
            />
          </Link>
          <div className="flex flex-row items-start justify-between gap-2 max-[350px]:gap-0 max-[500px]:flex-col">
            <div className="flex flex-col items-start justify-start gap-6 max-[750px]:gap-2 max-[500px]:gap-0">
              <h1 className="font-bold text-[1.2rem] leading-5 max-[350px]:text-[0.95rem] w-[20rem] max-[760px]:w-60 max-[600px]:w-40 max-[500px]:w-60 max-[370px]:w-44 max-[760px]:text-[1rem]">
                {item?.name}
              </h1>
              <div className="flex flex-row gap-4">
                <p className="text-sm max-[350px]:text-xs">
                  Size: {item?.size}
                </p>
                <p className="text-sm max-[350px]:text-xs">${item?.price}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 max-[350px]:gap-3">
              <h1 className="font-bold max-[350px]:font-semibold max-[350px]:text-sm">
                ${(item?.quantity * item.price).toFixed(2)}
              </h1>
              <div className="flex flex-row item-center justify-center leading-4">
                <select
                  value={item?.quantity}
                  onChange={(e) =>
                    setItemQuantity(item?._id, e.target.value)
                  }
                  className="cursor-default text-[#b48068] border border-[#b48068] rounded-sm px-2 py-1 bg-white text-[0.9rem] focus:outline-none"
                >
                  {Array.from({ length: item?.stock }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <RxCross2
                onClick={() => removeCart({ productId: item?._id })}
                className="cursor-default hover:text-red-800"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
