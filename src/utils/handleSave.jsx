import { userStore } from "../Store/userStore.js";
import { FaRegHeart } from "react-icons/fa6";

export const HandleSave = (productId) => {
  const { updateSave, user } = userStore();

  return (
    <>
      <FaRegHeart
        onClick={() => updateSave(productId)}
        className={`text-[1.5rem] ${user?.saved?.includes(productId) ? "bg-red-800" : ""} text-gray-600 mr-2`}
      />
    </>
  );
};
