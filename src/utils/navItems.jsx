import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UserProfileButton = ({ user }) => {
  return (
    <>
      {/* user or signin button */}
      {user !== null ? (
        <Link to="/User">
          <img
            className="rounded-full max-[710px]:m-2 hover:opacity-70 hover:transition-all duration-700 ease-in-out w-9.5 h-9.5"
            src={user?.image}
            alt={user?.name}
          />
        </Link>
      ) : (
        <Link to="/SignIU" className="max-[710px]:w-full">
          <button className="font-bold  hover:transition-all duration-700 ease-in-out cursor-default border-2 border-black max-[710px]:w-full  px-2 py-[0.2rem] hover:text-[#b48068] hover:bg-black max-[710px]:hover:bg-black max-[710px]:hover:text-[#b48068] max-[710px]:border-none max-[710px]:py-4 text-nowrap">
            SIGN IN
          </button>
        </Link>
      )}
    </>
  );
};

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="font-extrabold  text-xl cursor-default hover:text-gray-500"
    >
      shoppey
    </button>
  );
};
