import React from 'react';

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-4 text-xl">
                        <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    <Link to="/Cart">
                        <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                    </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart;