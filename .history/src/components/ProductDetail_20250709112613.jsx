import React from 'react'

function ProductDetail(){
    return(
        <>
            <div className="w-[100%] h-auto font-serif">
                <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
                            <Link to="/">
                              <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
                            </Link>
                            <div className="flex flex-row items-center justify-center gap-4 text-xl">
                                <FaRegUser className="cursor-pointer hover:text-gray-500" />
                                <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                            </div>
                 </section>
            </div>
        </>
    )
}

export default ProductDetail;