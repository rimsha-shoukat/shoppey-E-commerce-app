import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto py-[5rem] max-[710px]:pt-[5rem] max-[710px]:pb-0 flex flex-row max-[710px]:flex-col max-[710px]:gap-[1rem] items-center justify-evenly">
            <section className='w-[25%] max-[890px]:w-[30%] max-[710px]:w-[50%] h-auto bg-gray-300 p-[1rem] max-[460px]:w-[70%] max-[320px]:w-[80%]'>
                <img className="h-[10rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src="assets/discountMen.webp" alt="Men discount" />  
                <div className='pt-[0.65rem]'>
                <h1 className="font-bold text-2xl select-none">40% OFF</h1>
                <p className='font-semibold select-none'>BEAUTY COLLECTION</p>
                <Link to="/AllProducts/beauty">
                 <button className='group font-semibold hover:bg-gray-200 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </Link>
                </div>
            </section>
            <section className='w-[25%] max-[890px]:w-[30%] h-auto bg-pink-500 p-[1rem] max-[710px]:w-[50%] max-[460px]:w-[70%] max-[320px]:w-[80%]'>
                <div className="pb-[0.65rem]">
                <h1 className="font-bold text-2xl select-none">60% OFF</h1>
                <p className='font-semibold select-none'>FRAGRANCES COLLECTION</p>
                <Link to="/AllProducts/frarences">
                 <button className='group font-semibold hover:bg-pink-400 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </Link>
                </div>
                <img className="h-[10rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src="assets/discountWomen.webp" alt="Women Discount" />
            </section>
            <section className='w-[25%] max-[890px]:w-[30%] h-auto bg-yellow-300 p-[1rem] max-[710px]:w-[50%] max-[460px]:w-[70%] max-[320px]:w-[80%]'>
                <img className="h-[10rem] w-[100%] scale-105 rotate-x-5 -rotate-y-10" src="assets/discountKids.webp" alt="New Discount" />
                <div className="pt-[0.65rem]">
                <h1 className="font-bold text-2xl select-none">30% OFF</h1>
                <p className='font-semibold select-none'>GROCERIES COLLECTION</p>
                <Link to="/AllProducts/groceries">
                 <button className='group font-semibold hover:bg-yellow-200 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150'/></button>
                </Link>
                </div>
            </section>
        </div>
        </>
    );
}

export default Discount;