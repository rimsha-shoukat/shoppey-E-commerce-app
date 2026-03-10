import User from "../../models/user.model.mjs";

async function updateImage(req, res) {
    try {
        const { newImage } = req.body;
        if (!newImage) {
            return res.status(400).json({ message: "New image is required" });
        }

        // find user and update image
       await User.findByIdAndUpdate(
            req.user._id,
            { image: newImage },
            { new: true, runValidators: true }
        )
        return res.status(200).json({ message: "Image updated successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateImage;