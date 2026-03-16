import { useState, useEffect } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { UserProfileButton } from "../utils/navItems.jsx";

function Landing() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/AllProducts", label: "ALL" },
    { to: "/AllProducts/men", label: "MEN" },
    { to: "/AllProducts/women", label: "WOMEN" },
    { to: "/AllProducts/kids", label: "KIDS" },
  ];

  return (
    <div className="relative w-full h-screen max-[710px]:h-auto overflow-hidden">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="assets/landing-bg.webp"
        alt="landing"
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <span className="text-2xl font-extrabold tracking-wide select-none text-gray-900">
            shoppey
          </span>

          <div className="hidden min-[710px]:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to}>
                <span className="text-xs font-semibold tracking-widest text-gray-800 hover:text-[#b48068] border-b-2 border-transparent hover:border-[#b48068] pb-0.5 transition-all duration-300">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden min-[710px]:flex items-center">
            <UserProfileButton user={user} />
          </div>

          <div className="flex min-[710px]:hidden items-center gap-4">
            <UserProfileButton user={user} />
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="flex flex-col gap-[5px] p-1 cursor-default group"
            >
              <span className={`block w-5 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center ${navOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-gray-900 transition-all duration-300 ${navOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center ${navOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* dropdown menu */}
        {navOpen && (
          <div className="min-[710px]:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg flex flex-col py-2">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setNavOpen(false)}>
                <span className="block px-8 py-4 text-xs font-bold tracking-widest text-gray-800 hover:text-[#b48068] hover:bg-[#b48068]/5 transition-colors duration-200 border-b border-gray-50">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col h-full pt-20">
        <main className="flex flex-row max-[710px]:flex-col items-center justify-between w-full h-full px-8 max-[710px]:px-4 max-[710px]:gap-6 max-[710px]:pt-6 max-[710px]:pb-4">

          {/* Left: text */}
          <section className="w-1/2 max-[710px]:w-full flex items-center justify-center">
            <div className="flex flex-col items-start gap-6 max-[710px]:gap-4">
              <span className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest uppercase text-[#b48068] border border-[#b48068]/50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b48068] animate-pulse" />
                New Collection
              </span>

              <h1 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-tight select-none text-gray-900 max-[360px]:text-[1.8rem]">
                Picked Every Item <br />
                With Care, You <br />
                Must Try
              </h1>

              <p className="text-sm text-gray-500 font-normal max-w-xs max-[710px]:hidden">
                Curated fashion for every moment — shop men, women & kids.
              </p>

              <Link to="/AllProducts">
                <button className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase cursor-default border-2 border-gray-900 px-6 py-3 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                  See Collection
                  <RiArrowRightDoubleFill className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </section>

          {/* Right: image */}
          <img
            className="w-[44%] h-[100%] max-[710px]:w-[70%] max-[560px]:w-[90%] max-[360px]:w-full object-cover px-4 rounded-bl-[6rem] shadow-2xl"
            src="assets/landing-side-img.webp"
            alt="side-img"
          />
        </main>
      </div>
    </div>
  );
}

export default Landing;