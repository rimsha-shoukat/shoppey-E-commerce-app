import Order from "../../models/order.model.mjs";

async function placeOrder(req, res) {
    try {
        const userId = req.user._id;
        const { products, totalAmount, status = "Pending", coupons = [] } = req.body;
        if (products.length <= 0) {
            return res.status(400).json({ message: "Order can't be empty" });
        }

        // create new order and save 
        const order = new Order({ user: userId, products, totalAmount, status, coupons });
        await order.save();
        return res.status(201).json({ message: "User order placed successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default placeOrder;