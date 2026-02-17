import Order from "../../models/order.model.mjs";

async function updateOrder(req, res) {
    try {
        const userId = req.user._id;
        const { orderId, status } = req.body;

        // find order and update status
        const order = await Order.findOne({ _id: orderId, user: userId });
        order.status = status;
        order.save();
        return res.status(200).json({ message: "User order updated successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateOrder;