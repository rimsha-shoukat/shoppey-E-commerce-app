import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[4rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-center gap-4">
                <button>NEW</button>
                <button>WOMEN</button>
                <button>MEN</button>
                <button>TRENDS</button>
                <div className="flex flex-row ">
                    <button><FaSliders /> Filter</button>
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