import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between gap-[1rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </section>
                <section className="flex flex-col items-center justify-center w-[100%] p-10 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Shopping Cart</h1>
                </section>
                <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div classNAme="flex flex-row items-center justify-betw"></div>
                </section>
            </div>
        </>
    )
}

export default Cart;