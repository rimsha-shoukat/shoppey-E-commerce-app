import { useContext, useState } from "react";
import { userStore } from "../Store/userStore.js";
import { UserContext } from "./UserProvider.jsx";

export const UpdateImage = () => {
 const { user } = useContext(UserContext);
  const { updateImage } = userStore();
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <label className="cursor-pointer relative group mr-2">
      {imageLoading ? (
        <div className="w-8 h-8 scale-[1.2] flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-[#b48068] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <img
          className="w-8 h-8 rounded-full scale-[1.2] transition-all duration-300 ease-in-out group-hover:opacity-50"
          src={user?.image}
          alt={user?.name}
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[0.45rem] text-[#b48068] font-bold">
        change
      </span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          setImageLoading(true);
          try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", import.meta.env.VITE_PRESET_NAME);
            formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

            const res = await fetch(
              `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
              {
                method: "POST",
                body: formData,
              },
            );
            const data = await res.json();
            await updateImage(data.secure_url);
          } catch (err) {
            console.error("Image upload failed", err);
          } finally {
            setImageLoading(false);
          }
        }}
      />
    </label>
  );
};
