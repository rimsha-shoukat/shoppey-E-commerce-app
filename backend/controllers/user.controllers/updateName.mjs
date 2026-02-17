import User from "../../models/user.model.mjs";


async function updateName(req, res) {
    try {
        const { newName } = req.body;
        if (!newName) {
            return res.status(400).json({ message: "New name is required" });
        }

        // find user and update 
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { name: newName },
            { new: true, runValidators: true }
        ).select("-password -__v");
        return res.status(200).json({ message: "Name updated successfully", user: updatedUser });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default updateName;