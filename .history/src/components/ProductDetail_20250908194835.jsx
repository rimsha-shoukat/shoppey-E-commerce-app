import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const CartItems = [];
const SaveItems = [];

function ProductDetail({ Products }) {
    const { id } = useParams();
    const image = Products.find(img => img.id === parseInt(id));
    const [num, setNum] = useState(1);
    const [select, setSelect] = useState('M');
    const [userView, setUserView] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('account')) || false);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')) || null);

    const handleLogout = () => {
        localStorage.setItem('account', JSON.stringify(false));
        localStorage.setItem('currentUser', JSON.stringify(null));
        setIsLoggedIn(false);
        setUser(null);
        setUserView(false);
    };

    const selectSize = (e) => {
        setSelect(e.target.innerText);
    }

    const [addToCart, setAddToCart] = useState(CartItems.some(img => img.id === image.id));
    const [addToSave, setAddToSave] = useState(SaveItems.some(img => img.id === image.id));

    useEffect(() => {
        setNum(1);
        setSelect('M');
        setAddToCart(CartItems.some(img => img.id === image.id));
        setAddToSave(SaveItems.some(img => img.id === image.id));
    }, [id]);

    useEffect(() => {
        user.cartItems = CartItems;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }, [addToCart]);

    useEffect(() => {
        user.saveItems = SaveItems;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }, [addToSave]);


    const AddedToCart = (img) => {
        if (!addToCart) {
            setAddToCart(true);
            CartItems.push({
                id: img.id,
                title: img.title,
                price: img.price,
                thumbnail: img.thumbnail,
                discountPercentage: img.discountPercentage,
                size: select,
                quantity: num
            });
            alert('Added to cart');
        } else {
            alert('Already added to cart');
        }
    }

    const AddedToSave = (img) => {
        if (!addToSave) {
            setAddToSave(true);
            SaveItems.push({
                id: img.id,
                title: img.title,
                price: img.price,
                thumbnail: img.thumbnail,
                discountPercentage: img.discountPercentage,
                size: select,
                quantity: num
            });
            alert('Added to save');
        } else {
            alert('Already added to save');
        }
    }

    return (
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
                        {
                            isLoggedIn ? (
                                <h1 onClick={() => setUserView(!userView)} className="cursor-pointer hover:text-gray-500">{user.name}</h1>
                            ) : (
                                <Link to="/SignIU">
                                    <FaRegUser className="cursor-pointer hover:text-gray-500" />
                                </Link>
                            )
                        }
                        {
                            isLoggedIn ? (
                                userView && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                                    <h1 className="text-[1.5rem] text-[#b48068] leading-5">Hello, {user?.name}!</h1>
                                    <h1 className="text-[1.2rem]">{user?.email}</h1>
                                    <button onClick={handleLogout} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Logout</button>
                                </div>
                            ) : (null)
                        }
                    </div>
                </section>
                <section className="grid grid-cols-2 max-[600px]:grid-cols-1 select-none items-center justify-center max-[600px]:w-[60%] max-[500px]:w-[70%] max-[400px]:w-[90%] w-[60%] max-[1140px]:w-[70%] max-[970px]:w-[80%] max-[800px]:w-[90%] h-auto border-2 border-gray-300 rounded-lg gap-[1rem] bg-[#f7ecd6]">
                    <div className="cols-span-1 h-auto flex items-center justify-center">
                        <img loading="lazy" className='w-[20rem] h-[20rem] rounded-lg' src={image.thumbnail} alt="itemDetail" />
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="text-sm">{image.category}</p>
                        <h1 className="text-[1.3rem] font-bold">{image.title}</h1>
                        <p className="mt-4 mb-4">${image.price}</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-6 leading-4">
                            <FiMinus onClick={num >= 2 ? () => setNum(num - 1) : null} className="cursor-pointer hover:text-gray-700" />
                            <h1 className="text-[1.5rem]">{num}</h1>
                            <FaPlus onClick={num < 10 ? () => setNum(num + 1) : null} className="cursor-pointer hover:text-gray-700" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] mb-6">
                            <button onClick={(e) => selectSize(e)} className={`w-[2.5rem] h-[2.5rem] ${select === 'XS' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>XS</button>
                            <button onClick={(e) => selectSize(e)} className={`w-[2.5rem] h-[2.5rem] ${select === 'S' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>S</button>
                            <button onClick={(e) => selectSize(e)} className={`w-[2.5rem] h-[2.5rem] ${select === 'M' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>M</button>
                            <button onClick={(e) => selectSize(e)} className={`w-[2.5rem] h-[2.5rem] ${select === 'L' ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-pointer`}>L</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem]">
                            <button onClick={isLoggedIn ? AddedToCart(image) : setAlert("logIn to add Items")} className={`px-[2rem] py-[10px] rounded-md text-nowrap shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer`}>{addToCart ? 'Added to cart' : 'Add to cart'}</button>
                            <button onClick={isLoggedIn ? AddedToSave(image) : setAlert("logIn to add Items")} className={`p-[10px] rounded-md shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-pointer font-light text-[1.5rem]`}>{addToSave ? <FaBookmark /> : <FaRegBookmark />}</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductDetail;