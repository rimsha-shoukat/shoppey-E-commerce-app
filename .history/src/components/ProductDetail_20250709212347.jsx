import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img1 from "../assets/seller1.png";


function ProductDetail(){
    return(
        <>
            <div className="w-screen h-auto font-serif flex flex-col items-center justify-center gap-[2rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto shadow-sm bg-gray-100">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-4 text-xl">
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                    </div>
                 </section>
                 <section className="grid grid-cols-2 items-center justify-center w-[60%] h-auto border-2 border-gray-300 rounded-lg gap-[1rem] bg-[#eee2ca]">
                    <div className="cols-span-1 h-auto flex items-center justify-center">
                        <img className='w-[28rem] h-[30rem]' src={img1}/>
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="text-sm">New collection</p>
                        <h1 className="text-[1.3rem] font-bold">Textured T-shirt</h1>
                        <p className="mt-4 mb-4">$450.98</p>
                        <p className="text-sm mb-4">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-4">
                            <button className="cursor-pointer">-</button>
                            <h1 className="">0</h1>
                            <button className="cursor-pointer">+</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] mb-4">
                            <button className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md cursor-pointer">XS</button>
                            <button className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md cursor-pointer">S</button>
                            <button className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md cursor-pointer">M</button>
                            <button className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md cursor-pointer">L</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem]">
                        <button className="h-[2rem] w-[8rem] rounded-md shadow-md cursor-pointer">Add to cart</button>
                        <button className="h-[2rem] w-[2rem] rounded-md shadow-md cursor-pointer">Save</button>
                        </div>
                    </div>
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;