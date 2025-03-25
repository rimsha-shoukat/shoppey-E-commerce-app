import React from "react";
import landingBg from "../assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative w-[100vw] h-[100vh]">
                <nav className="flex flex-row ali w-[100vw] h-auto"></nav>
           </div>
        </>
    )
}

export default Landing;