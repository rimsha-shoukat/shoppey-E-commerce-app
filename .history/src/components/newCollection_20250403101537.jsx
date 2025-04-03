import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <section className="w-[100%] h-auto flex flex-row items-center justify-center py-[3rem]">
                <img src={collection} alt="New Collection" />
                <div>
                    <h1>NEW COLLECTION 2025</h1>
                    <p>l</p>
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