import { useState, useEffect, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import {useContext} from 'react';
import { ProductsContext } from "../utils/ProductsProvider.jsx";

function AllProducts() {
  const { products } = useContext(ProductsContext);
  const { param } = useParams();
  const [filterProducts, setFilterProducts] = useState([]);
  const searchRef = useRef(null);

  // handle search 
  function handleSearchItems() {
    if (searchRef.current.value !== "") {
      const searchProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
      if (searchProducts.length > 0) {
        setFilterProducts(searchProducts);
      } else {
        // no product found
        setFilterProducts([]);
      }
    }
  }

  // params filter
  useEffect(() => {
    let Items = [...products];
    if (param) {
      if (['men', 'women', 'kids'].includes(param)) {
        Items = Items.filter(item => item.category === param);
      } else if (param === "rating") {
        Items = Items.filter(item => item.rating >= 3);
      }
    }
    setFilterProducts(Items);
  }, [param, products]);

  return (
    <>
      <div className="w-full h-auto">
        {/* navbar */}
        <section className="flex flex-row items-center py-2 px-6 justify-between w-full h-auto">
          <Link to="/">
            <button className="font-extrabold  text-xl cursor-default hover:text-gray-500">shoppey</button>
          </Link>
          <div className="flex flex-row items-center justify-center gap-6 text-xl">
            <Link to="/Save">
              <FaRegHeart className="cursor-default hover:text-gray-500" />
            </Link>
            <Link to="/Cart">
              <FaCartShopping className="cursor-default hover:text-gray-500" />
            </Link>
          </div>
        </section>

        {/* second navbar search field */}
        <section className="flex flex-col items-center justify-center w-full p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
          <h1 className="font-bold text-2xl max-[400px]:text-xl">Explore All Products</h1>
          <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
            <input type="text" ref={searchRef}
              placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
            <BiSearch onClick={() => handleSearchItems()} className="font-bold cursor-default text-2xl hover:text-[#b48068]" />
          </div>
        </section>

        {/* display products */}
        <section className="mt-[1rem] w-[100%] h-auto p-2 flex flex-row items-center justify-center gap-4 flex-wrap">
          {filterProducts?.map((item, index) => (
            <div key={`${item._id}-${index}`} className="w-[15rem] h-auto max-[1000px]:w-[12rem] max-[800px]:w-[10rem] max-[360px]:w-[8rem] shadow-[0.1px_0.1px_0.1rem_#dd957a] flex flex-col bg-[#dd957a]/30 rounded-md items-center justify-center gap-1 hover:shadow-[0.1px_0.1px_0.5rem_#dd957a] transition-all duration-300 ease hover:scale-[1.05]">
              <Link to={`/ProductDetail/${item._id}`}>
                <img className="cover w-[15rem] h-[16rem] max-[1000px]:w-[12rem] max-[1000px]:h-[13rem] max-[800px]:w-[10rem] max-[800px]:h-[11rem] max-[360px]:w-[8rem] max-[360px]:h-[9rem] rounded-t-md border-b border-[#b48068]/20" src={item.imageUrl} alt={item.name} />
              </Link>
              <span className="w-full text-start p-2">
                <h2 className="font-semibold line-clamp-2 text-sm">{item.name}</h2>
                  <p className="text-md text-[#b48068]">${item.price}</p>
                  <span className="w-full flex flex-row">
                    {
                      [...Array(5)].map((_, i) => (
                        i < item.rating ? ( <FaStar key={i} /> ) : (<CiStar key={i} />)
                      ))
                    }
                  </span>
                </span>
            </div>
          ))}
        </section>

      </div>
    </>
  );
};

export default AllProducts;