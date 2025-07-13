import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between gap-[2rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </section>
                <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
                              <h1 className="font-bold text-2xl">Explore All Products</h1>
                                <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
                                    <input type="text" placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                                    <BiSearch className="font-bold cursor-pointer text-2xl hover:text-[#b48068]"/>
                                </div>
                </section>
            </div>
        </>
    )
}

export default Cart;