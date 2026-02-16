import User from "../../models/user.model.mjs";

async function updateSaved(req, res) {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }
        const user = await User.findById(req.user._id);
        user.saved.push(productId);
        await user.save();
        return res.status(200).json({ message: "Product added to saved items", user });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateSaved;