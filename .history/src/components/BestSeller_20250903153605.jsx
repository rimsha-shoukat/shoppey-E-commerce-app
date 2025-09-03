import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Slider(props){
  return (
    <section className="flex flex-row items-center justify-center w-[100%] gap-[1.5rem] pt-[2rem] font-serif">
      {props.products.slice(props.start, props.end).map((item) => {
    return (
        <div key={item.id} className="w-auto h-auto bg-white">
          <Link key={item.id} to={`/ProductDetail/${item.id}`}>
           <img  className="w-[16rem] h-[15rem] drop-shadow-lg" src={item.src} alt={item.name} loading="laz" />
          </Link>
          <div className="p-[0.5rem] select-none w-[16rem] h-[5rem]">
            <h1 className="text-[1rem] font-semibold leading-5 pb-[0.25rem]">{item.name}</h1>
            <p className='text-[1rem]'>${item.price}</p>
          </div>
        </div>
  )})}
    </section>
  );
}

function BestSeller({Products}){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); 
  const bestSeller = Products.filter((items) => (items.trend == true && items.new == tru));

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
                    <Link to="/AllProducts/new">
                    <button className="hover:transition-all mt-2 duration-700 delay-150 ease-in-out hover:text-[#8f5e36] font-bold cursor-pointer">SEE MORE</button>
                    </Link>
                </article>
                <section className="flex flex-col gap-[2rem] w-[65%] max-[1250px]:w-[60%] max-[920px]:w-[90%] overflow-hidden">
                 <Slider start={currentIndex} end={currentIndex + itemsPerPage} products={bestSeller} />
                <section className="max-[1185px]:justify-center flex flex-row items-start flex-wrap gap-2 justify-start mt-[2rem]">
                  {Array.from({ length: Math.ceil(bestSeller.length / itemsPerPage) }).map((_, index) => (
                      <button
                          key={index}
                          onClick={() => handleClick(index)}
                          className={`w-[0.6rem] h-[0.6rem] cursor-pointer rounded-full ${currentIndex === index * itemsPerPage ? 'bg-white' : 'bg-transparent'} border-white border-[0.1rem]`}
                      ></button>
                  ))}
                  </section>
                </section>
           </section>
        </>
    )
}

export default BestSeller;