import React from "react";
import landingBg from "../assets/landing-bg.jpg";

function Landing(){
    return(
        <>
           <div className="relative w-">
            {/* Background Image */}
           <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
           {/* Content */}
           <div className="relative w-[100vw] h-[100vh]">
                <nav className="flex flex-row items-center justify-evenly w-[100vw] h-auto">
                    <h1>logo</h1>
                    <div className="flex flex-row items-center justify-evenly gap-[1rem]">
                        <h1>New</h1>
                        <h1>Men</h1>
                        <h1>Women</h1>
                        <h1>collection</h1>
                        <h1>Trends</h1>
                    </div>
                    <button>login</button>
                </nav>
           </div>
           </div>
        </>
    )
}

export default Landing;