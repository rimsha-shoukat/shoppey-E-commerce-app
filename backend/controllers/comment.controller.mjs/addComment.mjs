import Comment from "../../models/comment.model.mjs";

async function addComment(req, res) {
    try {
        const { comment, productId } = req.body;
        const userId = req.user._id;
        if (!comment || !productId) {
            return res.status(400).json({ message: "Comment and ProductId both are required" });
        }

        // create new comment
        const newComment = new Comment({ user: userId, product: productId, text: comment });
        await newComment.save();
        return res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default addComment;