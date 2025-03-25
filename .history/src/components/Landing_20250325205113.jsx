import React from "react";
import landingBg from "../assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           {/* Background Image */}
           <img className="w-[100vw] h-[100vh] relative" src={landingBg} alt="" /> 
           {/* Content */}
           <div className="absolute w-[100vw] h-[100vh] grid grid-col">

           </div>
        </>
    )
}

export default Landing;