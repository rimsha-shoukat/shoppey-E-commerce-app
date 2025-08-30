import React from "react";

const customers = [
    {
        id: 0,
        intro: "John is a fashion enthusiast.",
        review: "Shoppy offers great styles and fast delivery.",
        img: 'assets/c1.jpeg',
        name: "John Doe",
        rank: "customer"
    },{
        id: 1,
        intro: "Sarah loves trendy outfits.",
        review: "I found the perfect dress at Shoppy!",
        img: 'assets/c2.jpeg',
        name: "Sarah Smith",
        rank: "customer"
    },{
        id: 2,
        intro: "Mike is a casual wear lover.",
        review: "Shoppy has the best casual wear collection.",
        img: 'assets/c3.jpeg',
        name: "Mike Johnson",
        rank: "customer"
    },{
        id: 3,
        intro: "Emily enjoys shopping online.",
        review: "The service was excellent and very user-friendly.",
        img: 'assets/c4.jpeg',
        name: "Emily Davis",
        rank: "customer"
    },{
        id: 4,
        intro: "David is a frequent shopper.",
        review: "I always find great deals on Shoppy.",
        img: 'assets/c5.jpeg',
        name: "David Brown",
        rank: "customer"
    },{
        id: 5,
        intro: "Jessica loves unique styles.",
        review: "Shoppy has unique pieces that stand out.",
        img: 'assets/c6.jpeg',
        name: "Jessica Wilson",
        rank: "customer"
    },{
        id: 6,
        intro: "Chris is a fashion blogger.",
        review: "I recommend Shoppy for stylish outfits.",
        img: ,
        name: "Chris Lee",
        rank: "reseller"
    },{
        id: 7,
        intro: "Laura is a busy professional.",
        review: "Quick delivery and great customer service!",
        img: c8,
        name: "Laura Martinez",
        rank: "customer"
    },{
        id: 8,
        intro: "Tom is a college student.",
        review: "Affordable prices and trendy clothes!",
        img: c9,
        name: "Tom Garcia",
        rank: "customer"
    },{
        id: 9,
        intro: "Anna loves accessories.",
        review: "Shoppy has the best accessories to match outfits.",
        img: c10,
        name: "Anna Rodriguez",
        rank: "customer"
    },{
        id: 10,
        intro: "James is a style consultant.",
        review: "Great quality and stylish options available.",
        img: c11,
        name: "James Hernandez",
        rank: "reseller"
    },{
        id: 11,
        intro: "Sophia enjoys seasonal shopping.",
        review: "I love the seasonal collections at Shoppy.",
        img: c12,
        name: "Sophia Clark",
        rank: "customer"
    },{
        id: 12,
        intro: "Daniel is a tech-savvy shopper.",
        review: "The app is easy to navigate and shop.",
        img: c13,
        name: "Daniel Lewis",
        rank: "customer"
    },{
        id: 13,
        intro: "Olivia is a fashionista.",
        review: "Shoppy keeps me updated with the latest trends.",
        img: c14,
        name: "Olivia Walker",
        rank: "customer"
    },{
        id: 14,
        intro: "Ethan is a loyal customer.",
        review: "I always return to Shoppy for my clothing needs.",
        img: c15,
        name: "Ethan Hall",
        rank: "customer"
    },{
        id: 15,
        intro: "Mia is a bargain hunter.",
        review: "I love the discounts and sales at Shoppy.",
        img: c16,
        name: "Mia Allen",
        rank: "customer"
    },{
        id: 16,
        intro: "Noah is a style influencer.",
        review: "Shoppy is my go-to for stylish outfits.",
        img: c17,
        name: "Noah Young",
        rank: "reseller"
    },{
        id: 17,
        intro: "Ava is a fashion lover.",
        review: "The variety of styles is impressive!",
        img: c18,
        name: "Ava King",
        rank: "customer"
    },{
        id: 18,
        intro: "Liam is a casual shopper.",
        review: "I found exactly what I was looking for.",
        img: c19,
        name: "Liam Wright",
        rank: "customer"
    },{
        id: 19,
        intro: "Isabella enjoys online shopping.",
        review: "Fast shipping and great customer support.",
        img: c20,
        name: "Isabella Scott",
        rank: "customer"
    },{
        id: 20,
        intro: "Lucas is a fashion critic.",
        review: "Shoppy has a great selection of clothing.",
        img: c21,
        name: "Lucas Green",
        rank: "reseller"
    },{
        id: 21,
        intro: "Charlotte loves new arrivals.",
        review: "I always check Shoppy for new arrivals.",
        img: c22,
        name: "Charlotte Adams",
        rank: "customer"
    },{
        id: 22,
        intro: "Mason is a style seeker.",
        review: "Shoppy has something for everyone!",
        img: c23,
        name: "Mason Baker",
        rank: "customer"
    },{
        id: 23,
        intro: "Amelia is a fashion enthusiast.",
        review: "I love the quality of the clothes.",
        img: c24,
        name: "Amelia Nelson",
        rank: "customer"
    },{
        id: 24,
        intro: "Oliver is a trendsetter.",
        review: "Shoppy is always ahead of the trends.",
        img: c25,
        name: "Oliver Carter",
        rank: "reseller"
    },{
        id: 25,
        intro: "Ella is a seasonal shopper.",
        review: "I love shopping for seasonal outfits.",
        img: c26,
        name: "Ella Mitchell",
        rank: "customer"
    },{
        id: 26,
        intro: "Aiden is a fashion advisor.",
        review: "Shoppy has great advice for styling.",
        img: c27,
        name: "Aiden Perez",
        rank: "reseller"
    },{
        id: 27,
        intro: "Grace is a loyal shopper.",
        review: "I trust Shoppy for all my clothing needs.",
        img: c28,
        name: "Grace Roberts",
        rank: "customer"
    }
];


const Reviews = ()=> {
    return(
            <div className="flex flex-row gap-4 items-center justify-between select-none scroll-smooth overflow-x-scroll overflow-y-hidden"
                style = {{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    {customers.map((user,i) => (
                        <div key={i} className="flex flex-col w-[19rem] h-[16rem] flex-shrink-0 items-center shadow-md p-4 justify-between gap-2 bg-[#eee2ca] rounded-md border-2 border-[#c8967d] font-sans">
                            <p className="font-semibold leading-5">{user.intro}</p>
                            <p className="text-sm text-justify mb-2">{user.review}</p>
                            <img  className="w-[5.5rem] h-[5.5rem] rounded-full" src={user.img}/>
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
                    <Reviews />
                </div>
            </section>
        </>
    )
}

export default About;