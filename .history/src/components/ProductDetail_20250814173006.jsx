import React , { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Products } from "./AllProducts.jsx"
import { useParams } from 'react-router-dom';

function ProductDetail(){
    const { id } = useParams();
    const image = Products.find(img => img.id === parseInt(id));
    const products = Products.filter(item => item.category === image.category);
    const[num, setNum] = useState(1);
    

    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-center gap-[2rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                    <Link to="/Save">
                        <FaRegHeart className="cursor-pointer hover:text-gray-500" />
                    </Link>
                    <Link to="/Cart">
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                    </Link>
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    </div>
                 </section>
                 <section className="grid grid-cols-2 max-[600px]:grid-cols-1 select-none items-center justify-center max-[600px]:w-[60%] max-[500px]:w-[70%] max-[400px]:w-[90%] w-[60%] max-[1140px]:w-[70%] max-[970px]:w-[80%] max-[800px]:w-[90%] h-auto border-2 border-gray-300 rounded-lg gap-[1rem] bg-[#f7ecd6]">
                    <div className="cols-span-1 h-auto flex items-center justify-center">
                        <img className='w-full h-full rounded-lg' src={image.src} />
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="text-sm">{image.category}</p>
                        <h1 className="text-[1.3rem] font-bold">{image.name}</h1>
                        <p className="mt-4 mb-4">${image.price}</p>
                        <p className="text-sm mb-4">{image.detail}</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-6 leading-4">
                           <FiMinus onClick={num >= 2 ? () => setNum(num - 1) : null} className="cursor-pointer hover:text-gray-700"/>
                            <h1 className="text-[1.5rem]">{num}</h1>
                            <FaPlus onClick={num < 10 ? () => setNum(num + 1) : null} className="cursor-pointer hover:text-gray-700"/>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] mb-6">
                            <button onClick={(e) => selectSize(e)} className={`selected-btn w-[2.5rem] h-[2.5rem] ${select === 'XS' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>XS</button>
                            <button onClick={(e) => selectSize(e)} className={`selected-btn w-[2.5rem] h-[2.5rem] ${select === 'S' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>S</button>
                            <button onClick={(e) => selectSize(e)} className={`selected-btn w-[2.5rem] h-[2.5rem] ${select === 'M' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>M</button>
                            <button onClick={(e) => selectSize(e)} className={`selected-btn w-[2.5rem] h-[2.5rem] ${select === 'L' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>L</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[2rem]">
                        <button className="px-[2rem] py-[10px] rounded-md text-nowrap shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer">Add to cart</button>
                        <button className="p-[10px] rounded-md shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer font-light text-[1.5rem]"><FaRegBookmark /></button>
                        </div>
                    </div>
                 </section>
                 <section className="columns-5 w-[100%] p-4 h-auto mt-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                    {products.map((item) => (
                        <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.src} />
                        </Link>
                    ))}
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;