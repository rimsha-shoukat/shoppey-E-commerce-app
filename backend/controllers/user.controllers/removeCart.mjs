import User from "../../models/user.model.mjs";

async function removeCart(req, res) {
    try {
        const { productId, size } = req.body;
        const user = await User.findById(req.user._id);
        const existingCartItemIndex = user.cart.findIndex(item => item.product.toString() === productId && item.size === size);
        if (existingCartItemIndex >= 0) {
            user.cart.splice(existingCartItemIndex, 1);
            await user.save();
            return res.status(200).json({ message: "Item removed from cart successfully", user });
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }
    } catch (error) {
        console.log("Something went wrong:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default removeCart;