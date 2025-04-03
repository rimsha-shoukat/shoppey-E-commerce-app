import React from 'react'
import collection from "../assets/newCollection.png";

function newCollection(){
    return(
        <>
            <section className="w-[100%] h-auto flex flex-row items-center justify-center py-[3rem]">
                <img src={collection} alt="New Collection" />
                <div>
                    <h1>NEW COLLECTION 2025</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet itaque iusto magni nulla ab. Dicta dolorem commodi atque quaerat fuga necessitatibus, accusamus eius, provident adipisci optio eligendi sequi sed!
                    Delectus vel reiciendis ad, eveniet saepe ducimus adipisci qui nemo dicta doloribus repudiandae perspiciatis iusto atque labore facilis, et, voluptatibus ab! Accusantium modi excepturi vitae tenetur consequatur reiciendis assumenda harum?</p>
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