import User from "../../models/user.model.mjs";

async function clearCart(req, res) {
    try {
        const userId = req.user._id;
        await User.findByIdAndUpdate(userId, { cart: [] });
        return res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default clearCart;