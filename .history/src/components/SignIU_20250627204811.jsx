import React from "react"
import bc from "../assets/landing-bg.jpg";

function SignIU(){
    return(
        <>
        <main className="relative flex flex-row items-center justify-center">
            <section className="relative w-[25rem] h-auto rounded-md border-0 shadow-lg flex flex-col items-center justify-center gap-2 font-serif p-[4rem]">
                <img className="absolute w-[100%] h-[100%]" src={background} /> 
                <h1>Welcome Back!</h1>
                <p>Enter personal details to your account</p>
                <button>SIGN UP</button>

            </section>
        </main>
        </>
    )
}

export default SignIU;