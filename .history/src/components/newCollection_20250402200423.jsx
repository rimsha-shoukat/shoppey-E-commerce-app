import React from 'react'

function newCollection(){
    return(
        <>
        <section className='w-[100%] h-auto bg-gray-200 p-[5rem] flex flex-row items-center justify-evenly'>
            <div className='w-[25%] h-auto bg-gray-300 p-[1rem]'>
                <h1 className='text-2xl font-bold'>New Collection</h1>
                <p>Discover new products and updates</p>
                <button className='w-[100%] h-[3rem] bg-green-400 text-white font-bold'>Shop Now</button>
            </div>
        </section>
        </>
    )
}