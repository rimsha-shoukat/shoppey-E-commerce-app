import { useState, useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { productsStore } from "../Store/productsStore";

function AllProducts() {
  const { param } = useParams();
  const { products } = productsStore();
  const [filterProducts, setFilterProducts] = useState(products);
  const searchRef = useRef(null);
  const [userView, setUserView] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(null);


  const handleLogout = () => {
    setUser(null);
    setUserView(false);
  };

  function handleSearchItems() {
    if (searchRef.current.value !== "") {
      const searchProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
      if (searchProducts.length > 0) {
        setFilterProducts(searchProducts);
      } else {
        setAlert("no Item Found");
        setShowAlert(true);
      }
    }
  }

  useEffect(() => {
    let Items = [...products];

    if (param) {
      if (['men', 'women', 'kids'].includes(param)) {
        Items = Items.filter(item => item.category === param);
      } else if (param === "rating") {
        Items = Items.filter(item => item.rating >= 3);
      }
    }

    setFilterProducts(...Items);

  }, [param]);

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
            {
              user ? (
                <h1 onClick={() => setUserView(!userView)} className="cursor-pointer hover:text-gray-500">{user.name}</h1>
              ) : (
                <Link to="/SignIU">
                  <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </Link>
              )
            }
            {/* reusable Alert  */}
            {
              showAlert && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                <h1 className="text-[1.5rem] text-[#b48068] leading-5">Alert</h1>
                <h1 className="text-[1.2rem]">{alert}</h1>
                <button onClick={() => setShowAlert(false)} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Close</button>
              </div>
            }

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
          {filterProducts.map((item) => (
            <Link key={item._id} to={`/ProductDetail/${item._id}`}>
              <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.imageUrl} alt={item.name} />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllProducts;