import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import Men from "../assets/discountMen.png";
import Women from "../assets/discountwomen.png";

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <section className='w-[25%] h-auto bg-gray-300 p-[1rem]'>
                <img className="h-[11rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src={Men} alt="Men discount" />  
                <div className='pt-[0.65rem]'>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p className='font-semibold'>MEN COLLECTION</p>
                <button className='group font-semibold hover:bg-gray-200 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </div>
            </section>
            <section className='w-[25%] h-auto bg-pink-500 p-[1rem] '>
                <div className="pb-[0.65rem]">
                <h1 className="font-bold text-2xl">60% OFF</h1>
                <p className='font-semibold'>WOMEN COLLECTION</p>
                <button className='group font-semibold hover:bg-pink-400 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </div>
                <img className="h-[10rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src={Women} alt="Women Discount" />
            </section>
            <section className='w-[25%] h-auto bg-yellow-300 p-[1rem] '>
                <img className="h-[10rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src={Men} alt="" />
                <div className="pt-[0.65rem]">
                <h1 className="font-bold text-2xl">30% OFF</h1>
                <p className='font-semibold'>NEW COLLECTION</p>
                <button className='group font-semibold hover:bg-yellow-200 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </div>
            </section>
        </div>
        </>
    );
}

export default Discount;