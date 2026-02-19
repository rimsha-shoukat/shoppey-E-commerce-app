import Comment from "../../models/comment.model.mjs";

async function addComment(req, res) {
    try {
        const { comment, productId, commentId } = req.body;
        const userId = req.user._id;
        if (!comment || !productId || !commentId) {
            return res.status(400).json({ message: "Comment, commentId and ProductId all are required" });
        }

        // find comment
        const existedComment = await Comment.findOne({ _id: commentId, user: userId, product: productId });
        if (!existedComment) {
            return res.status(400).json({ message: "Comment does not exist ot unauthorized" });
        }

        // check if the comment is updated
        if (existedComment.text === comment) {
            return res.status(400).json({ message: "Comment must be updated" });
        }

        // update comment and save
        existedComment.text = comment;
        await existedComment.save();
        return res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default addComment;