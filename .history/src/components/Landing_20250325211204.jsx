import React from "react";
import landingBg from "../assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative w-[100vw] h-[100vh]">
                <nav className="flex flex-row items-center justify-evenly w-[100vw] h-auto">
                    <h1>logo</h1>
                    <div>
                        <h1>New</h1>
                        <h1>Men</h1>
                        <h1>Women</h1>
                        <h1>collection</h1>
                        <h1>Trends</h1>
                    </div>
                    <h1></h1>
                </nav>
           </div>
        </>
    )
}

export default Landing;