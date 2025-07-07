import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const AllProducts = () => {
  return (
    <main className="w-[100%] h-auto p-0 m-0 font-serif flex flex-col items-center justify-center overflow-hidden">

    <section className="flex flex-row items-center justify-between p-2 w-[100%] h-auto">
        <Link to="/">
          <button className="font-extrabold font-serif text-lg">shoppey</button>
        </Link>
        <div className="flex flex-row items-center justify-center gap-4 text-lg">
            <FaRegUser className="cursor-pointer      p-2 rounded-full hover:bg-gray-800" />
            <FaCartShopping className="cursor-pointer p-2 rounded-full hover:bg-gray-800" />
        </div>
    </section>
    <section className="flex flex-col items-center p-4 justify-center w-[100%] border-none rounded-[1rem] h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
           <h1 className="font-bold text-xl">Explore All Products</h1>
            <div className="flex flex-row items-center justify-center w-[100%]">
                <input type="text" placeholder="Search" className="w-[20rem] h-[2.5rem] px-2 rounded-full border-none bg-white/50 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                <CiSearch />
            </div>
    </section>

    </main>
  );
};

export default AllProducts;