import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";

import img1 from "../assets/w1.png";
import img2 from "../assets/w2.png";
import img3 from "../assets/w3.png";
import img4 from "../assets/w4.png";
import img5 from "../assets/w5.png";
import img6 from "../assets/w6.png";
import img7 from "../assets/w7.png";
import img8 from "../assets/w8.png";
import img9 from "../assets/w9.png";
import img10 from "../assets/w10.png";
import img11 from "../assets/w11.png";
import img12 from "../assets/w12.png";
import img13 from "../assets/w13.png";
import img14 from "../assets/w14.png";
import img15 from "../assets/w15.png";
import img16 from "../assets/w16.png";
import img17 from "../assets/w17.png";
import img18 from "../assets/w18.png";
import img19 from "../assets/w19.png";
import img20 from "../assets/w20.png";
import img21 from "../assets/w21.png";
import img22 from "../assets/w22.png";
import img23 from "../assets/w23.png";
import img24 from "../assets/w24.png";
import img25 from "../assets/w25.png";
import img26 from "../assets/w26.png";
import img27 from "../assets/w27.png";
import img28 from "../assets/w28.png";
import img29 from "../assets/w29.png";
import img30 from "../assets/w30.png";
import img31 from "../assets/w31.png";
import img32 from "../assets/w32.png";
import img33 from "../assets/w33.png";
import img34 from "../assets/w34.png";


function AllProducts() {
  return (
    <>
      <div className="w-[100%] h-auto font-serif">

        <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
            <Link to="/">
              <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
            </Link>
            <div className="flex flex-row items-center justify-center gap-6 text-xl">
              <Link to="/Save">
                <FaRegHeart className="cursor-pointer hover:text-gray-500" />
              </Link>
              <Link to="/Cart">
                <FaCartShopping className="cursor-pointer hover:text-gray-500" />
              </Link>
                <FaRegUser className="cursor-pointer hover:text-gray-500" />

            </div>
        </section>

        <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
              <h1 className="font-bold text-2xl">Explore All Products</h1>
                <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
                    <input type="text" placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                    <BiSearch className="font-bold cursor-pointer text-2xl hover:text-[#b48068]"/>
                </div>
        </section>

        <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img7} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img1} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img2} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img5} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img6} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img8} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img9} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img3} />
          <img className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={img4} />
        </section>
      </div>
    </>
  );
};

export default AllProducts;