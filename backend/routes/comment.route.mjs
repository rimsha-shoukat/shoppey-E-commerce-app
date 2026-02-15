import getComment from "../controllers/comment.controllers/getComment.mjs";
import deleteComment from "../controllers/comment.controllers/deleteComment.mjs";
import updateComment from "../controllers/comment.controllers/updateComment.mjs";

import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getComment", getUser, getComment);
router.patch("/updateCommet", getUser, updateComment);
router.delete("/deleteComment", getUser, deleteComment);

export default router();