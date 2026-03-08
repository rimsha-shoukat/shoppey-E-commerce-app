import User from "../../models/user.model.mjs";

async function removeSaved(req, res) {
    try {
        // find user, update user saved and save user
        const user = await User.findById(req.user._id);
        user.saved = undefined;
        await user.save();
        return res.status(200).json({ message: "All products removed from saved items"});
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default removeSaved;