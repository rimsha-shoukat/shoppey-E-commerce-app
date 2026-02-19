import User from "../../models/user.model.mjs";

async function updateLocation(req, res) {
    try {
        const { location } = req.body;
        if (!location) {
            return res.status(400).json({ message: "Location is required" });
        }
        const user = await User.findById(req.user._id);
        if (user.location === location) {
            return res.status(400).json({ message: "New location must be different from current" });
        }

        // update user location and save
        user.location = location;
        await user.save();
        return res.status(200).json({ message: "Location updated successfully"});
    } catch (error) {
        console.log("Error in updateLocation controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateLocation;