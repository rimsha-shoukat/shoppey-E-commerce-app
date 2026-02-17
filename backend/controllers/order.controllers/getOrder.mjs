import Order from "../../models/order.model.mjs";

async function getOrder(req, res) {
    try {
        const userId = req.user._id;
        const userOrders = await Order.find({ user: userId });

        // find if user have order history
        if (!userOrders) {
            return res.status(400).json({ message: "User have no order history" });
        }
        return res.status(200).json({ message: "User orders retrived successfully", orders: userOrders })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default getOrder;