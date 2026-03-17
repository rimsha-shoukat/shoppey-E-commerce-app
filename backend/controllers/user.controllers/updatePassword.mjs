import User from "../../models/user.model.mjs";
import bcrypt from "bcryptjs";

async function updatePassword(req, res) {
    try {
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "Password's can't be empty" });
        }
        if (oldPassword === newPassword) {
            return res.status(400).json({ message: "New password must be different from old." });
        }
        // check if current password is correct
        const user = await User.findById(req.user._id);
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Old Password" });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default updatePassword;