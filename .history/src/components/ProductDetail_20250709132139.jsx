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
                 <section className="grid grid-cols-2 items-center justify-center w-[60%] h-auto border-2 border-gray-300 rounded-lg">
                    <div className="cols-span-1 h-auto flex items-center justify-center">
                        <img className='w-[28rem] h-[30rem]' src={img1}/>
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="">New collection</p>
                        <h1>Textured T-shirt</h1>
                        <p>price</p>
                        <p>lorem lorem lorem lorem lorem lorem loren lorem lorem lorem lorem lorem lorem loren lorem lorem lorem lorem lorem lorem loren</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem]">
                            <button>-</button>
                            <h1>0</h1>
                            <button></button>
                        </div>
                    </div>
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;