import React from 'react';

function Product(){
    return(
        <>
         <div className="w-[100%] h-auto">
            <h1>Our Product</h1>
            {/* categories button section */}
            <section>
                <button>NEW</button>
                <button>WOMEN</button>
                <button>ME</button><button></button><button></button>
            </section>
         </div>
        </>
    )
}

export default Product;