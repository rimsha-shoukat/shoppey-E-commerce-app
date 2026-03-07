import { useNavigate } from "react-router-dom";
import { userStore } from "../Store/userStore.js";
import { FaRegHeart } from "react-icons/fa6";

export const HandleSave = (productId) => {
  const { updateSave, user } = userStore();
  const navigate = useNavigate();
  const isSaved = user?.saved?.some(id => String(id) === String(productId.productId));
  return (
    <>
      <FaRegHeart
        onClick={() => user ? updateSave(productId) : navigate("/SignIU")}
        className={`text-[1.5rem] ${isSaved ? "bg-red-800" : ""} text-gray-600 mr-2`}
      />
    </>
  );
};
