import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

export function ProductPrice({ price, category }) {
  const { discounts } = useContext(ProductsContext);
  const discount = discounts?.find(dis => dis.category == category);

  const discountedPrice = discount?.percent
    ? (price - (price * discount?.percent) / 100).toFixed(2)
    : price?.toFixed(2);

  return (
    <div className="flex flex-col">
      <h2 className="text-[1.2rem] font-semibold text-[#b48068]">
        {discount?.percent == 0 ? price : discountedPrice}
      </h2>
      {discount?.percent == 0 ? <p className="text-gray-500">No discount available</p> : <span className="flex flex-row">
        <h3 className="text-gray-500 line-through">{price}</h3>
        <p className="text-sm p-1">-{discount?.percent}%</p>
      </span>}
    </div>
  );
}
