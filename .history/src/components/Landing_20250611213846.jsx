import React, { useState } from "react";
import landingBg from "../assets/landing-bg.jpg";
import sideImg from "../assets/landing-side-img.jpg";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { TbLayoutNavbarExpand } from "react-icons/tb";

function Landing(){

    const[navView, setNavView] = useState(false);

    return(
        <>
           <div className="relative w-[100%] h-screen">
            {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative flex flex-col gap-[2rem] pt-[1rem] max-[710px]:pt-[0rem] w-[100vw] h-[100vh]">
                <nav className="flex flex-row items-center justify-between pt-[1rem] px-[3rem] w-[100vw] h-[6%]">
                        <button className="font-extrabold font-serif text-lg">shoppey</button>
                        <div className="static max-[710px]:w-auto w-[80%]">
                        <TbLayoutNavbarExpand onClick={ () => navView ? setNavView(false) : setNavView(true)} className="hidden cursor-pointer text-2xl max-[710px]:block"/>
                        <div className={`flex max-[710px]:flex-col max-[710px]:w-[85%] max-[710px]:h-auto max-[710px]:right-[3rem] max-[710px]:absolute max-[710px]:bg-[#b48068] font-bold font-serif flex-row items-center justify-evenly max-[710px]:gap-[0rem] gap-[2rem]`}>
                          
                          
                        
                            <button className="cursor-pointer hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">New</button>
                            <button className="cursor-pointer hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">Men</button>
                            <button className="cursor-pointer hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">Women</button>
                            <button className="cursor-pointer hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">Collection</button>
                            <button className="cursor-pointer hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">Trends</button>
                            <button className="font-bold font-serif hover:transition-all duration-700 ease-in-out cursor-pointer border-2 border-black max-[710px]:w-[100%]  px-[0.5rem] py-[0.2rem] hover:text-[#b48068] hover:bg-black max-[710px]:hover:bg-black max-[710px]:hover:text-[#b48068] max-[710px]:border-none max-[710px]:py-[1rem]">LOGIN</button>
                        </div>
                    </div>
                </nav>
        
                <main className="flex flex-row max-[710px]:flex-col max-[710px]:gap-[1rem] overflow-hidden items-center justify-between w-[100%] h-[94%]">
                    <section className="w-[50%] h-[100%] max-[710px]:h-auto flex items-center justify-center">
                        <div className="w-auto h-auto flex flex-col items-start justify-start max-[710px]:gap-[1rem] gap-[2rem]">
                        <h1 className="text-[clamp(2.2rem,3.5vw,5rem)] font-semibold font-serif text-nowrap max-[360px]:text-[1.8rem] select-none">Picked Every Item <br/> With Care, You <br/> Must Try</h1>
                        <button className="group hover:transition-all duration-700 ease-in-out text-[1.3rem] text-nowrap font-bold font-serif cursor-pointer border-2 border-black px-[0.5rem] text-[#b48068] hover:bg-transparent hover:text-black bg-black">see collection<RiArrowRightDoubleFill className="inline text-[1.6rem] group-hover:translate-x-2 transition-all duration-700 ease-in-out"/></button>
                        </div>
                    </section>
                    <img className="w-[50%] h-[100%] max-[710px]:w-[70%] max-[560px]:w-[90%] max-[360px]:w-[100%] px-[2rem] rounded-bl-[10rem] overflow-hidden" src={sideImg} alt="side-img" />
                </main>
           </div>
           </div>
        </>
    )
}

export default Landing;