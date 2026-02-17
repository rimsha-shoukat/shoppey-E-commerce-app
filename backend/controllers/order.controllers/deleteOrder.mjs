import Order from "../../models/order.model.mjs";

async function deleteOrder(req, res) {
    try {
        const userId = req.user._id;
        const { orderId } = req.body;

        // find user order and delete
        const deletedOrders = await Order.findOneAndDelete({ user: userId, _id: orderId });
        if (!deletedOrders) {
            return res.status(400).json({ message: "User have no such order" });
        }
        return res.status(200).json({ message: "User order deleted successfully" })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default deleteOrder;