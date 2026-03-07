import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider.jsx";
import { UserProfileButton } from "../utils/navItems.jsx";
import { BackButton } from "../utils/navItems.jsx";
import {ProductsContext} from "../utils/ProductsProvider.jsx";
import { Saves } from "../utils/saveList.jsx";

function Save() {
  const { user } = useContext(UserContext);
  const {products} = useContext(ProductsContext);
  return (
    <>
      <div className="w-[100%] h-auto  flex flex-col items-center justify-between select-none px-4 max-[400px]:px-2">
        <section className="flex flex-row items-center py-2 px-2 justify-between w-[100%] h-auto">
          <BackButton />
          <div className="flex flex-row items-center justify-center gap-6 text-xl">
            <Link to="/Cart">
              <FaCartShopping className="cursor-default hover:text-gray-500" />
            </Link>
            <UserProfileButton user={user} />
          </div>
        </section>
        <section className="mb-2 flex flex-col items-center justify-center w-[100%] p-8 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca]">
          <h1 className="font-semibold text-2xl">Saved Items</h1>
        </section>

        {user ? (
          <Saves user={user} products={products} />
        ) : (
          <div className="w-[100%] h-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              Please Sign In to view save Items
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Save;
