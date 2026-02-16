import User from "../../models/user.model.mjs";

async function updateEmail(req, res) {
    try {
        const { newEmail } = req.body;
        if (!newEmail) {
            return res.status(400).json({ message: "New Email is required" });
        }
        
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { email: newEmail },
            { new: true, runValidators: true }
        ).select("-password -__v");
        return res.status(200).json({ message: "Email updated successfully", user: updatedUser })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateEmail;