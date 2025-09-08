import { useState, useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

function AllProducts({ Products }) {
  const { param } = useParams();
  const [filterProducts, setFilterProducts] = useState(Products);
  const searchRef = useRef(null);
  const [userView, setUserView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('account')) || false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser ')) || null);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleLogout = () => {
    localStorage.setItem('account', JSON.stringify(false));
    localStorage.setItem('currentUser', JSON.stringify(null));
    setIsLoggedIn(false);
    setUser(null);
    setUserView(false);
  };

  function handleSearchItems() {
    if (searchRef.current.value !== "") {
      const searchProducts = Products.filter((product) =>
        product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()));
      if (searchProducts.length > 0) {
        setFilterProducts(searchProducts);
      } else {
        setAlert("no Item Found");
        setShowAlert(tru)
      }
    }
  }

  useEffect(() => {
    let Items = [...Products];

    if (param) {
      if (['beauty', 'fragrances', 'furniture', 'groceries'].includes(param)) {
        Items = Items.filter(item => item.category === param);
      } else if (['rating', 'discountPercentage'].includes(param)) {
        if (param === "rating") {
          Items = Items.filter(item => item.rating >= 3);
        } else if (param === "discountPercentage") {
          Items = Items.filter(item => item.discountPercentage > 10);
        }
      }
    }

    setFilterProducts(Items);

  }, [param]);

  return (
    <>
      <div className="w-[100%] h-auto font-serif">

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
              isLoggedIn ? (
                <h1 onClick={() => setUserView(!userView)} className="cursor-pointer hover:text-gray-500">{user.name}</h1>
              ) : (
                <Link to="/SignIU">
                  <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </Link>
              )
            }
            {
              isLoggedIn ? (
                userView && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                  <h1 className="text-[1.5rem] text-[#b48068] leading-5">Hello, {user?.name}!</h1>
                  <h1 className="text-[1.2rem]">{user?.email}</h1>
                  <button onClick={handleLogout} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Logout</button>
                </div>
              ) : (null)
            }
            {
                    showAlert && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                        <h1 className="text-[1.5rem] text-[#b48068] leading-5">Alert</h1>
                        <h1 className="text-[1.2rem]">{alert}</h1>
                        <button onClick={() => setShowAlert(false)} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Close</button>
                    </div>
                }

          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
          <h1 className="font-bold text-2xl">Explore All Products</h1>
          <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
            <input type="text" ref={searchRef}
              placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
            <BiSearch onClick={() => handleSearchItems()} className="font-bold cursor-pointer text-2xl hover:text-[#b48068]" />
          </div>
        </section>

        <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
          {filterProducts.map((item) => (
            <Link key={item.id} to={`/ProductDetail/${item.id}`}>
              <img key={item.id} loading="lazy" className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.thumbnail} alt="products" />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllProducts;