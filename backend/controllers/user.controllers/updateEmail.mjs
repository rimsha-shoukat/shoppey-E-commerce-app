import User from "../../models/user.model.mjs";

async function updateEmail(req, res) {
    try {

        const { newEmail } = req.body;
        if (!newEmail) {
            return res.status(400).json({ message: "New Email is required" });
        }

        //  find user and update email
        await User.findByIdAndUpdate(
            req.user._id,
            { email: newEmail },
            { new: true, runValidators: true }
        );
        return res.status(200).json({ message: "Email updated successfully"})
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateEmail;