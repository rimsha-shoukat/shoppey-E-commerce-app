import React from 'react'
import collection from "../assets/newCollection.png";
import { Products } from "/AllProducts.jsx";

function newCollection(){
    return(
        <>
            <div className="w-[100%] flex flex-col items-center justify-center py-[3rem]">
                <section className="relative w-[50%] max-[1096px]:w-[75%] max-[710px]:w-[55%] max-[560px]:w-[70%] max-[440px]:w-[90%] max-[710px]:gap-[1rem] max-[710px]:flex-col-reverse h-auto flex flex-row items-start justify-center pb-[1rem]">
                    { Products.map((item) => (

                    ))}

                    <div className="w-[60%] max-[710px]:w-[100%] max-[340px]:px-[0.5rem] p-[1.5rem]">
                        <h1 className="text-3xl max-[320px]:text-[1.6rem] font-bold select-none text-nowrap">NEW COLLECTION <br/> 2025</h1>
                        <p className="text-justify select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta suscipit ducimus incidunt vel. Consectetur, magnam velit eligendi delectus tempore dicta iure amet deserunt. Mollitia neque similique corrupti laborum tenetur?</p>
                    </div>
                    <section className="absolute bottom-0 right-0 drop-shadow-lg w-[70%] max-[710px]:w-[90%] bg-gray-200 flex flex-row select-none p-[0.5rem] pb-[1rem]">
                        <div className="border-r-2 border-r-gray-600 w-[33%] text-center">
                            <h1 className="text-[2rem] max-[710px]:text-[1.3rem] font-bold">2025</h1>
                            <p className="text-semibold leading-[0.5]">Year</p>
                        </div>
                        <div className="border-r-2 border-r-gray-600 w-[33%] text-center">
                            <h1 className="text-[2rem] max-[710px]:text-[1.3rem] font-bold">8900+</h1>
                            <p className="text-semibold leading-[0.5]">Products</p>
                        </div>
                        <div className="w-[33%] text-center">
                            <h1 className="text-[2rem] max-[710px]:text-[1.3rem] font-bold">3105+</h1>
                            <p className="text-semibold leading-[0.5]">Sales</p>
                        </div>
                </section>
                </section>
            </div>    
        </>
    )
}

export default newCollection;