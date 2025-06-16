import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";
import img1 from "../assets/seller1.png";
import img2 from "../assets/seller2.png";
import img3 from "../assets/seller3.png";
import img4 from "../assets/seller4.png";
import img5 from "../assets/seller5.png";
import img6 from "../assets/seller6.png";
import img7 from "../assets/seller7.png";
import img8 from "../assets/seller8.png";
import img9 from "../assets/seller9.png";
import img10 from "../assets/seller10.png";
import img11 from "../assets/seller11.png";
import img12 from "../assets/seller12.png";
import img13 from "../assets/seller13.png";
import img14 from "../assets/seller14.png";
import img15 from "../assets/seller15.png";
import img16 from "../assets/seller16.png";
import img17 from "../assets/seller17.png";
import img18 from "../assets/seller18.png";

import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { ImStarEmpty } from "react-icons/im";

let Items = [
  {
    "id" : 0,
    "image": img1,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 1,
    "image": img2,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "22",
    "cat": "men",
    "rank": "trend"
  },{
    "id" : 2,
    "image": img3,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 3,
    "image": img4,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "24",
    "cat": "men",
    "rank": "trend"
  },{
    "id" : 4,
    "image": img5,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 5,
    "image": img6,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "18",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 6,
    "image": img7,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "21",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 7,
    "image": img8,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 8,
    "image": img9,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 9,
    "image": img10,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 10,
    "image": img11,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men",
    "rank": "new"
  },{
    "id" : 11,
    "image": img12,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men",
    "rank": "trend"
  },{
    "id" : 12,
    "image": img13,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "19",
    "cat": "men",
    "rank": "trend"
  },{
    "id" : 13,
    "image": img14,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men",
    "rank": "trend"
  },{
    "id" : 14,
    "image": img15,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "22",
    "cat": "men"
  },{
    "id" : 15,
    "image": img16,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "women"
  },{
    "id" : 16,
    "image": img17,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "women"
  },{
    "id" : 17,
    "image": img18,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "24",
    "cat": "women"
  },  {
    "id" : 18,
    "image": img1,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "women"
  },{
    "id" : 19,
    "image": img2,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "22",
    "cat": "women"
  },{
    "id" : 20,
    "image": img3,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "20",
    "cat": "women"
  },{
    "id" : 21,
    "image": img4,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "24",
    "cat": "women"
  },{
    "id" : 22,
    "image": img5,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "women"
  },{
    "id" : 23,
    "image": img6,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "18",
    "cat": "women"
  },{
    "id" : 24,
    "image": img7,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "21",
    "cat": "women"
  },{
    "id" : 25,
    "image": img8,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "women"
  },{
    "id" : 26,
    "image": img9,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "women"
  },{
    "id" : 27,
    "image": img10,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "25",
    "cat": "women"
  },{
    "id" : 28,
    "image": img11,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "women"
  },{
    "id" : 29,
    "image": img12,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "women"
  },{
    "id" : 30,
    "image": img13,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "19",
    "cat": "women"
  },{
    "id" : 31,
    "image": img14,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "women"
  },{
    "id" : 32,
    "image": img15,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "22",
    "cat": "men"
  },{
    "id" : 33,
    "image": img16,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "women"
  },{
    "id" : 34,
    "image": img17,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men"
  },{
    "id" : 35,
    "image": img18,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "24",
    "cat": "women"
  }
]

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto p-[3rem] max-[430px]:p-[1rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-center gap-4 max-[310px]:gap-2 leading-4 w-[100%] h-[2rem] max-[430px]:text-sm">
                <button className="cursor-pointer hover:border-b-2">NEW</button>
                <button className="cursor-pointer hover:border-b-2">WOMEN</button>
                <button className="cursor-pointer hover:border-b-2">MEN</button>
                <button className="cursor-pointer hover:border-b-2">TREND</button>
                <div className="flex flex-row items-center justify-center gap-2 cursor-pointer group">
                    <FaSliders />
                    <button className="group-hover:border-b-2 max-[350px]:hidden">Filter</button>
                </div>
            </section>

            {/* Product slider */}
            <section className="w-auto h-auto flex flex-row gap-2 items-center justify-center">
                <FaAnglesLeft className="text-[1.5rem] text-gray-300 hover:text-gray-400 cursor-pointer" />
                <div className="grid grid-rows-2 gap-2 mt-6 overflow-hidden w-auto p-2 inset-shadow-sm inset-shadow-gray-200">
                <div className="flex flex-row gap-2 items-center justify-between">

                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>

                </div>
                <div className="flex flex-row gap-2 items-center justify-between">
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                    <div className="flex flex-col w-auto h-auto shadow-lg">
                    <img className="w-[14rem] h-[13rem]" src={demo} alt="demo" />
                    <div className="flex flex-col p-2 bg-white">
                        <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                            <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
                        </div>
                        <h1 className="font-semibold text-[1rem]">Item Name</h1>
                        <p>$233.98</p>
                    </div>
                    </div>
                </div>
                </div>
                <FaAnglesRight className="text-[1.5rem] text-gray-300 hover:text-gray-400 cursor-pointer" />
            </section>
         </div>
        </>
    )
}

export default Product;