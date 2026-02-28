import { useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { UserContext } from "../utils/UserProvider.jsx";

function Landing() {
    const [navView, setNavView] = useState(false);
    const {user} = useContext(UserContext);


    return (
        <>
            <div className="relative w-[100%] h-screen">
                {/* Background Image */}
                <img className="absolute w-[100%] h-[100vh]" src="assets/landing-bg.webp" alt="landing Image" />
                {/* Content */}
                <div className="relative flex flex-col gap-[2rem] pt-[1rem] max-[710px]:pt-[0rem] w-[100%] h-[100vh]">
                    <nav className="flex flex-row items-center justify-between px-[3rem] w-[100%] h-[6%]">
                        {/* shop logo or name */}
                        <button className="font-extrabold  text-lg max-[710px]:text-md">shoppey</button>
                        <div className="static max-[710px]:w-auto w-[80%]">
                            {/* hide or show navbar icon */}
                            <TbLayoutNavbarExpand onClick={() => setNavView(!navView)} className="hidden cursor-default text-2xl max-[710px]:block" />
                            {/* navbar buttons */}
                            <div className={`flex max-[710px]:flex-col text-sm max-[710px]:w-[85%] max-[710px]:h-auto min-[710px]:flex ${navView ? 'block' : 'hidden'} max-[710px]:right-[3rem] max-[710px]:absolute max-[710px]:bg-[#b48068] font-bold  flex-row items-center justify-end max-[710px]:gap-[0rem] gap-[3rem]`}>
                                <Link to="/AllProducts" className="max-[710px]:w-[100%]">
                                    <button className="cursor-default hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">ALL</button>
                                </Link>
                                <Link to="/AllProducts/men" className="max-[710px]:w-[100%]">
                                    <button className="cursor-default hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">MEN</button>
                                </Link>
                                <Link to="/AllProducts/women" className="max-[710px]:w-[100%]">
                                    <button className="cursor-default hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">WOMEN</button>
                                </Link>
                                <Link to="/AllProducts/kids" className="max-[710px]:w-[100%]">
                                    <button className="cursor-default hover:transition-all duration-700 ease-in-out max-[710px]:hover:bg-black max-[710px]:w-[100%] max-[710px]:hover:text-[#b48068] max-[710px]:hover:border-none max-[710px]:py-[1rem] hover:border-b-2 border-b-black">KIDS</button>
                                </Link>
                                {/* user or signin button */}
                                {
                                    user !== null ? (
                                        <Link to="/User">
                                            <img className="rounded-full max-[710px]:m-2 hover:opacity-70 hover:transition-all duration-700 ease-in-out width-[38px] h-[38px]" src={user.image} alt={user.name} />
                                        </Link>
                                    ) : (
                                        <Link to="/SignIU" className="max-[710px]:w-[100%]">
                                            <button className="font-bold  hover:transition-all duration-700 ease-in-out cursor-default border-2 border-black max-[710px]:w-[100%]  px-[0.5rem] py-[0.2rem] hover:text-[#b48068] hover:bg-black max-[710px]:hover:bg-black max-[710px]:hover:text-[#b48068] max-[710px]:border-none max-[710px]:py-[1rem] text-nowrap">SIGN IN</button>
                                        </Link>
                                    )
                                }
                            </div>

                        </div>
                    </nav>

                    {/* landing main content */}
                    <main className="flex flex-row max-[710px]:flex-col max-[710px]:gap-[1rem] overflow-hidden items-center justify-between w-[100%] h-[94%]">

                        <section className="w-[50%] h-[100%] max-[710px]:h-auto flex items-center justify-center">
                            <div className="w-auto h-auto flex flex-col items-start justify-start max-[710px]:gap-[1rem] gap-[2rem]">
                                <h1 className="text-[clamp(2.2rem,3.5vw,5rem)] font-semibold  text-nowrap max-[360px]:text-[1.8rem] select-none">Picked Every Item <br /> With Care, You <br /> Must Try</h1>
                                {/* button to navigate */}
                                <Link to="/AllProducts">
                                    <button className="group hover:transition-all duration-700 ease-in-out text-[1.3rem] text-nowrap font-bold  cursor-default border-2 border-black px-[0.5rem] text-[#b48068] hover:bg-transparent hover:text-black bg-black">see collection<RiArrowRightDoubleFill className="inline text-[1.6rem] group-hover:translate-x-2 transition-all duration-700 ease-in-out" /></button>
                                </Link>
                            </div>
                        </section>

                        {/* side image */}
                        <img className="w-[50%] h-[100%] max-[710px]:w-[70%] max-[560px]:w-[90%] max-[360px]:w-[100%] px-[2rem] rounded-bl-[10rem] overflow-hidden" src="assets/landing-side-img.webp" alt="side-img" />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Landing;