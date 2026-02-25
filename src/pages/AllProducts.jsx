import { useState, useEffect, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { productsStore } from "../Store/productsStore.js";

function AllProducts() {
  const { param } = useParams();
  const { products, fetchProducts, loading, error, total } = productsStore();
  const [filterProducts, setFilterProducts] = useState([]);
  const searchRef = useRef(null);
  const [pages, setPages] = useState(1);
  const loaderRef = useRef(null);

  // intersection observer useEffect
  useEffect(() => {

    // observer
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !loading && products.length < total) {
        setPages(prev => prev + 1);
      }
    }, { threshold: 0 });

    //  call observer
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // clean up function
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };

  }, [loading]);

  // load products when page number changes
  useEffect(() => {
    console.log(total, products.length);
    fetchProducts(pages);
  }, [pages]);

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
      <div className="w-[100%] h-auto font-serif">
        {/* navbar */}
        <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
          <Link to="/">
            <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
          </Link>
          <div className="flex flex-row items-center justify-center gap-6 text-xl">
            <Link to="/Save">
              <FaRegHeart className="cursor-pointer hover:text-gray-500" />
            </Link>
            <Link to="/Cart">
              <FaCartShopping className="cursor-pointer hover:text-gray-500" />
            </Link>
          </div>
        </section>

        {/* second navbar search field */}
        <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
          <h1 className="font-bold text-2xl">Explore All Products</h1>
          <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
            <input type="text" ref={searchRef}
              placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
            <BiSearch onClick={() => handleSearchItems()} className="font-bold cursor-pointer text-2xl hover:text-[#b48068]" />
          </div>
        </section>

        {/* display products */}
        <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
          {filterProducts?.map((item, index) => (
            <Link key={`${item._id}-${index}`} to={`/ProductDetail/${item._id}`}>
              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.imageUrl} alt={item.name} />
            </Link>
          ))}
        </section>


        {/* when div hit fetch more data */}
        <div ref={loaderRef} className="text-center h-10 w-[100%]">
          {
            loading && <p className="text-center font-bold text-md">Loading more...</p>
          }
          {
            error && <p className="text-center font-bold text-md text-red-500">{error}</p>
          }
          {
            products.length >= total && <p className="text-center font-bold text-md text-gray-500">No more products to show</p>
          }
        </div>
      </div>
    </>
  );
};

export default AllProducts;