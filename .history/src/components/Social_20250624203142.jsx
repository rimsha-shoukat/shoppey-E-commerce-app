import React from "react"
import img1 from "../assets/seller11.png";
import img2 from "../assets/seller12.png";
import img3 from "../assets/seller13.png";
import img4 from "../assets/seller14.png";
import img5 from "../assets/seller15.png";

function Social(){
    return(
        <> 
            <section className="flex flex-col items-center justify-center w-[100%] h-auto font-serif p-6 relative select-none">
                <div className="flex flex-row items-center justify-center gap-0">
                    <img className="w-[15.5rem] h-[1rem]" src={img1} alt="" />
                    <img className="w-[15.5rem] h-[1rem]" src={img2} alt="" />
                    <img className="w-[15.5rem] h-[1rem]" src={img3} alt="" />
                    <img className="w-[15.5rem] h-[1rem]" src={img4} alt="" />
                    <img className="w-[15.5rem] h-[1rem]" src={img5} alt="" />
                </div>
                <h1 className="absolute px-[1.8rem] py-[0.8rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d]">Follow us on social media</h1>
                <div className="flex flex-row items-center justify-evenly w-[100%] h-auto mt-8">
                    <h1 className="cursor-pointer font-semibold">NEW</h1>
                    <h1 className="cursor-pointer font-semibold">WOMEN</h1>
                    <h1 className="cursor-pointer font-semibold">MEN</h1>
                    <h1 className="cursor-pointer font-semibold">COLLECTION</h1>
                    <h1 className="cursor-pointer font-semibold">TREND</h1>
                </div>
                <h1 className="mt-[3rem]">copyright@rkCodex</h1>
            </section>
        </>
    )
}

export default Social;