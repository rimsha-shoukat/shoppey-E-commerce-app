import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { productsStore } from "../Store/productsStore";
import { userStore } from "../Store/userStore";

function ProductDetail() {
    const { id } = useParams();
    const { products, fetchProducts } = productsStore();
    const { user } = userStore();
    const image = products.find(img => img._id == id);
    const [num, setNum] = useState(1);
    const [select, setSelect] = useState("");
    const [userView, setUserView] = useState(false);

    const [cartItems, setCartItems] = useState(user?.cart || []);
    const [saveItems, setSaveItems] = useState(user?.saved || []);

    const [addToCart, setAddToCart] = useState(false);
    const [addToSave, setAddToSave] = useState(false);

    const handleLogout = () => {
        setUserView(false);
    };

    const AddedToCart = (img) => {
        console.log(img);
    };

    const AddedToSave = (img) => {
        console.log(img);
    };

    useEffect(() => {
        if (!products || products.length === 0) {
            fetchProducts();
        }
    }, []);

    if (!image) {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-xl font-bold text-gray-500">Loading product...</h1>
        </div>
    );
}

    return (
        <>
            <div className="w-[100%] h-auto  flex flex-col items-center justify-center gap-[2rem]">
                {/* navbar */}
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/AllProducts">
                        <button className="font-extrabold  text-xl cursor-default hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                        <Link to="/Save">
                            <FaRegHeart className="cursor-default hover:text-gray-500" />
                        </Link>
                        <Link to="/Cart">
                            <FaCartShopping className="cursor-default hover:text-gray-500" />
                        </Link>
                        {
                                    user !== null ? (
                                        <Link to="/User">
                                            <img className="rounded-full max-[710px]:m-2 hover:opacity-70 hover:transition-all duration-700 ease-in-out width-[38px] h-[38px]" src={user.image} alt={user.name} />
                                        </Link>
                                    ) : (
                                        <Link to="/SignIU" className="max-[710px]:w-[100%]">
                                            <button className="font-bold  hover:transition-all duration-700 ease-in-out cursor-default border-2 border-black max-[710px]:w-[100%]  px-[0.5rem] py-[0.2rem] hover:text-[#b48068] hover:bg-black max-[710px]:hover:bg-black max-[710px]:hover:text-[#b48068] max-[710px]:border-none max-[710px]:py-[1rem] text-nowrap">SIGN IN</button>
                                        </Link>
                                    )
                        }
                    </div>
                </section>
                {/* cart */}
                <section className="grid grid-cols-2 max-[600px]:grid-cols-1 select-none items-center justify-center w-auto h-auto border-2 border-gray-300 rounded-md gap-[1rem] bg-[#f7ecd6]">
                    <div className="cols-span-1 h-full flex items-center justify-center">
                        <img className='w-[20rem] h-full rounded-md' src={image?.imageUrl} alt={image?.name} />
                    </div>
                    <div className="cols-span-1 h-auto flex flex-col items-start justify-start p-6">
                        <p className="text-sm">{image?.category}</p>
                        <h1 className="text-[1.3rem] font-bold">{image?.name}</h1>
                        <p className="mt-4 mb-4">${image?.price}</p>
                        <div className="flex flex-row item-center justify-center gap-[1rem] border-y-2 border-white p-2 mb-6 leading-4">
                            <FiMinus onClick={num >= 2 ? () => setNum(num - 1) : null} className="cursor-default hover:text-gray-700" />
                            <h1 className="text-[1.5rem]">{num}</h1>
                            <FaPlus onClick={num < 10 ? () => setNum(num + 1) : null} className="cursor-default hover:text-gray-700" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] mb-6">
                            {image?.sizes?.map((size, index) => (
                            <button key={index} onClick={() => {setSelect(size)}} className={`w-[2.5rem] h-[2.5rem] ${select == size ? 'bg-gray-500 text-white' : ''} hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 rounded-full shadow-[0.5px_0.5px_2px] cursor-default transition-all duration-300 ease`}>{size}</button>
                            ))}
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem]">
                            <button onClick={() => {
                                if (user) {
                                    AddedToCart(image);
                                } else {
                                    console.log("login")
                                }
                            }}
                                className={`px-[2rem] py-[10px] rounded-md text-nowrap shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white transition-all duration-500 ease cursor-default`}>{addToCart ? 'Added to cart' : 'Add to cart'}</button>
                            <button onClick={() => {
                                if (user) {
                                    AddedToSave(image);
                                } else {
                                    console.log("signin")
                                }
                            }}
                                className={`p-[10px] rounded-md shadow-[0.5px_0.5px_2px] hover:shadow-[0.5px_0.5px_3px] hover:shadow-gray-800 hover:bg-gray-500 hover:text-white cursor-default transition-all duration-500 ease font-light text-[1.5rem]`}>{addToSave ? <FaBookmark /> : <FaRegBookmark />}</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductDetail;