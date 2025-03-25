import React from "react";
import landingBg from "./assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           <img className="w-[100%] h-[100%] absolute" src={landingBg} alt="" /> 
        </>
    )
}

export default Landing;