import React from "react";
import { Link } from 'react-router-dom';
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";

function Social(){
    return(
        <> 
            <section className="flex flex-col items-center justify-center w-[100%] my-[1rem] h-auto font-serif relative select-none overflow-hidden">
                <div className="flex flex-row items-center justify-center gap-0 flex-wrap">
                    <img className="w-[15.5rem] h-[12rem]" src={s1} alt="youtube" />
                    <img className="w-[15.5rem] h-[12rem]" src={s3} alt="pinterest" />
                    <img className="w-[15.5rem] h-[12rem]" src={s4} alt="facebook" />
                    <img className="w-[15.5rem] h-[12rem]" src={s2} alt="telegram" />
                    <img className="w-[15.5rem] h-[12rem]" src={s5} alt="google" />
                </div>
            <h1 className="absolute px-[1.45rem] py-[0.65rem] bg-[#eee2ca] border text-[1rem] font-semibold border-[#c8967d] bottom-[5.7rem]">Follow us on social media</h1>
                <div className="flex flex-row items-center justify-evenly w-[100%] h-auto mt-[2rem] max-[440px]:text-xs">
                    <Link to="/AllProduc">
                    <h1 className="cursor-pointer font-semibold">NEW</h1>
                    </Link>
                    <Link>
                    <h1 className="cursor-pointer font-semibold">WOMEN</h1>
                    </Link>
                    <Link>
                    <h1 className="cursor-pointer font-semibold">MEN</h1>
                    </Link>
                    <Link>
                    <h1 className="cursor-pointer font-semibold">KIDS</h1>
                    </Link>
                    <Link>
                    <h1 className="cursor-pointer font-semibold">TRENDS</h1>
                    </Link>
                </div>
                <h1 className="mt-[2rem]">copyright@rkCodex</h1>
            </section>
        </>
    )
}

export default Social;