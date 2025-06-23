import React from "react";

const customers = [
    {
        "id": 0,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img1,
        "name": "customer "
    }
]

function About(){
    return(
        <>
            <section className="flex flex-col items-center max-[440px]:p-[1rem] justify-between gap-2 p-[3rem] font-serif">
                <h1 className="text-[clamp(1.2rem,4vw,4rem)] font-bold">What People Say About Us</h1>
                <p className="text-sm max-[533px]:hidden">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                {/* rating slider section */}
                <div className=""></div>
            </section>
        </>
    )
}

export default About;