import React from "react";
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

import { RiStarSFill } from "react-icons/ri";
import { ImStarEmpty } from "react-icons/im";


let collection = [
  {
    "id" : 0,
    "image": img1,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20"
  },{
    "id" : 1,
    "image": img2,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "22"
  },{
    "id" : 2,
    "image": img3,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "20"
  },{
    "id" : 3,
    "image": img4,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "24"
  },{
    "id" : 4,
    "image": img5,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26"
  },{
    "id" : 5,
    "image": img6,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "18"
  },{
    "id" : 6,
    "image": img7,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "21"
  },{
    "id" : 7,
    "image": img8,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25"
  },{
    "id" : 8,
    "image": img9,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26"
  },{
    "id" : 9,
    "image": img10,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "25"
  },{
    "id" : 10,
    "image": img11,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "25"
  },{
    "id" : 11,
    "image": img12,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23"
  },{
    "id" : 12,
    "image": img13,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "19"
  },{
    "id" : 13,
    "image": img14,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "20"
  },{
    "id" : 14,
    "image": img15,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "22"
  },{
    "id" : 15,
    "image": img16,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "26"
  },{
    "id" : 16,
    "image": img17,
    "stars" : 5,
    "name":"Fashion wear",
    "price": "23"
  },{
    "id" : 17,
    "image": img18,
    "stars" : 4,
    "name":"Fashion wear",
    "price": "24"
  }
]

function Slider(){
  const [slice, setSlice] = useState
  useS
  return (
    <section className="flex flex-row items-center justify-center w-[100%] gap-[3rem] pt-[2rem]">
   { collection.map((item) => {
    let Rating = [];

    for(let i = 0; i < 5; i++){
      if(i < item.stars){
        Rating.push(<RiStarSFill key={`filled-${item.id}-${i}`} />)
      }else {
        Rating.push(<ImStarEmpty key={`empty-${item.id}-${i}`} />)
      }
    }

    return (
        <div key={item.id} className="w-auto h-auto bg-white leading-4">
          <img  className="w-[16rem] h-[13rem] drop-shadow-lg" src={item.image} alt="" />
          <div className="p-[1rem] select-none">
            <span className="flex flex-row text-[1.2rem] text-[#ffff00]">
              {Rating}
            </span>
            <h1>{item.name}</h1>
            <p>Price: ${item.price}</p>
          </div>
        </div>
  )})}

    </section>
  );
}


function BestSeller(){
    return (
        <>
           <section className="flex flex-row items-center justify-center gap-[2rem] w-[100%] h-auto py-[4rem] bg-[#251201]">
                <article className="container flex flex-col items-start justify-start gap-[1rem] pl-[3rem] w-[40%] text-white">
                    <h1 className="text-7xl font-bold select-none">Best Seller <br/> item</h1>
                    <p className="select-none text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
                    <button className="hover:bg-white drop-shadow-lg transition-all duration-700 delay-150 ease-in-out hover:text-[#251201] bg-[#8f5e36] px-[0.65rem] py-[0.4rem] hover:font-bold rounded-md cursor-pointer">SEE MORE</button>
                </article>
                <section className="flex flex-col gap-[2rem] w-[60%] overflow-hidden">
                 <Slider />
                <section>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                    <button>*</button>
                  </section>
                </section>
           </section>
        </>
    )
}

export default BestSeller;