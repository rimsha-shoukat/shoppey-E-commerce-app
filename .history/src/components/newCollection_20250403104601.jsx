import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <div className="w-[100%] flex items-center justo">
                <section className="w-[100%] h-auto flex flex-row items-center justify-center py-[3rem] gap-[0.65rem]">
                    <img  className="w-[30%]" src={collection} alt="New Collection" />
                    <div className="w-[40%]">
                        <h1>NEW COLLECTION 2025</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta suscipit ducimus incidunt vel. Consectetur, magnam velit eligendi delectus tempore dicta iure amet deserunt. Mollitia neque similique corrupti laborum tenetur?</p>
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