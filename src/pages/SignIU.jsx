import { useState } from "react"
import { userStore } from "../Store/userStore.js";
import { validateSignupFields, validateSigninFields } from "../utils/validateFileds.js";
import { useNavigate } from "react-router-dom";

function SignIU() {
    const { signin, signup, loading } = userStore();
    const [logIn, setLogIn] = useState(true);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // choose signin or signup button handler
    const handleClick = () => {
        setLogIn(!logIn);
        setForm({ name: "", email: "", password: "" });
        setErrorMessage("");
    };

    // signin form submission button handler
    const handleSignIn = async (e) => {
        setErrorMessage("");
        e.preventDefault();
        if (validateSigninFields({ form, setErrorMessage })) {
            await signin({ form });
            const { error, message } = userStore.getState();
            if (error) {
                setErrorMessage(error);
            } else if (message) {
                setErrorMessage(message);
                navigate("/");
            }
        }
    };

    // signup form submission button handler
    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        if (validateSignupFields({ form, setErrorMessage })) {
            await signup({ form });
            const { error, message } = userStore.getState();
            if (error) {
                setErrorMessage(error);
            } else if (message) {
                setErrorMessage(message);
                navigate("/");
            }
        }
    };

    return (
        <>
            <main className="relative flex flex-row  items-center justify-center w-[100%] h-[100vh] select-none font-serif">
                {/* forms section */}
                <section className="relative max-[440px]:w-screen max-[800px]:h-auto w-[26rem] h-[30rem] bg-[#eee2ca] rounded-xl border-0 shadow-xl">
                    {/* signin form */}
                    <form onSubmit={handleSignIn} className={`${logIn ? 'block' : 'hidden'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem] p-[4rem] max-[400px]:p-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[2rem]">Sign In</h1>
                        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />
                        <p className="text-red-800 w-full text-start text-xs">{errorMessage}</p>
                        <button className="cursor-pointer text-sm text-gray-600 hover:text-red-600 mt-[1rem]">Forget your password!</button>
                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50">{loading ? "Loading>>>" : "SIGN IN"}</button>
                        <p className="text-gray-600 text-xs hidden max-[800px]:block">Or</p>
                        <p onClick={handleClick} className="hover:underline cursor-pointer hidden max-[800px]:block">signup</p>
                    </form>

                    {/* signup form */}
                    <form onSubmit={handleSignUp} className={`${logIn ? 'hidden' : 'block'} w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1rem] p-[4rem] max-[400px]:p-[1rem]`}>
                        <h1 className="text-[2rem] font-bold text-[#251201] mb-[1rem]">Sign Up</h1>
                        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Name" type="text" required />
                        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Email" type="email" required />
                        <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-white/30 px-[0.5rem] py-[0.35rem] text-[1.1rem]" placeholder="Password" type="text" required />

                        <p className="text-red-800 w-full text-start text-xs">{errorMessage}</p>

                        <button type="submit" className="cursor-pointer text-[1.5rem] shadow-md px-[3rem] py-[0.55rem] font-bold rounded-full bg-white/50 mt-[1rem]">{loading ? "Loading>>>" : "SIGN UP"}</button>
                        <p className="text-gray-600 text-xs hidden max-[800px]:block">Or</p>
                        <p onClick={handleClick} className="hover:underline cursor-pointer hidden max-[800px]:block">signup</p>
                    </form>
                </section>
                {/* section with signin or sign up buttons */}
                <section className="relative right-[1rem] max-[800px]:right-0 max-[800px]:hidden max-[440px]:w-screen w-[24rem] h-[26rem] rounded-xl border-0 shadow-xl z-2">
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
            </main>
        </>
    )
}

export default SignIU;