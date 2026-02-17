import User from "../../models/user.model.js";

async function updateCart(req, res) {
    try {
        const { productId, quantity, size } = req.body;
        if (!productId || !quantity || !size) {
            return res.status(400).json({ message: "Product ID, quantity, and size are required" });
        }
        const user = await User.findById(req.user._id);

        // update cart item if item already exist increase its quantity
        const existingCartItemIndex = user.cart.findIndex(item => item.product.toString() === productId && item.size === size);
        if (existingCartItemIndex >= 0) {
            user.cart[existingCartItemIndex].quantity = quantity;
        } else {
            user.cart.push({ product: productId, quantity, size });
        }
        await user.save();
        return res.status(200).json({ message: "Cart updated successfully", user });

    } catch (error) {
        console.log("Error in updateCart controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default updateCart;