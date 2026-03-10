import User from "../../models/user.model.mjs";
import bcrypt from "bcryptjs";

async function deleteAccount(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user){
             return res.status(404).json({ message: "User not found" });
        }

        const isMatch = bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        await User.findByIdAndDelete(user._id);
        res.clearCookie("token", { httpOnly: true });
        return res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default deleteAccount;