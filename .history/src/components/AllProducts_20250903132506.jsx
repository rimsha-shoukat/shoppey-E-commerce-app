import React , { useState , useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

function AllProducts({Products}) {
  const { param } = useParams();
  const [ filterProducts , setFilterProducts ] = useState(Products);
  const searchRef = useRef("");

  function handleSearchItems(){
    if (searchRef.current.value !== "") {
      v = departureCity.current.value;
      
    }
    const searchProducts = Products.filter((product) =>
     product.name.toLowerCase().includes(searchRef.toLowerCase())
    );

  }
 
  // useEffect( () => {
  //   let Items = [...Products];
    
  //   const searchProducts = Products.filter((product) =>
  //    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   if(param){
  //     if(['men' , 'women' , 'kids'].includes(param)){
  //       Items = Items.filter(item => item.category === param);
  //     } else if(['new', 'trend', 'deal'].includes(param)){
  //       if(param === "new"){
  //         Items = Items.filter(item => item.new === true);
  //       } else if(param === "trend"){
  //         Items = Items.filter(item => item.trend === true);
  //       } else if(param === "deal"){
  //         Items = Items.filter(item => item.deal === true);
  //       }
  //     }
  //   }
  //   if(searchTerm !== ""){
  //      if(searchProducts.length > 0){
  //        setFilterProducts(searchProducts);
  //      }else{
  //        alert("Not found");       
  //       }
        
  //   }else{
  //       setFilterProducts(Items);
  //   }

  // }, [param, searchTerm]);

  return (
    <>
      <div className="w-[100%] h-auto font-serif">

        <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
            <Link to="/">
              <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
            </Link>
            <div className="flex flex-row items-center justify-center gap-6 text-xl">
              <Link to="/Save">
                <FaRegHeart className="cursor-pointer hover:text-gray-500" />
              </Link>
              <Link to="/Cart">
                <FaCartShopping className="cursor-pointer hover:text-gray-500" />
              </Link>
                <FaRegUser className="cursor-pointer hover:text-gray-500" />
            </div>
        </section>

        <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
              <h1 className="font-bold text-2xl">Explore All Products</h1>
                <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
                    <input type="text" ref={searchRef}
                    placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                    <BiSearch onClick={() => handleSearchItems()} className="font-bold cursor-pointer text-2xl hover:text-[#b48068]"/>
                </div>
        </section>

        <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
        { filterProducts.map((item) => (
            <Link key={item.id} to={`/ProductDetail/${item.id}`}>
              <img key={item.id}  className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.src} alt="products" loading="lazy" />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllProducts;