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
                    <h1 className="font-bold text-2xl">Save</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="w-[100%] flex flex-row items-center justify-between py-6 max-[350px]:py-2 gap-4 max-[350px]:gap-2 border-t-2 border-t-gray-400">
                        <img className="w-[5rem] h-[5rem] rounded-sm" src={img1} />
                        <div className="flex flex-row items-start justify-start gap-[6rem] max-[600px]:gap-[3rem] max-[500px]:gap-2 max-[500px]:flex-col">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="font-bold text-[1.2rem] leading-4 max-[350px]:text-[0.95rem]">Jeans with pockets</h1>
                                <div className="flex flex-row gap-4">
                                <p className="text-sm max-[350px]:text-xs">Size: M</p>
                                <p className="text-sm max-[350px]:text-xs">$450.98</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[1rem] max-[350px]:gap-[0.75rem]">
                                <h1 className="font-bold max-[350px]:font-semibold max-[350px]:text-sm">$901.96</h1>
                                                       
                            </div>
                        </div>   
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Save;