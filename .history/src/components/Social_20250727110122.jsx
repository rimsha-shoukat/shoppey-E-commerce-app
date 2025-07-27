import React from "react";

import 1 from "../assets/s1.jpg";
import 2 from "../assets/s2.jpg";
import 3 from "../assets/s3.jpg";
import 4 from "../assets/s4.jpg";
import 5 from "../assets/s5.jpg";

function Social(){
    return(
        <> 
            <section className="flex flex-col items-center justify-center w-[100%] my-[1rem] h-auto font-serif relative select-none overflow-hidden">
                <div className="flex flex-row items-center justify-center gap-0 flex-wrap">
                    <img className="w-[15.5rem] h-[12rem]" src={img1} alt="youtube" />
                    <img className="w-[15.5rem] h-[12rem]" src={img3} alt="pinterest" />
                    <img className="w-[15.5rem] h-[12rem]" src={img4} alt="facebook" />
                    <img className="w-[15.5rem] h-[12rem]" src={img2} alt="telegram" />
                    <img className="w-[15.5rem] h-[12rem]" src={img5} alt="google" />
                </div>
            <h1 className="absolute px-[1.45rem] py-[0.65rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d] bottom-[5.7rem]">Follow us on social media</h1>
                <div className="flex flex-row items-center justify-evenly w-[100%] h-auto mt-[2rem] max-[440px]:text-xs">

                    <h1 className="cursor-pointer font-semibold">NEW</h1>
                    <h1 className="cursor-pointer font-semibold">WOMEN</h1>
                    <h1 className="cursor-pointer font-semibold">MEN</h1>
                    <h1 className="cursor-pointer font-semibold">KIDS</h1>
                    <h1 className="cursor-pointer font-semibold">TRENDS</h1>
                </div>
                <h1 className="mt-[2rem]">copyright@rkCodex</h1>
            </section>
        </>
    )
}

export default Social;