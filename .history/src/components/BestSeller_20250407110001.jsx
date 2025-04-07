import React from "react";
import demo from "../assets/newCollection.png";
import { RiStarSFill } from "react-icons/ri";


function BestSeller(){
    return (
        <>
           <section className="flex flex-row items-center justify-center gap-[2rem] w-[100%] h-auto py-[4rem] bg-[#251201]">
                <article className="container flex flex-col items-start justify-start gap-[1rem] pl-[3rem] w-[40%] text-white">
                    <h1 className="text-7xl font-bold select-none">Best Seller <br/> Product</h1>
                    <p className="select-none text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
                    <button className="hover:bg-white drop-shadow-lg transition-all duration-700 delay-150 ease-in-out hover:text-[#251201] bg-[#8f5e36] px-[0.65rem] py-[0.4rem] hover:font-bold rounded-md cursor-pointer">SEE MORE</button>
                </article>
                <section className="flex flex-col gap-[2rem] w-[60%] overflow-hidden">
                  <section className="flex flex-row items-center justify-center w-[100%] gap-[3rem] pt-[2rem]">
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[13rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[13rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span>*****</span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  <div className="w-auto h-auto bg-white leading-4">
                    <img  className="w-[16rem] h-[13rem]" src={demo} alt="" />
                    <div className="p-[1rem]">
                        <span>*****</span>
                        <h1>Name</h1>
                        <p>Price $50</p>
                    </div>
                  </div>
                  </section> 
                  <section>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                  </section>
                </section>
           </section>
        </>
    )
}

export default BestSeller;