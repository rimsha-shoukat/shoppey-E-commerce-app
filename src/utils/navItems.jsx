import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UserProfileButton = ({ user }) => {
  return (
    <>
      {/* user or signin button */}
      {user !== null ? (
        <Link to="/User">
          <img
            className="rounded-full hover:opacity-70 hover:transition-all duration-700 ease-in-out w-8 h-8"
            src={user?.image}
            alt={user?.name}
          />
        </Link>
      ) : (
        <Link to="/SignIU">
          <button className="font-semibold text-sm cursor-default py-2 text-nowrap">
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
