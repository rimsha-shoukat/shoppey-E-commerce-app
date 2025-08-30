import React from "react";
import { Link } from 'react-router-dom';

function Social(){
    return(
        <> 
            <section className="flex flex-col items-center justify-center w-[100%] my-[1rem] h-auto font-serif relative select-none overflow-hidden">
                <div className="flex flex-row items-center justify-center gap-0 flex-wrap">
                    <img className="w-[15.5rem] h-[12rem]" src="assets/s1.jpg" alt="youtube" />
                    <img className="w-[15.5rem] h-[12rem]" src="assets/s3.jpg" alt="pinterest" />
                    <img className="w-[15.5rem] h-[12rem]" src="assets/s4.jpg" alt="facebook" />
                    <img className="w-[15.5rem] h-[12rem]" src="assets/s2.jpg" alt="telegram" />
                    <img className="w-[15.5rem] h-[12rem]" src="assets/s5.jpg" alt="google" />
                </div>
            <h1 className="absolute px-[1.45rem] py-[0.65rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d] bottom-[5.7rem]">Follow us on social media</h1>
                <div className="flex flex-row items-center justify-evenly w-[100%] h-auto mt-[2rem] max-[440px]:text-xs">
                    <Link to="/AllProducts/new">
                    <h1 className="cursor-pointer font-semibold">NEW</h1>
                    </Link>
                    <Link to="/AllProducts/women">
                    <h1 className="cursor-pointer font-semibold">WOMEN</h1>
                    </Link>
                    <Link to="/AllProducts/men">
                    <h1 className="cursor-pointer font-semibold">MEN</h1>
                    </Link>
                    <Link to="/AllProducts/kids">
                    <h1 className="cursor-pointer font-semibold">KIDS</h1>
                    </Link>
                    <Link to="/AllProducts/trend">
                    <h1 className="cursor-pointer font-semibold">TRENDS</h1>
                    </Link>
                </div>
                <h1 className="mt-[2rem]">copyright@rkCodex</h1>
            </section>
        </>
    )
}

export default Social;