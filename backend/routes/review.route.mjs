import getReview from "../controllers/review.controllers/getReview.mjs";
import updateReview from "../controllers/review.controllers/updateReview.mjs";
import deleteReview from "../controllers/review.controllers/deleteReview.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getReview", getUser, getReview);
router.patch("/updateReview", getUser, updateReview);
router.delete("/deleteReview", getUser, deleteReview);

export default router();