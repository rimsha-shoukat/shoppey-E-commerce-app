import User from "../.../models/user.model.mjs";

async function updateNumber(req, res) {
    try {
        const { number } = req.body;
        if (!number) {
            return res.status(400).json({ message: "Number is required" });
        }
        const user = await User.findById(req.user._id);

        // check is the number updated
        if (user.number === number) {
            return res.status(400).json({ message: "New number must be different from current" });
        }

        // update user number and save
        user.number = number;
        await user.save();
        return res.status(200).json({ message: "Number updated successfully" });
    } catch (error) {
        console.log("Something went wrong in updateNumber controller", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateNumber;