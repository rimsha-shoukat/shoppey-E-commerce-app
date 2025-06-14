import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[4rem] max-[430px]:p-[1rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-center gap-4 max-[310px]:gap-2 leading-4 w-[100%] h-[2rem] max-[430px]:text-sm">
                <button className="cursor-pointer hover:border-b-2">NEW</button>
                <button className="cursor-pointer hover:border-b-2">WOMEN</button>
                <button className="cursor-pointer hover:border-b-2">MEN</button>
                <button className="cursor-pointer hover:border-b-2">TREND</button>
                <div className="flex flex-row items-center justify-center gap-2 cursor-pointer group">
                    <FaSliders />
                    <button className="group-hover:border-b-2 max-[350px]:hidden">Filter</button>
                </div>
            </section>
            {/* Product section */}
            <section className="grid grid-cols-4 gap-2 mt-4">
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
                <img className="w-[20rem] h-[18rem]" src={demo} alt="" />
            </section>
         </div>
        </>
    )
}

export default Product;