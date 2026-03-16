import User from "../../models/user.model.mjs";
import bcrypt from "bcryptjs";

async function updatePassword(req, res) {
    try {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            return res.status(400).json({ message: "Password's can't be empty" });
        }

        // check if current password is correct
        const user = await User.findById(req.user._id);

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // update password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default updatePassword;