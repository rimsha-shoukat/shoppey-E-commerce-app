import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import img1 from "../assets/seller3.png";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between gap-[1rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </section>
                <section className="flex flex-col items-center justify-center w-[100%] p-10 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Shopping Cart</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-between py-6 border-t-2 border-t-gray-400">
                        <div className="flex flex-row items-center justify-start gap-4 w-[50%]">
                            <img className="w-[4rem] h-[4rem] rounded-sm" src={img1} />
                        <div className="flex flex-col items-center justify-start">
                            <h1 classNam>Jeans with Pockets</h1>
                            <div className="flex flex-row gap-4">
                            <p className="text-sm">Size: M</p>
                            <p className="text-sm">$450.98</p>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[50%]">
                            <h1>$901.96</h1>
                            <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-6 leading-4">
                               <FiMinus className="cursor-pointer hover:text-gray-700"/>
                                <h1 className="text-[1.5rem]">2</h1>
                                <FaPlus className="cursor-pointer hover:text-gray-700"/>
                            </div>
                            <button className="px-[2rem] py-[10px] rounded-md text-nowrap shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer">Remove</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart;