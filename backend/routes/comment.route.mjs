import addComment from "../controllers/comment.controllers/addComment.mjs";
import deleteComment from "../controllers/comment.controllers/deleteComment.mjs";
import editComment from "../controllers/comment.controllers/editComment.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.patch("/addComment", getUser, addComment);
router.patch("/editCommet", getUser, editComment);
router.delete("/deleteComment", getUser, deleteComment);

export default router;