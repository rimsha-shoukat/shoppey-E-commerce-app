import User from "../../models/user.model.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function signup(req, res) {
    try {
        // destructure request data
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide name, email and password" });
        }
        // check existied users
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            console.log("user exist");
            return res.status(400).json({ message: "User already exists" });
        }
        // create salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(password, salt);
        // create new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        // create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        // set token in cookies
        res.cookie("token", token, { httpOnly: true });
        // return user token
        return res.status(201).json({ message: "User signup success", token });
    } catch (error) {
        console.log("Something went wrong!!!" + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default signup;