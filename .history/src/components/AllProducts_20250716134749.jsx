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
import img35 from "../assets/w35.png";
import img36 from "../assets/w36.png";
import img37 from "../assets/w37.png";
import img38 from "../assets/w38.png";
import img39 from "../assets/w39.png";
import img40 from "../assets/w40.png";
import img41 from "../assets/w41.png";
import img42 from "../assets/w42.png";
import img43 from "../assets/w43.png";
import img44 from "../assets/w44.png";
import img45 from "../assets/w45.png";
import img46 from "../assets/w46.png";
import img47 from "../assets/w47.png";
import img48 from "../assets/w48.png";
import img49 from "../assets/w49.png";
import img50 from "../assets/w50.png";
import img51 from "../assets/w51.png";
import img52 from "../assets/w52.png";
import img53 from "../assets/w53.png";
import img54 from "../assets/w54.png";
import img55 from "../assets/w55.png";
import img56 from "../assets/w56.png";
import img57 from "../assets/w57.png";
import img58 from "../assets/w58.png";
import img59 from "../assets/w59.png";
import img60 from "../assets/w60.png";
import img61 from "../assets/w61.png";
import img62 from "../assets/w62.png";
import img63 from "../assets/w63.png";
import img64 from "../assets/w64.png";
import img65 from "../assets/w65.png";
import img66 from "../assets/w66.png";
import img67 from "../assets/w67.png";
import img68 from "../assets/w68.png";
import img69 from "../assets/w69.png";
import img70 from "../assets/w70.png";
import img71 from "../assets/w71.png";
import img72 from "../assets/w72.png";
import img73 from "../assets/w73.png";
import img74 from "../assets/w74.png";
import img75 from "../assets/w75.png";
import img76 from "../assets/w76.png";
import img77 from "../assets/w77.png";
import img78 from "../assets/w78.png";
import img79 from "../assets/w79.png";
import img80 from "../assets/w80.png";
import img81 from "../assets/w81.png";
import img82 from "../assets/w82.png";
import img83 from "../assets/w83.png";
import img84 from "../assets/w84.png";
import img85 from "../assets/w85.png";
import img86 from "../assets/w86.png";
import img87 from "../assets/w87.png";
import img88 from "../assets/w88.png";
import img89 from "../assets/w89.png";
import img90 from "../assets/w90.png";
import img91 from "../assets/w91.png";
import img92 from "../assets/w92.png";
import img93 from "../assets/w93.png";
import img94 from "../assets/w94.png";
import img95 from "../assets/w95.png";
import img96 from "../assets/w96.png";
import img97 from "../assets/w97.png";
import img98 from "../assets/w98.png";
import img99 from "../assets/w99.png";
import img100 from "../assets/w100.png";
import img101 from "../assets/w101.png";
import img102 from "../assets/w102.png";
import img103 from "../assets/w103.png";
import img104 from "../assets/w104.png";
import img105 from "../assets/w104.png";
import img106 from "../assets/w104.png";
import img107 from "../assets/w104.png";
import img108 from "../assets/w104.png";
import img109 from "../assets/w104.png";
import img110 from "../assets/w104.png";
import img111 from "../assets/w104.png";
import img112 from "../assets/w104.png";
import img113 from "../assets/w104.png";
import img114 from "../assets/w104.png";
import img115 from "../assets/w104.png";
import img11 from "../assets/w104.png";
import img110 from "../assets/w104.png";
import img110 from "../assets/w104.png";
import img110 from "../assets/w104.png";


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