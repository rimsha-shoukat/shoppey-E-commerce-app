import React from 'react';
import { FaSliders } from "react-icons/fa6";
import demo from "../assets/seller13.png";

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
    "cat": "men"
  },{
    "id" : 1,
    "image": img2,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "22",
    "cat": "men"
  },{
    "id" : 2,
    "image": img3,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men"
  },{
    "id" : 3,
    "image": img4,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "24",
    "cat": "men"
  },{
    "id" : 4,
    "image": img5,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men"
  },{
    "id" : 5,
    "image": img6,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "18",
    "cat": "men"
  },{
    "id" : 6,
    "image": img7,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "21",
    "cat": "men"
  },{
    "id" : 7,
    "image": img8,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 8,
    "image": img9,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men"
  },{
    "id" : 9,
    "image": img10,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 10,
    "image": img11,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 11,
    "image": img12,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men"
  },{
    "id" : 12,
    "image": img13,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "19",
    "cat": "men"
  },{
    "id" : 13,
    "image": img14,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men"
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
    "cat": "men"
  },{
    "id" : 16,
    "image": img17,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men"
  },{
    "id" : 17,
    "image": img18,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "24",
    "cat": "men"
  },  {
    "id" : 18,
    "image": img1,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men"
  },{
    "id" : 19,
    "image": img2,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "22",
    "cat": "men"
  },{
    "id" : 20,
    "image": img3,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men"
  },{
    "id" : 21,
    "image": img4,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "24",
    "cat": "men"
  },{
    "id" : 4,
    "image": img5,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men"
  },{
    "id" : 5,
    "image": img6,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "18",
    "cat": "men"
  },{
    "id" : 6,
    "image": img7,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "21",
    "cat": "men"
  },{
    "id" : 7,
    "image": img8,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 8,
    "image": img9,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26",
    "cat": "men"
  },{
    "id" : 9,
    "image": img10,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 10,
    "image": img11,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25",
    "cat": "men"
  },{
    "id" : 11,
    "image": img12,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men"
  },{
    "id" : 12,
    "image": img13,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "19",
    "cat": "men"
  },{
    "id" : 13,
    "image": img14,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20",
    "cat": "men"
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
    "cat": "men"
  },{
    "id" : 16,
    "image": img17,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23",
    "cat": "men"
  },{
    "id" : 17,
    "image": img18,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "24",
    "cat": "men"
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