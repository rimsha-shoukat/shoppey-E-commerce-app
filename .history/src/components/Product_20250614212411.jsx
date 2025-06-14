import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { ImStarEmpty } from "react-icons/im";

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[3rem] max-[430px]:p-[1rem] flex flex-col items-center justify-center font-serif select-none">
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
            <section className="w-auto h-auto flex flex-row gap-2 items-center justify-center">
                <FaAnglesLeft className="text-[1.5rem] text-gray-300 hover:text-gray-400S cursor-pointer" />
                <div className="grid grid-rows-2 gap-2 mt-6 overflow-hidden w-auto p-2 inset-shadow-sm inset-shadow-gray-200">
                <div className="flex flex-row gap-2 items-center justify-between">

                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>

                </div>
                <div className="flex flex-row gap-2 items-center justify-between">
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                </div>
                </div>
                <FaAnglesRight className="text-[1.5rem] text-gray-300 cursor-pointer" />
            </section>
         </div>
        </>
    )
}

export default Product;