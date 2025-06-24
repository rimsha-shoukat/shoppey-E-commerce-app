import React from "react"
import img1 from "../assets/seller11.png";
import img2 from "../assets/seller12.png";
import img3 from "../assets/seller13.png";
import img4 from "../assets/seller14.png";
import img5 from "../assets/seller15.png";

function Social(){
    return(
        <> 
            <section className="flex flex-col items-center justify-center w-[100%] h-auto mt-6">
                <div className="flex flex-row items-center justify-center gap-0">
                    <img className="" src={img1} alt="" />
                    <img className="" src={img2} alt="" />
                    <img className="" src={img3} alt="" />
                    <img className="" src={img4} alt="" />
                    <img className="" src={img5} alt="" />
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Social;