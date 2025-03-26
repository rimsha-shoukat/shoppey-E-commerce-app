import React from "react";
import landingBg from "../assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           <div className="relative w-full h-screen">
            {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative py-[2rem] w-[100vw] h-[100vh]">
                <nav className="flex flex-row items-center justify-between px-[3rem] w-[100vw] h-[2rem]">
                         <button className="font-extrabold font-serif text-lg">shoppey</button>
                    <div className="flex font-bold font-serif flex-row items-center justify-evenly gap-[2rem]">
                        <button className="cursor-pointer hover:border-b-2 border-b-black">New</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Men</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Women</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Collection</button>
                        <button className="cursor-pointer hover:border-b-2 border-b-black">Trends</button>
                    </div>
                    <button className="font-bold font-serif cursor-pointer border-2 border-black px-[0.5rem] py-[0.2rem] hover:text-[#ca9379] hover:bg-black hover:transition-transform hover:transition-700 ease-in-">LOGIN</button>
                </nav>
           </div>
           </div>
        </>
    )
}

export default Landing;