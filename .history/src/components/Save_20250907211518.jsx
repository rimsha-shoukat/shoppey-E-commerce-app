import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Saves = () => {
     userData = JSON.parse(localStorage.getItem('currentUser'));
    const [saveItemsList, setSaveItemsList] = useState(JSON.parse(localStorage.getItem('SaveItems')) || []);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('CartItems')) || []);

    useEffect(() => {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            currentUser.saves = saveItemsList;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }, [saveItemsList]);

    useEffect(() => {
        localStorage.setItem('CartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (id) => {
        const item = saveItemsList.find(product => product.id === id);
        if (item) {
            if (!cartItems.some(cartItem => cartItem.id === id)) {
                setCartItems([...cartItems, item]);
                alert('Added to cart');
            } else {
                alert('Already in cart');
            }
        }
    };

    const removeFromSave = (id) => {
        const itemIndex = saveItemsList.findIndex(product => product.id === id);
        if (itemIndex !== -1) {
            const item = saveItemsList[itemIndex];
            const updatedItems = [...saveItemsList];
            updatedItems.splice(itemIndex, 1);
            setSaveItemsList(updatedItems);
            alert(`Removed ${item.title} from saved items`);
        }
    }

    if (saveItemsList.length === 0) {
        return (
            <div className="w-[100%] h-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Nothing In Saved Items</h1>
            </div>
        );
    }
    return (
        <section className="w-[100%] h-auto flex flex-col items-center justify-center">
            {saveItemsList.map((item) => (
                <div key={item.id} className="w-auto flex flex-row items-center justify-start py-6 max-[600px]:py-2 gap-4 max-[600px]:gap-2 border-t-2 border-t-gray-400">
                    <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                        <img loading="lazy" key={item.id} className="w-[8rem] h-[8rem] max-[400px]:w-[6rem] max-[400px]:h-[6rem] rounded-sm" src={item.thumbnail} alt="saveItems" />
                    </Link>
                    <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-start justify-between gap-[3rem] ">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <h1 className="text-[1.3rem] leading-7 max-[750px]:text-[1rem] max-[750px]:leading-5 w-[20rem] max-[750px]:w-[14rem] max-[650px]:w-[10rem] max-[600px]:w-[18rem] max-[440px]:w-[15rem] max-[400px]:w-[12rem] max-[320px]:w-[10rem] overflow-hidden font-bold max-[400px]:text-[0.85rem] max-[400px]:font-semibold">{item.title}</h1>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p className="text-md text-nowrap max-[400px]:text-sm">Size: {item.size}</p>
                                <p className="text-md text-nowrap max-[400px]:text-sm">${item.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-4">
                            <button onClick={() => addToCart(item.id)} className="px-[1rem] py-[0.5rem] hover:font-bold max-[600px]:px-0 max-[600px]:py-0 max-[600px]:text-blue-700 max-[600px]:bg-transparent rounded-md cursor-pointer border-none max-[400px]:text-sm bg-blue-700 hover:bg-transparent hover:text-blue-900 text-nowrap">Add to cart</button>
                            <button onClick={() => removeFromSave(item.id)} className="px-[1rem] py-[0.5rem] hover:font-bold max-[600px]:px-0 max-[600px]:py-0 max-[600px]:text-red-600 max-[600px]:bg-transparent rounded-md cursor-pointer border-none max-[400px]:text-sm bg-red-600 hover:bg-transparent hover:text-red-800">Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

function Save() {
    const [userView, setUserView] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('account')) || false);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser ')) || null);

    const handleLogout = () => {
        localStorage.setItem('account', JSON.stringify(false));
        localStorage.setItem('currentUser', JSON.stringify(null));
        setIsLoggedIn(false);
        setUser(null);
        setUserView(false);
    };
    return (
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
                        {
                            isLoggedIn ? (
                                <h1 onClick={() => setUserView(!userView)} className="cursor-pointer hover:text-gray-500" >{user.name}</h1>
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
                {localStorage.getItem('account') ? (
                    <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                        <h1 className="font-bold text-2xl">Saved Items</h1>
                    </section>
                ) : (
                    <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                        <h1 className="font-bold text-2xl">Please log in to see your saved items</h1>
                    </section>
                )}
                {localStorage.getItem('account') && <Saves />}
            </div>
        </>
    )

}

export default Save;