import React from "react";

function BestSeller(){
    return (
        <>
           <section className="flex flex-row items-center justify-center gap-[0.5rem] w-[100%] h-auto py-[2rem] bg-[#251201]">
                <article className="container pl-[2rem] w-[30%] text-white">
                    <h1 className="text-4xl select-none">Best Seller <br/> Product</h1>
                    <p className="select-none">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quia esse saepe sunt facilis neque iusto porro rem consequuntur, ab minima iste nemo quidem temporibus iure excepturi ipsam perferendis sequi.</p>
                    <button>SEE MORE</button>
                </article>
                <section classname="flex flex-col gap-[1rem]">
                  <div>img</div>
                  <div>img</div>
                  <div>img</div>  
                  <section>
                    <div>8</div>
                    <div>8</div>
                    <div>8</div>
                    <div>8</div>
                  </section>
                </section>
           </section>
        </>
    )
}

export default BestSeller;