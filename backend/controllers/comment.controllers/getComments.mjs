import Comment from "../../models/comment.model.mjs";

async function getComment(req, res) {
  try {
    const comments = await Comment.find().populate("user", "_id name");;
    return res.status(200).json({message: "Comments fetched successfully", comments});
  } catch (error) {
    return res.status(500).json({message: "Internal server error " + error.message})
  }
}

export default getComment;