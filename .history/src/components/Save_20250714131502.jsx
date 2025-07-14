import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import img1 from "../assets/seller3.png";

function Save(){
    return(
        <>
             <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between select-none px-4 max-[350px]:px-2">
                <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                        <Link to="/Cart">
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                        </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    </div>
                </section>
                <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Save Items</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="w-[100%] flex flex-row items-center justify-between py-6 max-[350px]:py-2 gap-4 max-[350px]:gap-2 border-t-2 border-t-gray-400">
                        <img className="w-[10rem] h-[10rem] rounded-sm" src={img1} />
                        <div className="flex flex-row items-center justify-between gap-[6rem]">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="text-[1.3rem] leading-4 font-bold">Jeans with pockets</h1>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-md font-semibold">Size: M</p>
                                    <p className="text-md font-semibold">$450.34</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-6">
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none bg-blue-700">Add to cart</button>
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none bg-red-600">Remove</button>
                            </div>
                        </div>  
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Save;