import signin from "../controllers/signin.mjs";
import signup from "../controllers/signup.mjs";
import profile from "../controllers/profile.mjs";

// middleware
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// user account routes (signup, signin, profile)
router.post("/signin", signin);
router.post("/signup", signup);
router.get("/profile", getUser, profile);

export default router;
