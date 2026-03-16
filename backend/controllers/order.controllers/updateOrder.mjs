import Order from "../../models/order.model.mjs";

async function updateOrderStatus(req, res) {
    try {
        const { orderId, status } = req.body;
        await Order.findByIdAndUpdate({ _id: orderId }, { status });
        if (status === "delivered") {
            const couponCode = `SHOP${Date.now().toString().slice(-6)}`
            await User.findByIdAndUpdate(req.user._id, {
                $push: {
                    coupons: {
                        code: couponCode,
                        price: 10,
                    }
                }
            });
        }
        return res.status(200).json({ message: "Order status updated" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateOrderStatus;