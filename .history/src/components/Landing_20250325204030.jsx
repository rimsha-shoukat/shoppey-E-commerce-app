import React from "react";
import landingBg from "../assets/landing-bg.jpeg"

function Landing(){
    return(
        <>
           <img className="w-[100%] h-[100%] absolute" src={landingBg} alt="" /> 
        </>
    )
}

export default Landing;