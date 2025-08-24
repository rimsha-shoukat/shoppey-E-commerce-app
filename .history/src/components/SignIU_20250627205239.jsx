import React from "react"
import background from "../assets/landing-bg.jpg";

function SignIU(){
    return(
        <>
        <main className="relative flex flex-row items-center justify-center">
            <img className="absolute w-[100%] h-[100%]" src={background} /> 
            <section className="relative w-[25rem] h-auto rounded-lg border-0 shadow-lg flex flex-col items-center justify-center gap-2 font-serif p-[4rem]">
                <h1 className="font-bold text-[2rem]">Welcome Back!</h1>
                <p className="font-semibold">Enter personal details to your account</p>
                <button className="text-[1.2rem] px-[1rem] py-[0.5rem]">SIGN UP</button>

            </section>
        </main>
        </>
    )
}

export default SignIU;