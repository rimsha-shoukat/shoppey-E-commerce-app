import User from "../../models/User.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function updatePassword(req, res) {
    try {
        const { currentPassword, newPassword } = req.body;

        // check if current password is correct
        const user = await User.findById(req.user._id);
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // update password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default updatePassword;