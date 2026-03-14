import addComment from "../controllers/comment.controllers/addComment.mjs";
import deleteComment from "../controllers/comment.controllers/deleteComment.mjs";
import editComment from "../controllers/comment.controllers/editComment.mjs";
import getComment from "../controllers/comment.controllers/getComments.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getComment", getUser, getComment);
router.patch("/addComment", getUser, addComment);
router.patch("/editComment", getUser, editComment);
router.patch("/deleteComment", getUser, deleteComment);

export default router;