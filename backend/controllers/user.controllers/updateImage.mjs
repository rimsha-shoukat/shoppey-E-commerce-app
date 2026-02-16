import User from "../../models/user.model.mjs";

async function updateImage(req, res) {
    try {
        const { newImage } = req.body;
        if (!newImage) {
            return res.status(400).json({ message: "New image is required" });
        }
        
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { image: newImage },
            { new: true, runValidators: true }
        ).select("-password -__v");
        return res.status(200).json({ message: "Image updated successfully", user: updatedUser });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateImage;