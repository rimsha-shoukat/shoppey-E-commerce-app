import addReview from "../controllers/review.controllers/addReview.mjs";
import deleteReview from "../controllers/review.controllers/deleteReview.mjs";
import editReview from "../controllers/review.controllers/editReview.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.patch("/updateReview", getUser, addReview);
router.patch("/editReview", getUser, editReview);
router.delete("/deleteReview", getUser, deleteReview);

export default router;