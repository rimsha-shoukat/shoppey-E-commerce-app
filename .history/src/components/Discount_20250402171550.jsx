import React from 'react'

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <section className='w-[25%] h-auto bg-gray-300 p-[1rem] '>
                <div>
                <h1 className="font-bold text-2xl">40% OFF</h1>
                <p>MEN COLLECTION</p>
                <button>Go To Collection</button>
                </div>
                
            </section>
            <section className='w-[25%] h-auto bg-pink-500 p-[1rem] '>
                <div>
                <h1 className="font-bold text-2xl">60% OFF</h1>
                <p>WOMEN COLLECTION</p>
                <button>Go To Collection</button>
                </div>
            </section>
            <section className='w-[25%] h-auto bg-yellow-300 p-[1rem] '>
                <div>
                <h1 className="font-bold text-2xl">30% OFF</h1>
                <p>NEW COLLECTION</p>
                <button>Go To Collection</button>
                </div>
            </section>
        </div>
        </>
    );
}

export default Discount;