import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <section className="w-[100%] h-auto flex flex-row items-center justify-center py-[3rem] gap-[0.65rem]">
                <img src={collection} alt="New Collection" />
                <div classNam>
                    <h1>NEW COLLECTION 2025</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta suscipit ducimus incidunt vel. Consectetur, magnam velit eligendi delectus tempore dicta iure amet deserunt. Mollitia neque similique corrupti laborum tenetur?</p>
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
            </section>
        </>
    )
}

export default newCollection;