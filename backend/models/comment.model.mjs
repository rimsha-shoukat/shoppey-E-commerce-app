import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    text: {
        type: String,
        required: [true, "Comment can't be empty."],
        trim: true,
    },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;