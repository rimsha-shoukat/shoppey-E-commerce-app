import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                </section>
                <section>hello</section>
            </div>
        </>
    )
}

export default Cart;