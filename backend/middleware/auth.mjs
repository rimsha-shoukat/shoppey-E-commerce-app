import User from "../models/user.model.mjs";
import jwt from "jsonwebtoken";

async function auth(req, res, next) {
    // get token from req.cookies
    let token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.id) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // find user in database
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    // attach user to req object
    req.user = user;
    next();
}

export default auth;