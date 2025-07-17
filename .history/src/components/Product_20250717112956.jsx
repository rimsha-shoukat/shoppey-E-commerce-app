import React , { useState } from "react";
import { Products } from "./AllProducts.jsx"

const Slider1 = () => {
  const slide1 = Products.filter(item => item.id % 2 === 0);
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
          <div className="flex flex-col p-2 pt-2 bg-white w-[14.5rem] h-[6rem]">
            <h1 className="font-semibold text-[1rem] text-wrap">{item.name}</h1>
            <p>${item.price}</p>
          </div>
          </div>
        ))}
      </div>
  )
}

const Slider2 = () => {
  const slide2 = Products.filter(item => item.id % 2 !== 0);
  
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
          <div className="flex flex-col p-2 pt-2 bg-white w-[14.5rem] h-[6rem]">
            <h1 className="font-semibold text-[1rem] text-wrap">{item.name}</h1>
            <p>${item.price}</p>
          </div>
          </div>
        ))}
      </div>
  )
}


  function Product(){

      const [activeButton, setActiveButton] = useState('ALL');

      const handleButtonClick = (buttonName) => {
          setActiveButton(buttonName);

          if (buttonName === 'NEW') {
              console.log('new products');
              Product.filter(item => item.new == true);
          }else if(buttonName == 'WOMEN'){
            console.log('women products');
            Product.filter(item => item.category == "women");
          }else if(buttonName == 'MEN'){
            console.log('men products');
            Product.filter(item => item.category == "men");
          }else if(buttonName == 'TRENDS'){
            console.log('trends products');
            Product.filter(item => item.trend == true);
          }
      };

    return(
        <>
         <div className="w-[100%] h-auto p-[3rem] max-[430px]:p-[1rem] flex flex-col items-center justify-center font-serif select-none">
            <h1 className="font-bold text-[clamp(2rem,5vw,5rem)]">Our Product</h1>
            {/* categories button section */}
            <section className="flex flex-row items-center justify-center gap-4 max-[310px]:gap-2 leading-4 w-full h-8 max-[430px]:text-sm">
              {['ALL', 'NEW', 'WOMEN', 'MEN', 'TRENDS'].map((buttonName) => (
                  <button
                      key={buttonName}
                      onClick={() => handleButtonClick(buttonName)}
                      className={`cursor-pointer hover:text-gray-800 ${
                          activeButton === buttonName ? 'border-b-2 border-black font-medium' : ''
                      }`}
                  >
                      {buttonName}
                  </button>
              ))}
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