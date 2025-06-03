import React from 'react';
import background from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-[100vh]" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%] h-auto flex flex-row items-center justify-between">
                {/* content section */}
                <section className="flex flex-col items-start justify-center gap-6 p-[6rem] w-[50%] h-auto">
                    <h1 class="text-5xl font">Deal Of The Day</h1>
                    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                    {/* timer */}
                    <div className="flex flex-row items-start justify-between w-[100%] h-auto">
                        <span className="w-auto h-auto px-4 bg-[#eee2ca]">
                            <h1>03</h1>
                            <p>time</p>
                        </span>
                        <span className="w-auto h-auto px-4 bg-[#eee2ca]">
                            <h1>03</h1>
                            <p>time</p>
                        </span>
                        <span className="w-auto h-auto px-4 bg-[#eee2ca]">
                            <h1>03</h1>
                            <p>time</p>
                        </span>
                    </div>
                    <button>shop now</button>
                </section>
                {/* image section */}
                <section class="w-[50%]">
                    {/* img */}
                </section>
            </div>
          </section>
        </>
    )
}

export default Deal;