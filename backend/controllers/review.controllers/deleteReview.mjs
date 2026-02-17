import Review from "../../models/review.model.mjs";

async function deleteReview(req, res) {
    try {
        const userId = req.user._id;
        const { reviewId } = req.body;
        if (!reviewId) {
            return res.status(400).json({ message: "Review Id is required" });
        }

        // check if review exist and delete
        const deletedReview = await Review.findOneAndDelete({ _id: reviewId, user: userId });
        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        return res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default deleteReview;