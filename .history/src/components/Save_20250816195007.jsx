import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Products } from "./AllProducts.jsx";
import { SaveItems } from "./Save.jsx";

import img1 from "../assets/m3.jpeg";

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
          
                <h1 className="text-[2rem] max-[400px]:text-[1rem] font-bold leading-5 mt-4">You may like</h1>
                <section className="columns-5 w-[100%] p-4 max-[400px]:p-2 h-auto max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                    {Products.map((item) => (
                    <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                      <img key={item.id} className="w-full rounded-[1rem] mb-6 max-[400px]:mb-4 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.src} />
                    </Link>
                    ))}
                </section>
                
            </div>
        </>
    )
}

export default Save;