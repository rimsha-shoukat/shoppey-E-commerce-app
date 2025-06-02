import React from 'react';
import background from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-auto" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%] h-auto flex flex-row items-center justify-between">
                {/* content section */}
                <section className="flex flex-col items-center justify-center p-[2rem] w-[100%] h-auto">
                    <h1>Deal Of The Day</h1>
                    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                    {/* timer */}
                    <div className="flex flex-row w-[100%] h-a"></div>
                </section>
                {/* image section */}
                <section></section>
            </div>
          </section>
        </>
    )
}

export default Deal;