import Review from "../../models/review.model.mjs";

async function editReview(req, res) {
    try {
        const { review, orderId } = req.body;
        const userId = req.user._id;
        if (!review || !orderId) {
            return res.status(400).json({ message: "Review and OrderId both are required" });
        }

        // check if the review exist
        const userReview = await Review.findOne({ order: orderId, user: userId });
        if (!userReview) {
            return res.status(404).json({ message: "Review not found for this order" });
        }

        // check if the review is updated
        if (userReview.text === review) {
            return res.status(400).json({ message: "Review must be updated" });
        }

        // update review and save
        userReview.text = review;
        await userReview.save();
        return res.status(200).json({ message: "Review updated successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default editReview;