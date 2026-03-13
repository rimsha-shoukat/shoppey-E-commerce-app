import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../utils/ProductsProvider.jsx';
import { ProductPrice } from '../utils/productPrice.jsx';

function BestSeller() {
  const { products } = useContext(ProductsContext);
  const bestSeller = products.filter(item => item?.rating > 4);

  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-auto p-[3rem] bg-[#251201]">
        <article className="flex w-full flex-col items-start justify-start gap-[1rem] text-white">
          <h1 className="text-[clamp(2.5rem,4.5vw,5rem)] font-bold select-none leading-14">Top sales</h1>
        </article>

        {/* Slider */}
        <section className="flex flex-row items-center justify-start w-full overflow-y-hidden overflow-x-scroll [scrollbar-width:none] gap-[1rem] pt-[2rem]">
          {bestSeller.length === 0 && (
            <div className="w-full h-auto">
              <marquee className="font-bold text-gray-300 text-2xl" behavior="scroll" direction="left">No best sellers available at the moment.</marquee>
            </div>
          )}
          {bestSeller && bestSeller.map((item) => (
            <div key={item?._id} className="shrink-0 bg-white">
              <Link to={`/ProductDetail/${item?._id}`}>
                <img className="w-[16rem] h-[15rem] drop-shadow-lg" src={item?.imageUrl} alt={item?.name} />
              </Link>
              <div className="p-[0.5rem] select-none w-[16rem] h-auto">
                <h1 className="text-[1rem] font-semibold pb-[0.25rem] line-clamp-1">{item?.name}</h1>
                <ProductPrice price={item?.price} category={item?.category} />
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