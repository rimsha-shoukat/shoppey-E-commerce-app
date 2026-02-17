import mongoose from "mongoose";

// review model
const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    text: {
        type: String,
        required: [true, "Review can't be empty."],
        trim: true,
    }
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);
export default Review;