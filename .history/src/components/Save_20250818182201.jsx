import React  from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Products } from "./AllProducts.jsx";
import { SaveItems } from "./ProductDetail.jsx";
import { CartItems } from "./ProductDetail.jsx";

const [saveItemsList, setSaveItemsList] = useState(SaveItems);

useEffect(() => {
    console.log("Saved items updated:", saveItemsList);
    console.log("Cart items updated:", CartItems);
}, [saveItemsList]);

const addToCart = (id) => {
    const item = CartItems.find(product => product.id === id);
    if (item) {
        alert(`Already ${item.name} in cart`);
    }else{
        CartItems.push(item);
        alert('added to cart');
    }
};

const removeFromSave = (id) => {
    const itemIndex = saveItemsList.findIndex(product => product.id === id);
    if (itemIndex !== -1) {
        const item = saveItemsList[itemIndex];
        const updatedItems = [...saveItemsList];
        updatedItems.splice(itemIndex, 1);
        setSaveItemsList(updatedItems);
        alert(`Removed ${item.name} from saved items`);
    }
}

const Saves = () => {
    if (saveItemsList.length === 0) {
        return (
            <div className="w-[100%] h-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Nothing In Saved Items</h1>
            </div>
        );
    }
    return (
        <section className="w-[100%] h-auto flex flex-col items-center justify-center">
            {saveItemsList.map((item) => (
                <div key={item.id} className="w-auto flex flex-row items-center justify-start py-6 max-[600px]:py-2 gap-4 max-[600px]:gap-2 border-t-2 border-t-gray-400">
                    <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                    <img key={item.id} className="w-[8rem] h-[8rem] max-[400px]:w-[6rem] max-[400px]:h-[6rem] rounded-sm" src={item.src} />
                    </Link>
                    <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-start justify-between gap-[3rem] ">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <h1 className="text-[1.3rem] leading-7 max-[750px]:text-[1rem] max-[750px]:leading-5 w-[20rem] max-[750px]:w-[14rem] max-[650px]:w-[10rem] max-[600px]:w-[18rem] max-[440px]:w-[15rem] max-[400px]:w-[12rem] max-[320px]:w-[10rem] overflow-hidden font-bold max-[400px]:text-[0.85rem] max-[400px]:font-semibold">{item.name}</h1>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <p className="text-md text-nowrap max-[400px]:text-sm">Size: {item.size}</p>
                                <p className="text-md text-nowrap max-[400px]:text-sm">${item.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-4">
                            <button onClick={ () => addToCart(item.id) } className="px-[1rem] py-[0.5rem] hover:font-bold max-[600px]:px-0 max-[600px]:py-0 max-[600px]:text-blue-700 max-[600px]:bg-transparent rounded-md cursor-pointer border-none max-[400px]:text-sm bg-blue-700 hover:bg-transparent hover:text-blue-900 text-nowrap">Add to cart</button>
                            <button onClick={ () => removeFromSave(item.id) } className="px-[1rem] py-[0.5rem] hover:font-bold max-[600px]:px-0 max-[600px]:py-0 max-[600px]:text-red-600 max-[600px]:bg-transparent rounded-md cursor-pointer border-none max-[400px]:text-sm bg-red-600 hover:bg-transparent hover:text-red-800">Remove</button>
                        </div>
                    </div>  
                </div>
            ))}
        </section>
    );
}

function Save(){

    return(
        <>
             <div className="w-[100%] h-auto font-serif flex flex-col items-center justify-between select-none px-4 max-[400px]:px-2">
                <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
                    <Link to="/">
                      <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-700">shoppey</button>
                    </Link>
                    <div className="flex flex-row items-center justify-center gap-6 text-xl">
                      <Link to="/Cart">
                      <FaCartShopping className="cursor-pointer hover:text-gray-500" />
                      </Link>
                      <FaRegUser className="cursor-pointer hover:text-gray-500" />
                    </div>
                </section>
                <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
                    <h1 className="font-bold text-2xl">Saved Items</h1>
                </section>
                <Saves/>
                {/* <section className="w-[100%] h-auto flex flex-col items-center justify-center">
                    <div className="w-auto flex flex-row items-center justify-start py-6 max-[600px]:py-2 gap-4 max-[600px]:gap-2 border-t-2 border-t-gray-400">
                        <img className="w-[8rem] h-[8rem] max-[400px]:w-[6rem] max-[400px]:h-[6rem] rounded-sm" src={img1} />
                        <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-start justify-between gap-[3rem] ">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="text-[1.3rem] leading-5 font-bold max-[400px]:text-[0.85rem] max-[400px]:font-semibold">Jeans with pockets</h1>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <p className="text-md font-semibold text-nowrap max-[400px]:text-sm">Size: M</p>
                                    <p className="text-md font-semibold text-nowrap max-[400px]:text-sm">$450.34</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-4 max-[400px]:gap-2">
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none max-[400px]:px-[0.5rem] max-[400px]:py-[0.3rem] max-[400px]:text-sm bg-blue-700 text-nowrap">Add to cart</button>
                                <button className="px-[1rem] py-[0.5rem] rounded-md cursor-pointer border-none max-[400px]:px-[0.5rem] max-[400px]:py-[0.3rem] max-[400px]:text-sm bg-red-600">Remove</button>
                            </div>
                        </div>  
                    </div>
                </section> */}
                <h1 className="text-[2rem] max-[400px]:text-[1rem] font-bold leading-5 mt-4">You may like</h1>
                <section className="columns-5 w-[100%] p-4 max-[400px]:p-2 h-auto max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                    {Products.map((item) => (
                    <Link key={item.id} to={`/ProductDetail/${item.id}`}>
                      <img key={item.id} className="w-full rounded-[1rem] mb-6 max-[400px]:mb-4 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.src} />
                    </Link>
                    ))}
                </section>
                
            </div>
        </>
    )
}

export default Save;