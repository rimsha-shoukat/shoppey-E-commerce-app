import User from "../../models/user.model.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function signin(req, res) {
    try {
        // destructure request data
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }
        // check user validity
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        // create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        // set token in cookies
        res.cookie("token", token, { httpOnly: true });
        // return user token
        return res.status(200).json({ token });

    } catch (error) {
        console.log("Something went wrong!!!" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default signin;