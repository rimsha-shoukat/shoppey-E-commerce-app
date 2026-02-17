import Review from "../../models/review.model.mjs";
import Order from "../../models/order.model.mjs";

async function addReview(req, res) {
    try {
        const { review, orderId } = req.body;
        const userId = req.user._id;
        if (!review || !orderId) {
            return res.status(400).json({ message: "Review and OrderId both are required" });
        }
        // check for existing review
        const existedReview = await Review.findOne({ order: orderId, user: userId });
        if (existedReview) {
            return res.status(400).json({ message: "Review already exist for order" });
        }

        // check if the order exist and delivered
        const order = await Order.findOne({ _id: orderId, user: userId });
        if (!order) {
            return res.status(404).json({ message: "Order not found or unauthorized" });
        }
        if (order.status !== "Delivered") {
            return res.status(400).json({ message: "You only review delivered orders" });
        }

        // create new review
        const newReview = new Review({ user: userId, order: orderId, text: review });
        await newReview.save();
        return res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default addReview;