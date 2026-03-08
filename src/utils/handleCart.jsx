import { useNavigate } from "react-router-dom";
import { userStore } from "../Store/userStore.js";

export const HandleCart = (props) => {
  const{user, updateCart} = userStore();
  const navigate = useNavigate();

    return(
        <button
          onClick={() => user ?  updateCart(props.size, props.quantity, props.productId) : navigate("/SignIU")}
          className={`w-auto py-1 px-2  bg-[#b48068] hover:bg-[#b48068]/70 rounded-sm cursor-default text-nowrap`}
        >
         Add to cart
        </button>
    )
}
