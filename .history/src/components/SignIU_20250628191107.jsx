import React, { useState }  from "react"
import background from "../assets/landing-bg.jpg";

const SignIN = () => {
    return(
        <>
        </>
    )
}

const SignUP = () => {
    return(
        <>
        </>
    )
}

function SignIU(){
    const[logIn, setLogIn] = useState(true);
    return(
        <>
        <main className="relative flex flex-row-reverse items-center justify-center w-[100%] h-[100vh] select-none font-serif">
            <section className="relative left-[10.5rem] w-[28rem] h-[32rem] rounded-xl border-0 shadow-xl z-2">
                <img className="absolute w-[100%] h-[100%] rounded-xl shadow-lg" src={background} /> 
                <div className={`${logIn ? 'block' : 'hidden'} relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-2`}>
                <h1 className="font-bold text-[2.3rem]">Welcome Back!</h1>
                <p className="font-semibold text-center font-sans">Enter personal details <br/> to sign In your account</p>
                <button onClick={() => setLogIn(!logIn)} className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN UP</button>
                </div>
                <div className={`${logIn ? 'hidden' : 'block'} relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-2`}>
                <h1 className="font-bold text-[2.3rem]">Welcome!</h1>
                <p className="font-semibold text-center font-sans">Enter personal details <br/> to create your account</p>
                <button onClick={() => setLogIn(!logIn)} className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN IN</button>
                </div>
            </section>
            <section className="absolute -left-[10.5rem] w-[24rem] h-[28rem] bg-[#eee2ca] rounded-xl border-0 shadow-xl  z-4">
                <div className={`${logIn? 'block' : 'hidden'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                    <h1 className="text-[1.5rem] font-bold text-[#251201]">Sign In</h1>
                    <input className placeholder="Email" type="text" />
                    <input className placeholder="Password" type="text" />
                    <p>Forget your password!</p>
                    <button className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50">SIGN IN</button>
                </div>
            </section>
        </main>
        </>
    )
}

export default SignIU;