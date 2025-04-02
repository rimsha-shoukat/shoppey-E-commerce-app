import React from 'react'

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <div className='w-[25%] h-auto bg-gray-300 py-[2rem] px-[1rem] '>
                <h1 className="w-[100%] text-center">40% OFF</h1>
                <p>Mens Collection</p>
                <button>Go To Collection</button>
            </div>
            <div className='w-[25%] h-auto bg-amber-950 py-[2rem] px-[1rem] '>
                <h1 className="w-[100%] text-center">40% OFF</h1>
                <p>Mens Collection</p>
                <button>Go To Collection</button>
            </div>
            <div className='w-[25%] h-auto bg-amber-950 py-[2rem] px-[1rem] '>
                <h1 className="w-[100%] text-center">40% OFF</h1>
                <p>Mens Collection</p>
                <button>Go To Collection</button>
            </div>
        </div>
        </>
    );
}

export default Discount;