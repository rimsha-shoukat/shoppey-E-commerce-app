import React from "react";
import { FaSliders } from "react-icons/fa6";
import { Products } from "./AllProducts.jsx"

const Slider1 = () => {
  const slide1 = Products.filter(item => item % 2 === 0);
  return (
      <div className="flex flex-row gap-4 items-center justify-between select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
      style = {{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      >
        {slide1.map((item) => (
          <div key={item.id} className="flex flex-col flex-shrink-0 w-auto h-auto shadow-lg">
          <img className="w-[14.5rem] h-[13rem]" src={item.src} alt="demo" />
          <div className="flex flex-col p-2 bg-white">

            <h1 className="font-semibold text-[1rem]">{item.name}</h1>
            <p>${item.price}</p>
          </div>
          </div>
        ))}
      </div>
  )
}

const Slider2 = () => {
  const slide2 = Products.filter(item => item % 2 !== 0);
  return (
      <div className="flex flex-row gap-4 items-center justify-between select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
      style = {{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      >
        {slide2.map((item) => (
          <div key={item.id} className="flex flex-col flex-shrink-0 w-auto h-auto shadow-lg">
          <img className="w-[14.5rem] h-[13rem]" src={item.src} alt="demo" />
          <div className="flex flex-col p-2 bg-white">
            <div className="flex flex-row text-yellow-400 text-[1.3rem] mb-[0.2rem]">
                <RiStarSFill/><RiStarSFill/><RiStarSFill/><ImStarEmpty/><ImStarEmpty/>
            </div>
            <h1 className="font-semibold text-[1rem]">{item.name}</h1>
            <p>${item.price}</p>
          </div>
          </div>
        ))}
      </div>
  )
}

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
                <button className="cursor-pointer hover:border-b-2">TRENDS</button>
                <div className="flex flex-row items-center justify-center gap-2 cursor-pointer group">
                    <FaSliders />
                    <button className="group-hover:border-b-2 max-[350px]:hidden">Filter</button>
                </div>
            </section>

            {/* Product slider */}
              <section className="grid grid-rows-2 gap-2 mt-6 overflow-hidden w-auto p-4 inset-shadow-sm inset-shadow-gray-200">
                <Slider1/>
                <Slider2/>
              </section>
         </div>
        </>
    )
}

export default Product;