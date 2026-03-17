import Order from "../../models/order.model.mjs";

async function updateOrder(req, res) {
    try {
        const { orderId, status } = req.body;
        await Order.findByIdAndUpdate({ _id: orderId }, { status });
        return res.status(200).json({ message: "Order status updated" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateOrder;