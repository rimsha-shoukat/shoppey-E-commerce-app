import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { productsStore } from "../Store/productsStore.js";

function Discount() {
    const { discounts } = productsStore();

    return (
        <>
            <div className="w-[100%] h-auto py-[5rem] max-[710px]:pt-[5rem] max-[710px]:pb-0 flex flex-row overflow-y-hidden overflow-x-scroll [scrollbar-width:none] max-[710px]:flex-col max-[710px]:gap-[1rem] items-center justify-evenly">
                {
                    discounts.map(discount => (
                        <section className='w-[25%] h-auto bg-gray-300 p-[1rem] max-[460px]:w-[70%] max-[320px]:w-[80%]'>
                            <img className="h-[10rem] w-[100%] scale-105 hover:rotate-x-5 hover:-rotate-y-10 transition-transform duration-300 ease-in-out" src={discount.thumbnail} alt={discount.collection} />
                            <div className='pt-[0.65rem]'>
                                <h1 className="font-bold text-2xl select-none">${discount.percent}% OFF</h1>
                                <p className='font-semibold select-none'>${discount.collection.toUpperCase()} COLLECTION</p>
                                <Link to={`/AllProducts/${discount.collection.toLowerCase()}`}>
                                    <button className='group font-semibold hover:bg-gray-200 rounded-sm pr-[0.75rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out delay-150 hover:pl-[0.3rem]'>Go To Collection <FaArrowRightLong className='inline group-hover:translate-x-2 hover:bg-gray-200 transition-all duration-700 ease-in-out delay-150' /></button>
                                </Link>
                            </div>
                        </section>
                    ))
                }
            </div >
        </>
    );
}

export default Discount;