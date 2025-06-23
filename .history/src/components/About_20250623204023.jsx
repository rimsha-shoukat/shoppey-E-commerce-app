import React from "react";
import img1 from "../assets/seller1.png";
import img2 from "../assets/seller2.png";
import img3 from "../assets/seller3.png";
import img4 from "../assets/seller4.png";

const Users = [
    {
        "id": 0,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img1,
        "name": "user 1",
        "rank": "customer"
    },{
        "id": 1,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img2,
        "name": "user 2",
        "rank": "customer"
    },{
        "id": 2,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img3,
        "name": "user 3",
        "rank": "customer"
    },{
        "id": 3,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img4,
        "name": "user 4",
        "rank": "customer"
    },{
        "id": 4,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img1,
        "name": "user 5",
        "rank": "customer"
    },{
        "id": 5,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img2,
        "name": "user 6",
        "rank": "customer"
    },{
        "id": 6,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img3,
        "name": "user 7",
        "rank": "customer"
    },{
        "id": 7,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img4,
        "name": "user 8",
        "rank": "customer"
    }
]

function About(){
    return(
        <>
            <section className="flex flex-col items-center max-[440px]:p-[1rem] justify-between gap-2 p-[3rem] font-serif">
                <h1 className="text-[clamp(1.2rem,4vw,4rem)] font-bold">What People Say About Us</h1>
                <p className="text-sm max-[533px]:hidden">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                {/* rating slider section */}
                <div className="flex flex-row pt-[1.5rem] gap-4 items-center justify-between cursor-grab select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
                style = {{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    {Users.map((user,i) => (
                        <div key={i} className="flex flex-col items-center justify-between bg-[#eee2ca] p-4 rounded-md border-2 border-[#c8967d]">
                            <h1>{user.intro}</h1>
                            <h1>{</h1>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About;