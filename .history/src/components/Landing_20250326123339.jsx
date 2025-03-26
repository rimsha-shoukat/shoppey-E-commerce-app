import React from "react";
import landingBg from "../assets/landing-bg.jpg";
import { TbArrowBadgeRight } from "react-icons/tb";


function Landing(){
    return(
        <>
           <div className="relative w-full h-screen">
            {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative flex flex-col gap-[3rem] py-[2rem] w-[100vw] h-[100vh]">
                <nav className="flex flex-row items-center justify-between px-[3rem] w-[100vw] h-[2rem]">
                         <button className="font-extrabold font-serif text-lg">shoppey</button>
                    <div className="flex font-bold font-serif flex-row items-center justify-evenly gap-[2rem]">
                        <button className="cursor-pointer hover:border-b-2 border-b-black">New</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Men</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Women</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Collection</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Trends</button>
                    </div>
                    <button className="font-bold font-serif cursor-pointer border-2 border-black px-[0.5rem] py-[0.2rem] hover:text-[#b48068] hover:bg-black">LOGIN</button>
                </nav>
                <main className="flex flex-row items-center justify-center gap-[5rem] w-[100%] h-[100%]">
                    <section className="w-[50%] h-[100%] flex items-center justify-center">
                        <div className="w-auto h-auto flex flex-col items-start justify-start gap-[1rem]">
                        <h1 className="text-[3.5rem] font-semibold font-serif text-nowrap">Picked Every Item <br/> With Care, You <br/> Must Try</h1>
                        <button className="text-[1.2rem] text-nowrap font-bold font-serif cursor-pointer border-2 border-black px-[0.7rem] hover:text-[#b48068] hover:bg-black">see collection<TbArrowBadgeRight className="i"/></button>
                        </div>
                    </section>
                    <img className="w-[50%] h-[100%] border-2 border-amber-700" src="" alt="side-img" />
                </main>
           </div>
           </div>
        </>
    )
}

export default Landing;