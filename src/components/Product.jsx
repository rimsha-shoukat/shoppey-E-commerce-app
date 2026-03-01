import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../utils/ProductsProvider.jsx";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { ProductPrice } from "../utils/productPrice.jsx";

const Slider = ({ Items }) => {
  return (
    <div
      className="flex flex-row gap-4 items-center justify-between select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {Items.map((item, index) => (
        <div
          key={`${item._id}-${index}`}
          className="flex flex-col flex-shrink-0 w-auto h-auto shadow-lg"
        >
          <Link to={`/ProductDetail/${item._id}`}>
            <img
              className="w-[14.5rem] h-[13rem]"
              src={item.imageUrl}
              alt={item.name}
            />
          </Link>
          <div className="flex flex-col p-2 pt-2 bg-white w-[14.5rem] h-[6rem]">
            <h1 className="font-semibold text-[1rem] text-wrap line-clamp-1">
              {item.name}
            </h1>
            <div className="w-full flex flex-row items-center justify-between">
              <ProductPrice price={item?.price} />
              <FaRegHeart className="text-[1.5rem] text-gray-600 mr-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function Product() {
  const { products } = useContext(ProductsContext);
  const [activeButton, setActiveButton] = useState("ALL");

  console.log("Products in Product.jsx: ", products);

  // Calculate filtered list
  const currentFiltered =
    activeButton === "ALL"
      ? products
      : products.filter((item) => item.category === activeButton.toLowerCase());

  const slide1 = currentFiltered.slice(
    0,
    Math.ceil(currentFiltered.length / 2),
  );
  const slide2 = currentFiltered.slice(Math.ceil(currentFiltered.length / 2));

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  if (products.length <= 0) {
    return (
      <div className="w-full h-auto py-[3rem] flex flex-row overflow-y-hidden overflow-x-scroll [scrollbar-width:none] max-[710px]:flex-col max-[710px]:gap-[1rem] items-center justify-evenly">
        <p className="font-bold text-2xl">
          No products available at the moment.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="w-[100%] h-auto p-[3rem] max-[430px]:p-[1rem] flex flex-col items-center justify-center select-none">
        <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Products</h1>
        {/* categories button section */}
        <section className="flex flex-row items-center justify-center gap-4 max-[565px]:gap-2 leading-4 w-full h-8 max-[565px]:text-sm">
          {["ALL", "MEN", "WOMEN", "KIDS"].map((buttonName) => (
            <button
              key={buttonName}
              onClick={() => handleButtonClick(buttonName)}
              className={`cursor-default hover:text-gray-800 ${
                activeButton === buttonName
                  ? "border-b-2 border-black font-medium"
                  : ""
              }`}
            >
              {buttonName}
            </button>
          ))}
        </section>

        {/* Product slider */}
        <section className="grid grid-rows-2 gap-2 mt-6 overflow-hidden w-auto p-4 inset-shadow-sm inset-shadow-gray-200">
          <Slider Items={slide1} />
          <Slider Items={slide2} />
        </section>
      </div>
    </>
  );
}

export default Product;
