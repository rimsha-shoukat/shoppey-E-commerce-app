import React from 'react';
import background from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-[100vh]" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%] h-auto flex flex-row items-center justify-between text-[#251201]">
                {/* content section */}
                <section className="flex flex-col items-start justify-center gap-2 p-[6rem] w-[50%] h-auto">
                    <h1 className="text-[4rem] font-bold">Deal Of The Day</h1>
                    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                    {/* timer */}
                    <div className="flex flex-row items-start justify-between gap-10 h-auto mt-6">
                        <span className="w-[4.5rem] h-[4.5rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-4">
                            <h1 className="text-[2.3rem] font-bold leading-4">0</h1>
                            <p className="font-semibold leading-0">Hours</p>
                        </span>
                        <span className="w-[4.5rem] h-[4.5rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-4">
                            <h1 className="text-[2.3rem] font-bold leading-4">03</h1>
                            <p className="font-semibold leading-0">Minutes</p>
                        </span>
                        <span className="w-[4.5rem] h-[4.5rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-4">
                            <h1 className="text-[2.3rem] font-bold leading-4">34</h1>
                            <p className="font-semibold leading-0">Seconds</p>
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