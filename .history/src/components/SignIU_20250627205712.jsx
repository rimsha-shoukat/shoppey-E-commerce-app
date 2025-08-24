import React from "react"
import background from "../assets/landing-bg.jpg";

function SignIU(){
    return(
        <>
        <main className="relative flex flex-row items-center justify-center w-[100%] h-[100%]">
            <section className="relative w-[25rem] h-auto rounded-lg border-0 shadow-lg flex flex-col items-center justify-center gap-2 font-serif p-[4rem]">
                            <img className="absolute w-[100%] h-[100%] rounded-lg" src={background} /> 
                <div>
                <h1 className="font-bold text-[2.3rem]">Welcome Back!</h1>
                <p className="font-semibold text-justify">Enter personal details to your account</p>
                <button className="cursor-pointer text-[1.5rem] px-[1.5rem] py-[0.5rem] font-bold rounded-full bg-white/50">SIGN UP</button>
                </div
            </section>
        </main>
        </>
    )
}

export default SignIU;