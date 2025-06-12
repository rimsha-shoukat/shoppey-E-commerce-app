import React from 'react';
import background from "../assets/landing-bg.jpg";
import sideImg from "../assets/seller13.png";

function Deal(){
    return (
        <>
          <section className="relative w-[100%] h-[88vh] overflow-hidden max-[710px]:h-auto">
            {/* background */}
            <img className="absolute w-[100%] h-[100%]" src={background} alt="Image"/> 
            {/* content */}
            <div className="relative w-[100%] h-[100%] flex flex-row max-[710px]:flex-col items-center justify-between text-[#251201]">
                {/* content section */}
                <section className="flex flex-col items-start justify-center gap-4 max-[700px]:gap-2 max-[400px]:gap-[0.35rem] pl-[4rem] max-[800px]:pl-[2rem] max-[700px]:pl-0 w-[50%] max-[710px]:w-[60%] max-[460px]:w-[80%] max-[710px]:pt-6 h-auto select-none font-serif">
                    <h1 className="text-[clamp(2.5rem,5vw,3.rem)] font-bold text-nowrap max-[400px]:text-[1.8rem]">Deal Of The Day</h1>
                    <p className="max-[710px]:text-sm text-justify">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                    {/* timer */}
                    <div className="flex flex-row items-start justify-between gap-10 max-[390px]:gap-4 h-auto mt-6 max-[700px]:mt-2">
                        <span className="w-[4.8rem] h-[4.8rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem] hover:shadow-lg">
                            <h1 className="text-[2.3rem] font-bold leading-6">08</h1>
                            <p className="font-semibold leading-0">Hours</p>
                        </span>
                        <span className="w-[4.8rem] h-[4.8rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem] hover:shadow-lg">
                            <h1 className="text-[2.3rem] font-bold leading-6">03</h1>
                            <p className="font-semibold leading-0">Minutes</p>
                        </span>
                        <span className="w-[4.8rem] h-[4.8rem] bg-[#eee2ca] flex flex-col items-center justify-center gap-[1.5rem] hover:shadow-lg">
                            <h1 className="text-[2.3rem] font-bold leading-6">34</h1>
                            <p className="font-semibold leading-0">Seconds</p>
                        </span>
                    </div>
                    <button className="mt-[2rem] max-[700px]:mt-4 hover:transition-all duration-700 ease-in-out cursor-pointer px-6 max-[900px]:px-4 py-2  bg-[#251201] text-[#eee2ca] font-bold text-[1.2rem] max-[900px]:text-[1rem] hover:bg-[#eee2ca] hover:text-[#251201]">SHOP NOW</button>
                </section>
                {/* image section */}
                <section className="w-[45%] max-[900px]:w-[50%] max-[710px]:w-[60%] max-[460px]:w-[80%] h-[100%] flex items-end justify-end">
                    {/* img */}
                    <img className="w-[100%] h-[100%] px-[4rem] max-[800px]:pl-[2rem] max-[800px]:pr-0 max-[700px]:pl-0 overflow-hidden pt-[6rem] max-[710px]:pt-4" src={sideImg} alt="side Image" />
                </section>
            </div>
          </section>
        </>
    )
}

export default Deal;