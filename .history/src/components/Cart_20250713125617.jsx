import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import img1 from "../assets/seller3.png";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between select-none px-4">
                <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                        <FaRegHeart className="cursor-pointer hover:text-gray-500" />
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    </div>
                </section>
                <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Shopping Cart</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="w-[100%] flex flex-row items-center justify-between py-6 gap-4 border-t-2 border-t-gray-400">
                        <img className="w-[5rem] h-[5rem] rounded-sm" src={img1} />
                        <div className="flex flex-row items-center justify-center gap-[6rem] max-[600px]:gap-[3rem] max-[500px]">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="font-bold text-[1.2rem] leading-4">Jeans with pockets</h1>
                                <div className="flex flex-row gap-4">
                                <p className="text-sm">Size: M</p>
                                <p className="text-sm">$450.98</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[1rem]">
                                <h1 className="font-bold">$901.96</h1>
                                <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 leading-4">
                                <FiMinus className="cursor-pointer hover:text-gray-700"/>
                                    <h1 className="text-[1.2rem]">1</h1>
                                    <FaPlus className="cursor-pointer hover:text-gray-700"/>
                                </div>
                                <RxCross2 className="cursor-pointer hover:text-red-800" />                        
                            </div>
                        </div>   
                    </div>
                    

                    <div className="w-[100%] flex flex-row items-start justify-between py-6 border-t-2 border-t-gray-400">
                        <div className="flex flex-col items-center justify-start gap-2">
                            <h1 className="font-semibold">Do you have a discount?</h1>
                            <div className="flex flex-row gap-2 items-center justify-center">
                            <input type="text" placeholder="Coupon code" className="w-[10rem] h-[2.5rem] px-4 rounded-sm border-gray-300 bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                            <FaArrowRight className="w-[2rem] h-[2rem] text-white cursor-pointer p-2 bg-black rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <h1>Delivery charges: <span className="font-bold">$10</span></h1>
                            <h1>Discount: <span className="font-bold">$20</span></h1>
                            <h1 className="text-[2rem]">Total: <span className="font-bold">$890.98</span></h1>
                            <button className="w-[100%] bg-black text-white rounded-sm cursor-pointer py-2">Proceed to checkout</button>
                        </div>
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Cart;