import {React, useState, useEffect} from "react";
import { RiStarSFill } from "react-icons/ri";
import { ImStarEmpty } from "react-icons/im";
import {}




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

function Slider(props){

  return (
    <section className="flex flex-row items-center justify-center w-[100%] gap-[1.5rem] pt-[2rem] font-serif">
   { collection.slice(props.start, props.end).map((item) => {
    let Rating = [];

    for(let i = 0; i < 5; i++){
      if(i < item.stars){
        Rating.push(<RiStarSFill className="text-yellow-400 text-[1.5rem]" key={`filled-${item.id}-${i}`} />)
      }else {
        Rating.push(<ImStarEmpty className="text-yellow-400 text-[1.2rem] mt-[0.1rem]" key={`empty-${item.id}-${i}`} />)
      }
    }

    return (
        <div key={item.id} className="w-auto h-auto bg-white">
          <img  className="w-[16rem] h-[15rem] drop-shadow-lg" src={item.image} alt="" />
          <div className="p-[0.5rem] select-none leading-6 pb-[0.2rem]">
            <span className="flex flex-row">
              {Rating}
            </span>
            <h1 className="text-[1rem] font-semibold">{item.name}</h1>
            <p className='text-[1rem]'>${item.price}</p>
          </div>
        </div>
  )})}

    </section>
  );
}


function BestSeller(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); 

  useEffect(() => {
      const updateItemsPerPage = () => {
          if ((window.innerWidth < 1250)&&(window.innerWidth > 695)) {
              setItemsPerPage(2);
          }else if(window.innerWidth <= 890){
              setItemsPerPage(1);
          }else {
              setItemsPerPage(3);
          }
      };

      updateItemsPerPage();

      window.addEventListener('resize', updateItemsPerPage);

      return () => {
          window.removeEventListener('resize', updateItemsPerPage);
      };
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index * itemsPerPage) ;
  }

    return (
        <>
           <section className="flex flex-row max-[920px]:flex-col items-center justify-center gap-[2rem] w-[100%] h-auto py-[5rem] bg-[#251201]">
                <article className="container flex flex-col items-start justify-start gap-[2rem] max-[920px]:pl-0 pl-[2rem] w-[35%] max-[1250px]:w-[40%] max-[920px]:w-[80%] text-white">
                    <h1 className="text-[clamp(2.5rem,4.5vw,5rem)] font-bold select-none leading-14">Best Seller Product</h1>
                    <p className="select-none max-[1343px]:text-sm max-[860px]:text-md text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
                    <button className="hover:transition-all mt-2 duration-700 delay-150 ease-in-out hover:text-[#8f5e36] font-bold cursor-pointer">SEE MORE</button>
                </article>
                <section className="flex flex-col gap-[2rem] w-[65%] max-[1250px]:w-[60%] max-[920px]:w-[90%] overflow-hidden">
                 <Slider start={currentIndex} end={currentIndex + itemsPerPage} />
                <section className="max-[1185px]:justify-center flex flex-row items-start justify-start mt-[2rem]">
                  {Array.from({ length: Math.ceil(collection.length / itemsPerPage) }).map((_, index) => (
                      <button
                          key={index}
                          onClick={() => handleClick(index)}
                          className={`w-[0.6rem] h-[0.6rem] cursor-pointer ml-1 rounded-full ${currentIndex === index * itemsPerPage ? 'bg-white' : 'bg-transparent'} border-white border-[0.1rem]`}
                      ></button>
                  ))}
                  </section>
                </section>
           </section>
        </>
    )
}

export default BestSeller;