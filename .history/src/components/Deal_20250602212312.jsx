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
                <section class="flex flex-col items-center justify-center p-[2rem]">
                    
                </section>
                {/* image section */}
                <section></section>
            </div>
          </section>
        </>
    )
}

export default Deal;