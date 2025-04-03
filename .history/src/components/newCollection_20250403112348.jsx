import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <div className="w-[100%] flex flex-col items-center justify-center py-[3rem]">
                <section className="relative w-[50%] h-auto flex flex-row items-start justify-center pb-[1rem]">
                    <img  className="w-[40%] h-[22rem] rounded-tl-[7rem]" src={collection} alt="New Collection" />
                    <div className="w-[60%] p-[1.5rem]">
                        <h1 className="text-3xl font-bold">NEW COLLECTION <br/> 2025</h1><br/>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta suscipit ducimus incidunt vel. Consectetur, magnam velit eligendi delectus tempore dicta iure amet deserunt. Mollitia neque similique corrupti laborum tenetur?</p>
                    </div>
                    <section className="absolute bottom-0 right-0 bg-gray-200 py-[1rem] w-auto flex flex-row">
                        <div className="border-r-2 border-r-gray-600 px-[1rem]">
                            <h1 className="">2025</h1>
                            <p>Year</p>
                        </div>
                        <div className="border-r-2 border-r-gray-600 px-[1rem]">
                            <h1>8900+</h1>
                            <p>Products</p>
                        </div>
                        <div className="px-[1rem]">
                            <h1>3105+</h1>
                            <p>Sales</p>
                        </div>
                </section>
                </section>
                
            </div>
            
        </>
    )
}

export default newCollection;