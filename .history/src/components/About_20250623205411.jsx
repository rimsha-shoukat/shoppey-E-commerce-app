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

function About(){
    return(
        <>
            <section className="flex flex-col w-[100%] h-auto overflow-hidden items-center max-[440px]:p-[0.8rem] justify-between gap-2 p-[2rem] font-serif">
                <h1 className="text-[clamp(1.2rem,4vw,4rem)] font-bold">What People Say About Us</h1>
                <p className="text-sm max-[533px]:hidden">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque. Lorem ipsum dolor sit amet.</p>
                {/* rating slider section */}
                <div className="flex flex-row w-[90%] mt-[1.5rem] gap-4 items-center justify-between cursor-grab select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
                style = {{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    {Users.map((user,i) => (
                        <div key={i} className="flex flex-col w-auto h-auto flex-shrink-0 items-center justify-between gap-2 bg-[#eee2ca] p-4 rounded-md border-2 border-[#c8967d]">
                            <p className="font-semibold">{user.intro}</p>
                            <p className="">{user.review}</p>
                            <img  className="w" src={user.img}/>
                            <h1>{user.name}</h1>
                            <h1>{user.rank}</h1>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About;