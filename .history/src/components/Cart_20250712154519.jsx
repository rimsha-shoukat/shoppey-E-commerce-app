import React from 'react';

function Cart(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-center gap-[2rem]">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                    <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    <div className="flex flex-row items-center justify-center gap-4 text-xl">
                        <span className="cursor-pointer hover:text-gray-500">User</span>
                        <span className="cursor-pointer hover:text-gray-500">Cart</span>
                    </div>
                </section>
                <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            </div>
        </>
    )
}

export default Cart;