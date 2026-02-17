import Review from "../../models/review.model.mjs";

async function editReview(req, res) {
    try {
        const { review, orderId } = req.body;
        const userId = req.user._id;
        if (!review && !orderId) {
            return res.status(400).json({ message: "Review and OrderId both are required" });
        }

        const userReview = await Review.findOne({ order: orderId, user: userId });
        if (userReview.text == review) {
            return res.status(400).json({ message: "Review must be updated" });
        }
        userReview.text = review;
        await userReview.save();
        return res.status(200).json({ message: "Review updated successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default editReview;