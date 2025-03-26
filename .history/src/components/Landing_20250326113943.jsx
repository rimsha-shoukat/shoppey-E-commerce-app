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
                <nav className="flex flex-row items-center justify-between px-[3rem] w-[100vw] h-auto">
                         <button className="font-extrabold font-serif">shoppey</button>
                    <div className="flex font-bold font-serif flex-row items-center justify-evenly gap-[2rem]">
                        <button className="curso">New</button>
                        <button className="curso">Men</button>
                        <button className="curso">Women</button>
                        <button className="curso">collection</button>
                        <button className="curso">Trends</button>
                    </div>
                    <button className="font-bold font-serif">login</button>
                </nav>
           </div>
           </div>
        </>
    )
}

export default Landing;