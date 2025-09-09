import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Carts = ({ cartItemsList, setCartItemsList, user, setUser }) => {
    const [alert, setAlert] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const updatedUser  = { ...user, cartItems: cartItemsList };
        localStorage.setItem('currentUser ', JSON.stringify(updatedUser ));
        if (setUser ) setUser (updatedUser );
    }, [cartItemsList]);

    const remove = (id) => {
        const itemIndex = cartItemsList.findIndex(product => product.id === id);
        if (itemIndex !== -1) {
            const item = cartItemsList[itemIndex];
            const updatedItems = [...cartItemsList];
            updatedItems.splice(itemIndex, 1);
            setCartItemsList(updatedItems);
            setAlert(`Removed ${item.name} from cart`);
            setShowAlert(true);
        }
    }

    if (cartItemsList.length === 0) {
        return (
            <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Nothing In Cart</h1>
            </section>
        )
    }

    function setItemQuantity(id, quantity) {
        const itemIndex = cartItemsList.findIndex(product => product.id === id);
        if (itemIndex !== -1) {
            const updatedItems = [...cartItemsList];
            updatedItems[itemIndex].quantity = quantity;
            setCartItemsList(updatedItems);
        }
    }

    return (
        <section className="w-[100%] h-auto flex flex-col items-center justify-center">
            {cartItemsList.map((item) => (
                <div key={item.id} className="w-[100%] flex flex-row items-center justify-center py-6 max-[350px]:py-2 gap-4 border-t-2 border-t-gray-400">
                    <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                        <img loading="lazy" className="w-[6rem] h-[6rem] rounded-sm" src={item.thumbnail} alt="cartItem" />
                    </Link>
                    <div className="flex flex-row items-start justify-between gap-2 max-[350px]:gap-0 max-[500px]:flex-col">
                        <div className="flex flex-col items-start justify-start gap-6 max-[750px]:gap-2 max-[500px]:gap-0">
                            <h1 className="font-bold text-[1.2rem] leading-5 max-[350px]:text-[0.95rem] w-[20rem] max-[760px]:w-[15rem] max-[600px]:w-[10rem] max-[500px]:w-[15rem] max-[370px]:w-[11rem] max-[760px]:text-[1rem]">{item.title}</h1>
                            <div className="flex flex-row gap-4">
                                <p className="text-sm max-[350px]:text-xs">Size: {item.size}</p>
                                <p className="text-sm max-[350px]:text-xs">${item.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[1rem] max-[350px]:gap-[0.75rem]">
                            <h1 className="font-bold max-[350px]:font-semibold max-[350px]:text-sm">${(item.quantity * item.price).toFixed(2)}</h1>
                            <div className="flex flex-row item-center justify-center gap-[1rem] max-[500px]:gap-[0.5rem] border-y-2 border-white p-2 max-[350px]:p-0 max-[350px]:border-none leading-4">
                                <FiMinus onClick={item.quantity >= 2 ? () => setItemQuantity(item.id, item.quantity - 1) : null} className="cursor-pointer hover:text-gray-700 max-[350px]:text-sm" />
                                <h1 className="text-[1.2rem] max-[350px]:text-md">{item.quantity}</h1>
                                <FaPlus onClick={item.quantity < 10 ? () => setItemQuantity(item.id, item.quantity + 1) : null} className="cursor-pointer hover:text-gray-700 max-[350px]:text-sm" />
                            </div>
                            <RxCross2 onClick={() => remove(item.id)} className="cursor-pointer hover:text-red-800" />
                        </div>
                    </div>
                </div>
            ))}
            {
                showAlert && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                    <h1 className="text-[1.5rem] text-[#b48068] leading-5">Alert</h1>
                    <h1 className="text-[1.2rem]">{alert}</h1>
                    <button onClick={() => setShowAlert(false)} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Close</button>
                </div>
            }
        </section>
    )
}

function Cart({user, setUser}) {
    const [userView, setUserView] = useState(false);
    const [cartItemsList, setCartItemsList] = useState(user?.cartItems || []);
    const [discount, setDiscount] = useState(cartItemsList.length * 7);
    const [delivery, setDelivery] = useState(cartItemsList.length * 4);
    console.log(user);

    const handleLogout = () => {
        localStorage.setItem('currentUser', JSON.stringify(null));
        setUser(null);
        setUserView(false);
    };

    useEffect(() => {
        let total = 0;
        if (cartItemsList.length === 0) {
            setDiscount(0);
            setDelivery(0);
            setBill(0);
        } else {
            for (let i = 0; i < cartItemsList.length; i++) {
                cartItemsList.forEach((item) => {
                    total = total + (item.price * item.quantity);
                },)
            }
            setDiscount(cartItemsList.length * 3);
            setDelivery(cartItemsList.length * 4);
            setBill((total + delivery) - discount);
        }

    }, [cartItemsList]);

    const [bill, setBill] = useState((total + delivery) - discount);

    return (
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between select-none px-4 max-[350px]:px-2">
                <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
                    <Link to="/">
                        <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                        <Link to="/Save">
                            <FaRegHeart className="cursor-pointer hover:text-gray-500" />
                        </Link>
                        {
                            user ? (
                                <h1 onClick={() => setUserView(!userView)} className="cursor-pointer hover:text-gray-500">{user.name}</h1>
                            ) : (
                                <Link to="/SignIU">
                                    <FaRegUser className="cursor-pointer hover:text-gray-500" />
                                </Link>
                            )
                        }
                        {
                            user ? (
                                userView && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4">
                                    <h1 className="text-[1.5rem] text-[#b48068] leading-5">Hello, {user?.name}!</h1>
                                    <h1 className="text-[1.2rem]">{user?.email}</h1>
                                    <button onClick={handleLogout} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Logout</button>
                                </div>
                            ) : (null)
                        }
                    </div>
                </section>
                <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Shopping Cart</h1>
                </section>
                {
                    user ? (
                        <section className="w-[100%] h-auto flex flex-col items-center justify-center">

                            <Carts cartItemsList={cartItemsList} setCartItemsList={setCartItemsList} user={user} setUser={setUser} />

                            <div className="w-[100%] flex flex-row max-[500px]:flex-col items-start max-[500px]:items-center gap-2 max-[500px]:gap-4 justify-between py-6 border-t-2 border-t-gray-400">
                                <div className="w-[100%] flex flex-col items-start justify-start gap-2">
                                    <h1 className="font-semibold">Do you have a discount?</h1>
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <input type="text" placeholder="Coupon code" className="w-[10rem] h-[2.5rem] px-4 rounded-sm border-gray-300 bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                                        <FaArrowRight className="w-[2rem] h-[2rem] text-white cursor-pointer p-2 bg-black rounded-full" />
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-col gap-2 items-start justify-start">
                                    <h1>Delivery charges: <span className="font-bold">${delivery.toFixed(2)}</span></h1>
                                    <h1>Discount: <span className="font-bold">${discount.toFixed(2)}</span></h1>
                                    <h1 className="text-[2rem] max-[350px]:text-[1rem]">Total: <span className="font-bold">${bill.toFixed(2)}</span></h1>
                                    <button className="w-[100%] bg-black text-white rounded-sm cursor-pointer py-2">Proceed to checkout</button>
                                </div>
                            </div>

                        </section>
                    ) : (
                        <div className="w-[100%] h-auto flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold">Please Sign In to view your cart</h1>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Cart;