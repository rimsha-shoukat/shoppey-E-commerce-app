import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';


const AllProducts = () => {
  return (
    <>
    <section className="w-[100vw] h-auto p-0 m-0 font-serif flex flex-col items-center justify-center overflow-hidden">

    <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
        <Link to="/">
          <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
        </Link>
        <div className="flex flex-row items-center justify-center gap-4 text-xl">
            <FaRegUser className="cursor-pointer hover:text-gray-500" />
            <FaCartShopping className="cursor-pointer hover:text-gray-500" />
        </div>
    </section>
    <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
           <h1 className="font-bold text-2xl">Explore All Products</h1>
            <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
                <input type="text" placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                <BiSearch className="font-bold cursor-pointer text-2xl hover:text-white/50"/>
            </div>
    </section>

    <section className="flex flex-col w-[100%] h-auto items-center justify-center gap-2 p-2">
      <section className="flex flex-col items-center justify-center p-4 bg-red-900 w-[30%] h-auto"></section>
      <section classNAme="grid gr"></section>
    </section>

    </section>
    </>
  );
};

export default AllProducts;