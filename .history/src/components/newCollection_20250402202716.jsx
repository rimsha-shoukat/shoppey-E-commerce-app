import React from 'react'
import New from "../assets/discountNew.png";

function newCollection(){
    return(
        <>
            <section className="w-[100%] h-auto flex flex-row items pb-[5rem]">
                <img className="w-[100%]" src={New} alt="" />
                <div>
                    <h1></h1>
                    <p></p>
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