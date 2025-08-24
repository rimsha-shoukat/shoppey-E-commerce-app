import React from "react";

import c1 from "../assets/c1.jpeg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import c5 from "../assets/c5.jpeg"
import c6 from "../assets/c6.jpeg"
import c7 from "../assets/c1.jpeg"
import c8 from "../assets/c1.jpeg"
import c9 from "../assets/c1.jpeg"
import c10 from "../assets/c1.jpeg"
import c11 from "../assets/c1.jpeg"
import c12 from "../assets/c1.jpeg"
import c13 from "../assets/c1.jpeg"
import c14 from "../assets/c1.jpeg"
import c15 from "../assets/c1.jpeg"
import c16 from "../assets/c1.jpeg"
import c17 from "../assets/c1.jpeg"
import c18 from "../assets/c1.jpeg"
import c19 from "../assets/c1.jpeg"
import c20 from "../assets/c1.jpeg"
import c21 from "../assets/c1.jpeg"
import c22 from "../assets/c1.jpeg"
import c23 from "../assets/c1.jpeg"
import c24 from "../assets/c1.jpeg"
import c25 from "../assets/c1.jpeg"
import c26 from "../assets/c1.jpeg"
import c27 from "../assets/c1.jpeg"
import c28 from "../assets/c1.jpeg"

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
    },{
        "id": 8,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img1,
        "name": "user 5",
        "rank": "customer"
    },{
        "id": 9,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img2,
        "name": "user 6",
        "rank": "customer"
    },{
        "id": 10,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img3,
        "name": "user 7",
        "rank": "customer"
    },{
        "id": 11,
        "intro": "lorem Lorem ipsum dolor sit amet. Lorem, ipsum",
        "review": "Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit amet.",
        "img": img4,
        "name": "user 8",
        "rank": "customer"
    }
]

const UserSlider = ()=> {
    return(
            <div className="flex flex-row gap-4 items-center justify-between select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
                style = {{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    {Users.map((user,i) => (
                        <div key={i} className="flex flex-col w-[19rem] h-auto flex-shrink-0 items-center shadow-md p-4 justify-between gap-2 bg-[#eee2ca] rounded-md border-2 border-[#c8967d] font-sans">
                            <p className="font-semibold">{user.intro}</p>
                            <p className="text-sm text-justify">{user.review}</p>
                            <img  className="w-[5.5rem] h-[5rem] rounded-full" src={user.img}/>
                            <h1 className="font-bold text-[1.3rem] leading-2 mt-2">{user.name}</h1>
                            <h1 className="font-italic text-[1.2rem]">{user.rank}</h1>
                        </div>
                ))}
            </div>
    )
}

function About(){
    return(
        <>
            <section className="flex flex-col w-[100%] h-auto overflow-hidden select-none items-center max-[440px]:p-[0.8rem] justify-between gap-2 p-[2rem] font-serif">
                <h1 className="text-[clamp(1.2rem,4vw,4rem)] font-bold">What People Say About Us</h1>
                <p className="text-sm max-[533px]:hidden">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                {/* rating slider section */}
                <div className="grid grid-rows-1 overflow-hidden mt-6 p-4 w-auto">
                    <UserSlider/>
                </div>
            </section>
        </>
    )
}

export default About;