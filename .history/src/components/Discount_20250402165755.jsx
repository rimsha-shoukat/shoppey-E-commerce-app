import React from 'react'

function Discount(){
    return(
        <>
        <div className="w-[100%] h-auto p-[5rem] flex flex-row items-center justify-evenly">
            <div className='w-[25%] h-auto bg-amber-950 py-[2rem] px-[1rem]'>
                <h1>40% OFF</h1>
                <p>Mens Collect</p>
            </div>
            <div className='w-[25%] h-auto bg-amber-950 py-[2rem] px-[1rem]'>
                <h1>40% OFF</h1>
                <p>Mens Collect</p>
            </div>
            <div className='w-[25%] h-auto bg-amber-950 py-[2rem] px-[1rem]'>
                <h1>40% OFF</h1>
                <p>Mens Collect</p>
            </div>
        </div>
        </>
    );
}

export default Discount;