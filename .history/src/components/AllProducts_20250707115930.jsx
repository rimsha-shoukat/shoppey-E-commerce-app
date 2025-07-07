import React from 'react';
import { FaRegUser } from "react-icons/fa";

const AllProducts = () => {
  return (
    <>
        <section className="flex flex-row items-center justify-between w-[100%] border-none rounded-[2rem] h-[5rem] bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
           <FaRegUser />
            
          <button className="font-extrabold font-serif text-lg">shoppey</button>
        </section>

    </>
  );
};

export default AllProducts;