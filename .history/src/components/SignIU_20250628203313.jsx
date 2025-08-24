import React, { useState }  from "react"
import background from "../assets/landing-bg.jpg";
import { Link } from 'react-router-dom';

function SignIU(){
    const[logIn, setLogIn] = useState(true);
    return(
        <>
        <main className="relative flex flex-row-reverse items-center justify-center w-[100%] h-[100vh] select-none font-serif">
            <section className="relative left-[10.5rem] max-[800px]:left-[9rem] max-[800px]:w-[24rem] max-[800px]:h-[30rem] w-[28rem] h-[32rem] rounded-xl border-0 shadow-xl z-2">
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
            <section className="absolute -left-[10.5rem] max-[800px]:-left-[9rem] max-[800px]:w-[20rem] max-[800px]:h-[24rem] w-[24rem] h-[28rem] bg-[#eee2ca] rounded-xl border-0 shadow-xl  z-4">
                <div className={`${logIn? 'block' : 'hidden'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                    <h1 className="text-[2rem] font-bold text-[#251201] mb-[2rem]">Sign In</h1>
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" />
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" />
                    <p className="text-sm text-gray-600 mt-[1rem]">Forget your password!</p>
                    <Link to="/">
                    <button className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50">SIGN IN</button>
                    </Link>
                </div>
                <div className={`${logIn? 'hidden' : 'block'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                    <h1 className="text-[2rem] font-bold text-[#251201] mb-[1rem]">Sign Up</h1>
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Name" type="text" />
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" />
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" />
                    <input className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Confirm password" type="text" />
                    <Link to="/">
                    <button className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[1rem]">SIGN UP</button>
                    </Link>
                </div>
            </section>
        </main>
        </>
    )
}

export default SignIU;