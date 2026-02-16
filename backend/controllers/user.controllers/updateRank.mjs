import User from "../../models/user..model.mjs";

async function updateRank(req, res) {
    try {
        const { rank } = req.body;
        if (!rank) {
            return res.status(400).json({ message: "Rank is required" });
        }
        const user = await User.findById(req.user._id);
        user.rank = rank;
        await user.save();
        return res.status(200).json({ message: "Rank updated successfully" });
    } catch (error) {
        console.log("Something went wrong in updateRank controller", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default updateRank;