import React, { useState }  from "react"
import { Link } from 'react-router-dom';

function SignIU(){
    const[logIn, setLogIn] = useState(true);
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    let users = [];

    const handleSignIn = (event) => {
        event.preventDefault();
        if(users.find(user => user.email === email && user.password === password)){
            alert('login successful');
        }else{
            alert('invalid email or password');
        }
        co
        setEmail('');
        setPassword('');
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        if(users.find(user => user.email === email)){
            alert('user already exist');
        }else {
            if(password === confirmPassword){
            users.push({
            name, name,
            email: email,
            password: password
            });
            alert('user added');
            console.log(users);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            }else{
                alert('password and confirm password does not matched');
            }
        }
    }


    return(
        <>
        <main className="relative flex flex-row-reverse max-[800px]:flex-col items-center justify-center w-[100%] h-[100vh] max-[800px]:h-auto select-none font-serif">
            <section className="relative left-[10.5rem] max-[800px]:left-0 max-[800px]:-bottom-[22rem] max-[440px]:w-[100vw] w-[26rem] h-[30rem] rounded-xl border-0 shadow-xl z-2">
                <img className="absolute w-[100%] h-[100%] rounded-xl shadow-lg" src="assets/landing-bg.webp" alt="bgImage" /> 
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
            <section className="absolute -left-[10.5rem] max-[800px]:left-[2rem] max-[800px]:bottom-[4rem] max-[440px]:left-0 max-[440px]:w-[100vw] w-[22rem] h-[26rem] bg-[#eee2ca] rounded-xl border-0 shadow-xl  z-4">
                    <div onSubmit={handleSignIn} className={`${logIn? 'block' : 'hidden'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[2rem]">Sign In</h1>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />
                        <p className="text-sm text-gray-600 mt-[1rem]">Forget your password!</p>
                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50">SIGN IN</button>
                    </div>
                    <div onSubmit={handleSignUp} className={`${logIn? 'hidden' : 'block'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[1rem]">Sign Up</h1>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Name" type="text" required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Confirm password" type="text" required />
                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[1rem]">SIGN UP</button>
                    </div>
            </section>
        </main>
        </>
    )
}

export default SignIU;