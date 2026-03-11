import User from "../../models/user.model.mjs";

async function setItemQuantity(req, res) {
    try {
        const { itemId, quantity } = req.body;
        if (!itemId || !quantity) {
            return res.status(400).json({ message: "Item Id and Quantity both are required" });
        }

        const user = await User.findOne({ _id: req.user._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const item = user?.cart?.find((cartItem) =>
            cartItem._id.toString() == itemId.toString()
        );
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        item.quantity = quantity;
        await user.save();
        return res.status(200).json({ message: "Item quantity updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default setItemQuantity;