import { userStore } from "../Store/userStore.js";
import { HandleCart } from "./handleCart.jsx";;

export const Saves = ({ user, products }) => {
  console.log(products);
  const { updateSave } = userStore();
  const saveItemsList =  products.filter(product => user?.saved?.Include(product?._id)) || [];
  console.log(saveItemsList);

  if (saveItemsList.length === 0) {
    return (
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Nothing In Saved Items</h1>
      </div>
    );
  }
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center">
      {saveItemsList.map((item, index) => (
        <div
          key={`${item?._id}-${index}`}
          className="w-auto flex flex-row items-center justify-start py-6 max-[600px]:py-2 gap-4 max-[600px]:gap-2 border-t-2 border-t-gray-400"
        >
          <Link to={`/ProductDetail/${item?._id}`}>
            <img
              className="w-32 h-32 max-[400px]:w-24 max-[400px]:h-24 rounded-sm"
              src={item?.imageUrl}
              alt={item?.name}
            />
          </Link>
          <div className="flex flex-row max-[600px]:flex-col max-[600px]:gap-4 items-start justify-between gap-12 ">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-[1.3rem] leading-7 max-[750px]:text-[1rem] max-[750px]:leading-5 w-[20rem] max-[750px]:w-56 max-[650px]:w-40 max-[600px]:w-[18rem] max-[440px]:w-60 max-[400px]:w-48 max-[320px]:w-40 overflow-hidden font-bold max-[400px]:text-[0.85rem] max-[400px]:font-semibold">
                {item?.name}
              </h1>
              <div className="flex flex-row items-center justify-between gap-4">
                <p className="text-md text-nowrap max-[400px]:text-sm">
                  Size: {item?.size}
                </p>
                <p className="text-md text-nowrap max-[400px]:text-sm">
                  ${item?.price}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-4">
              <HandleCart productId={item?._id}/>
              <button
                onClick={() => updateSave(item?._id)}
                className="px-4 py-2 hover:font-bold max-[600px]:px-0 max-[600px]:py-0 max-[600px]:text-red-600 max-[600px]:bg-transparent rounded-md cursor-default border-none max-[400px]:text-sm bg-red-600 hover:bg-transparent hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};