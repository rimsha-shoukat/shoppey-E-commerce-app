import Comment from "../../models/comment.model.mjs";

async function deleteComment(req, res) {
    try {
        const { commentId, productId } = req.body;
        const userId = req.user._id;
        if (!commentId || !productId) {
            return res.status(400).json({ message: "CommentId and ProductId both are required" });
        }

        // delete comment
        const deletedComment = await Comment.findOneAndDelete({ user: userId, comment: commentId, product: productId });
        if (!deletedComment) {
            return res.status(400).json({ message: "User have no such comment" });
        }
        return res.status(201).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default deleteComment;