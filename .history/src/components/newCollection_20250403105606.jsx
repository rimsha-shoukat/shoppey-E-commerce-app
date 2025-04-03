import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <div className="w-[100%] flex flex-col items-center justify-center py-[3rem]">
                <section className="w-[10rem] h-[15rem] flex flex-row items-start justify-center  gap-[1rem]">
                    <img  className="w-[40%]" src={collection} alt="New Collection" />
                    <div className="w-[60%]">
                        <h1 className="text-3xl font-bold">NEW COLLECTION <br/> 2025</h1><br/>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta suscipit ducimus incidunt vel. Consectetur, magnam velit eligendi delectus tempore dicta iure amet deserunt. Mollitia neque similique corrupti laborum tenetur?</p>
                    </div>
                </section>
                <section>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                </section>
            </div>
            
        </>
    )
}

export default newCollection;