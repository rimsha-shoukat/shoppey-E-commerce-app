import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ProductDetail(){
    return(
        <>
            <div className="w-screen h-auto font-serif">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-4 text-xl">
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                    </div>
                 </section>
                 <section className="grid grid-rows items-center justify-center w-[100%] h-auto gap-6">
                    <div className="w h-[10rem] border-2 border-red-900"></div>
                    <div className="w h-[10rem] border-2 border-blue-900"></div>
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;