import { Link } from 'react-router-dom';
import { productsStore } from "../Store/productsStore";

function BestSeller() {
  const { products } = productsStore();

  return (
    <>
      <section className="flex flex-row max-[920px]:flex-col items-center justify-center gap-[2rem] w-[100%] h-auto py-[5rem] bg-[#251201]">
        <article className="container flex flex-col items-start justify-start gap-[2rem] max-[920px]:pl-0 pl-[2rem] w-[35%] max-[1250px]:w-[40%] max-[920px]:w-[80%] text-white">
          <h1 className="text-[clamp(2.5rem,4.5vw,5rem)] font-bold select-none leading-14">Top sales</h1>
          <p className="select-none max-[1343px]:text-sm max-[860px]:text-md text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
          <Link to="/AllProducts/orderCount">
            <button className="hover:transition-all mt-2 duration-700 delay-150 ease-in-out hover:text-[#8f5e36] font-bold cursor-default">SEE MORE</button>
          </Link>
        </article>

        {/* Slider */}
        <section className="flex flex-row items-center justify-center w-[100%] overflow-x-scroll [scrollbar-width:none] overflow-y-hidden gap-[1.5rem] pt-[2rem] ">
          {products.map((item) => (
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