import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[4rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-center gap-4 leading-4">
                <button className="cursor-pointer hborder-b-2">NEW</button>
                <button className="cursor-pointer hborder-b-2">WOMEN</button>
                <button className="cursor-pointer hborder-b-2">MEN</button>
                <button className="cursor-pointer hborder-b-2">TRENDS</button>
                <div className="flex flex-row items-center justify-center gap-2 cursor-pointer group">
                    <FaSliders />
                    <button className="group-hover:border-b-2">Filter</button>
                </div>
            </section>
            {/* Product section */}
            <section>
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
                <img src={demo} alt="" />
            </section>
         </div>
        </>
    )
}

export default Product;