import React from 'react';
import landingBg from "../assets/landing-bg.jpg";

function Deal(){
    return (
        <>
          <section class="relative w-[100%] h-auto">
            {/* background */}
            <img className="absolute w-[100vw] h-[100vh]" src={landingBg} alt="landing Image"/> 
            {/* content */}
            
          </section>
        </>
    )
}

export default Deal;