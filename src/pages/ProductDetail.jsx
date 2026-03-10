import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { ProductsContext } from "../utils/ProductsProvider.jsx";
import { ProductPrice } from "../utils/productPrice.jsx";
import { BackButton } from "../utils/navItems.jsx";
import { HandleSave } from "../utils/handleSave.jsx";
import { HandleCart } from "../utils/handleCart.jsx";
import { UserProfileButton } from "../utils/navItems.jsx";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const image = products.find((img) => String(img._id) == String(id));
  const [comment, setComment] = useState("");
  const [num, setNum] = useState(1);
  const [select, setSelect] = useState("M");
  const [description, setDescription] = useState(true);

  if (!image) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold text-gray-500">Loading product...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-[1rem] mb-4">
        {/* navbar */}
        <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
          <BackButton />
          <div className="flex flex-row items-center justify-center gap-6 text-xl">
            <Link to="/Save">
              <FaRegHeart className="cursor-default hover:text-gray-500" />
            </Link>
            <Link to="/Cart">
              <FaCartShopping className="cursor-default hover:text-gray-500" />
            </Link>
            <UserProfileButton user={user}/>
          </div>
        </section>

        <section className="w-[40rem] max-[600px]:w-[20rem] h-auto flex flex-col items-center justify-center border-2 border-[#b48068]/50 rounded-sm bg-[#f7ecd6]">
          {/* card */}
          <div className="flex flex-row max-[600px]:flex-col select-none items-center justify-center w-full h-[25rem] max-[600px]:h-auto">
            {/* image div */}
            <div className="w-1/2 max-[600px]:w-full h-full flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={image?.imageUrl}
                alt={image?.name}
              />
            </div>

            {/* details div */}
            <div className="w-1/2 max-[600px]:w-full h-full flex flex-col items-start justify-start px-6 py-8 gap-4">
              <div className="flex flex-row items-center justify-between w-full">
                <span className="w-full flex flex-row">
                  {[...Array(5)].map((_, i) =>
                    i < image?.rating ? <FaStar key={i} /> : <CiStar key={i} />,
                  )}
                </span>
                <p className="text-sm font-semibold">
                  Stock:{image?.stock - image?.orderCount}
                </p>
              </div>
              <span>
                <p className="text-sm">{image?.category}</p>
                <h1 className="text-[1.3rem] font-bold">{image?.name}</h1>
              </span>
              <div className=" w-full flex flex-row items-center justify-between">
                <ProductPrice price={image?.price} />
                <HandleSave productId={image?._id} />
              </div>
              <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-2 leading-4">
                <FiMinus
                  onClick={num >= 2 ? () => setNum(num - 1) : null}
                  className="cursor-default hover:text-gray-700"
                />
                <h1 className="text-[1.5rem]">{num}</h1>
                <FaPlus
                  onClick={num < image?.stock ? () => setNum(num + 1) : null}
                  className="cursor-default hover:text-gray-700"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-[1rem] mb-4">
                {image?.sizes?.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelect(size);
                    }}
                    className={`w-[2.5rem] h-[2.5rem] ${select == size ? "bg-gray-500 text-white" : ""} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-default transition-all duration-300 ease`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex flex-row w-full items-center justify-start gap-[1rem]">
                <button
                  className={`rounded-sm w-auto py-1 px-3 bg-gray-600 hover:bg-gray-600/80 cursor-default transition-all duration-500 ease`}
                >
                  Buy now
                </button>
                <HandleCart
                  size={select}
                  quantity={num}
                  productId={image?._id}
                />
              </div>
            </div>
          </div>

          {/* horizontal line */}
          <div className="w-full border-t-2 border-[#b48068]/50"></div>
          {/* description div */}
          <div className="w-full h-auto rounded-md p-4">
            <span className="w-full text-[1.3rem] flex flex-row items-center justify-between">
              <h1 className="font-semibold">Product Details</h1>
              <IoIosArrowDown
                className={`${description ? "rotate-180" : ""} transition-transform duration-300 ease`}
                onClick={() => setDescription(!description)}
              />
            </span>
            <p
              className={`${description ? "block" : "hidden"} mt-3 text-justify text-md leading-6 transition-transform duration-500 ease`}
            >
              {image?.description}
            </p>
          </div>

          {/* comments div */}
          <div className="w-full h-auto px-2 relative">
            <div className="w-full">
              <input
                className="px-6 py-2 rounded-full w-full bg-gray-100 border-1 border-gray-500 text-[1.3rem]"
                placeholder="Comments"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <BsFillSendFill
                className={`${comment ? "cursor-default text-gray-700" : "cursor-not-allowed text-gray-400"} absolute right-7 top-3 text-[1.6rem]`}
              />
            </div>
            <div className="w-full h-auto p-4">
              {products?.comments?.length > 0 ? (
                products?.comments?.map((comment, index) => (
                  <div key={index} className="mt-2">
                    <p className="text-sm">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm">No comments yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetail;
