export function ProductPrice({ price }) {
  const discount = 15;
  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price.toFixed(2);
  return (
    <div className="flex flex-col">
      <h2 className="text-[1.2rem] font-semibold text-[#b48068]">
        ${(price - discountedPrice).toFixed(3)}
      </h2>
      <span className="flex flex-row">
        <h3 className="text-gray-500 line-through">{price}</h3>
        <p className="text-sm p-1">-{discount}%</p>
      </span>
    </div>
  );
}
