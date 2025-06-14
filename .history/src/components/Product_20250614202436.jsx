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
            {/* Product slider */}
            <section className="grid grid-rows-2 gap-2 mt-6 border-2 border-red-900 overflow-hidden w-[90%]">
                <div className="flex flex-row gap-2 w-auto h-autr">
                    <div className="flex flex-col w-[16rem] h-auto">
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-[#eee2ca] ">
                        <h1>*****</h1>
                        <h1>Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                    <img className="w-[16rem] h-[14rem] shadow-lg" src={demo} alt="demo" />
                </div>
            </section>
         </div>
        </>
    )
}

export default Product;