import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {ProductsContext} from '../utils/ProductsProvider.jsx';

function BestSeller() {
  const { products } = useContext(ProductsContext);
  const bestSeller = products.filter(item => item.rating >= 3);

  return (
    <>
      <section className="flex flex-row max-[920px]:flex-col items-center justify-center gap-[4rem] w-[100%] h-auto py-[4rem] bg-[#251201]">
        <article className="container flex flex-col items-start justify-start gap-[1rem] max-[920px]:pl-0 pl-[2rem] w-[40%] max-[920px]:w-[80%] text-white">
          <h1 className="text-[clamp(2.5rem,4.5vw,5rem)] font-bold select-none leading-14">Top sales</h1>
          <p className="select-none text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
          <Link to="/AllProducts/orderCount">
            <button className="hover:transition-all mt-2 duration-700 delay-150 ease hover:text-[#8f5e36] font-bold cursor-default">SEE MORE</button>
          </Link>
        </article>

        {/* Slider */}
        <section className="flex flex-row items-center justify-center w-[100%] overflow-x-scroll [scrollbar-width:none] overflow-y-hidden gap-[1rem] pt-[2rem] ">
          {bestSeller.length === 0 && (
            <div className="w-full h-auto">
              <marquee className="font-bold text-gray-300 text-2xl" behavior="scroll" direction="left">No best sellers available at the moment.</marquee>
            </div>
          )}
          { bestSeller && bestSeller.map((item) => (
            <div key={item.id} className="w-auto h-auto bg-white">
              <Link key={item.i_d} to={`/ProductDetail/${item._id}`}>
                <img className="w-[16rem] h-[15rem] drop-shadow-lg" src={item.imageUrl} alt={item.name} />
              </Link>
              <div className="p-[0.5rem] select-none w-[16rem] h-[5rem]">
                <h1 className="text-[1rem] font-semibold leading-5 pb-[0.25rem]">{item.name}</h1>
                <p className='text-[1rem]'>${item.price}</p>
              </div>
            </div>
          )
          )}
         
        </section>
      </section>
    </>
  )
}

export default BestSeller;