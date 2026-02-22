import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function SignIU() {
    const [logIn, setLogIn] = useState(true);
    const [form, setForm] = useState([name = "", email = "", password = ""]);
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    // choose signin or signup button handler
    const handleClick = () => {
        setLogIn(!logIn);
        setName('');
        setEmail('');
        setPassword('');
    };

    // signin form submission button handler
    const handleSignIn = (event) => {
        console.log(event);
    };

    // signup form submission button handler
    const handleSignUp = (event) => {
        console.log(event);

    };

    // forget password dialog cancel button handler
    const handlePasswordButton = (event) => {
        event.preventDefault();
        setChangePassword(!changePassword);
        setName('');
        setEmail('');
        setPassword('');
    };

    // change password confirmation button handler (password change)
    const handleChangePassword = (event) => {
        console.log(event);
    };

    return (
        <>
            <main className="relative flex flex-row-reverse max-[800px]:flex-col items-center justify-center w-[100%] h-[100vh] max-[800px]:h-auto select-none font-serif">
                {/* Reusable Alert */}
                {/* {
                    showAlert && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4 z-10">
                        <h1 className="text-[1.5rem] text-[#b48068] leading-5">Alert</h1>
                        <h1 className="text-[1rem] text-nowrap">{alert}</h1>
                        <button onClick={() => setShowAlert(false)} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Close</button>
                    </div>
                } */}
                {/* change password form */}
                {/* {
                    changePassword && <div className="select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[2rem] rounded-md flex flex-col items-center justify-center gap-4 z-6">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[15rem] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[15rem] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="New Password" type="text" required />
                        <div className="flex flex-row gap-4 mt-4">
                            <button onClick={handleChangePassword} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Confirm</button>
                            <button onClick={handlePasswordButton} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem] ml-[1rem]">Cancel</button>
                        </div>
                    </div>
                } */}

                {/* section with signin or sign up buttons */}
                <section className="relative left-[10.5rem] max-[800px]:left-0 max-[800px]:-bottom-[22rem] max-[440px]:w-screen w-[26rem] h-[30rem] rounded-xl border-0 shadow-xl z-2">
                    <img className="absolute w-[100%] h-[100%] rounded-xl shadow-lg" src="assets/landing-bg.webp" alt="bgImage" />
                    <div className={`${logIn ? 'block' : 'hidden'} relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-2`}>
                        <h1 className="font-bold text-[2.2rem]">Welcome Back!</h1>
                        <p className="font-semibold text-center font-sans">Enter personal details <br /> to sign In your account</p>
                        <button onClick={handleClick} className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN UP</button>
                    </div>
                    <div className={`${logIn ? 'hidden' : 'block'} relative w-[100%] h-[100%] flex flex-col items-center justify-center gap-2`}>
                        <h1 className="font-bold text-[2.2rem]">Welcome!</h1>
                        <p className="font-semibold text-center font-sans">Enter personal details <br /> to create your account</p>
                        <button onClick={handleClick} className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[3rem]">SIGN IN</button>
                    </div>
                </section>

                {/* forms section */}
                <section className="absolute -left-[10.5rem] max-[800px]:left-[2rem] max-[800px]:bottom-[4rem] max-[440px]:left-0 max-[440px]:w-screen w-[22rem] h-[26rem] bg-[#eee2ca] rounded-xl border-0 shadow-xl  z-4">
                    <form onSubmit={handleSignIn} className={`${logIn ? 'block' : 'hidden'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[2rem]">Sign In</h1>
                        <input value={form.email} onChange={(e) => setForm([...from, form.email = e.target.value])} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={form.password} onChange={(e) => setForm([...from, form.password = e.target.value])} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />
                        <button onClick={handlePasswordButton} className="cursor-pointer text-sm text-gray-600 hover:text-red-600 mt-[1rem]">Forget your password!</button>
                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50">SIGN IN</button>
                    </form>
                    <form onSubmit={handleSignUp} className={`${logIn ? 'hidden' : 'block'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[1rem]">Sign Up</h1>
                        <input value={form.name} onChange={(e) => setForm([...from, form.name = e.target.value])} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Name" type="text" required />
                        <input value={form.email} onChange={(e) => setForm([...from, form.email = e.target.value])} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={form.password} onChange={(e) => setForm([...from, form.password = e.target.value])} className="w-[70%] bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />
                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[1rem]">SIGN UP</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default SignIU;