import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import img1 from "../assets/seller3.png";
import img2 from "../assets/seller2.png";
import img3 from "../assets/seller3.png";
import img4 from "../assets/seller4.png";
import img5 from "../assets/seller5.png";
import img6 from "../assets/seller6.png";
import img7 from "../assets/seller7.png";
import img8 from "../assets/seller8.png";
import img9 from "../assets/seller9.png";

function Save(){
    return(
        <>
             <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between select-none px-4 max-[400px]:px-2">
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
                    <div className="w-auto flex flex-row items-center justify-start py-6 max-[6000px]:py-2 gap-4 max-[6000px]:gap-2 border-t-2 border-t-gray-400">
                        <img className="w-[8rem] h-[8rem] rounded-sm" src={img1} />
                        <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-center justify-between gap-[3rem] ">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="text-[1.3rem] leading-5 font-bold ">Jeans with pockets</h1>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <p className="text-md font-semibold text-nowrap">Size: M</p>
                                    <p className="text-md font-semibold text-nowrap">$450.34</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-4">
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none bg-blue-700 text-nowrap">Add to cart</button>
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none bg-red-600">Remove</button>
                            </div>
                        </div>  
                    </div>
                </section>
                <h1 className="text-[2rem] font-bold leading-5 mt-4">You may like</h1>
                <section className="columns-5 w-[100%] p-4 h-auto max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img7} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img1} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img2} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img5} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img6} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img8} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img9} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
                    <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
                </section>
                
            </div>
        </>
    )
}

export default Save;