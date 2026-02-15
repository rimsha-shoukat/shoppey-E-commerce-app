import signin from "../controllers/user.controllers/signin.mjs";
import signup from "../controllers/user.controllers/signup.mjs";
import profile from "../controllers/user.controllers/profile.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// auth routes
router.post("/signin", signin);
router.post("/signup", signup);

// user routes
router.get("/profile", getUser, profile);
router.patch("/profile/updateName", getUser, updateName);
router.patch("/profile/updateImage", getUser, updateImage);
router.patch("/profile/updateEmail", getUser, updateEmail);
router.patch("/profile/updatePassword", getUser, updatePassword);
router.patch("/profile/updateSaved", getUser, updateSaved);
router.patch("/profile/removeSaved", getUser, removeSaved);
router.patch("/profile/updateCart", getUser, updateCart);
router.patch("/profile/removeCart", getUser, removeCart);
router.patch("/profile/updateLocation", getUser, updateLocation);
router.patch("/profile/updateNumber", getUser, updateNumber);
router.patch("/profile/updateRank", getUser, updateRank);
router.patch("/profile/addCoupons", getUser, addCoupons);
router.patch("/profile/removeCoupons", getUser, removeCoupons);

export default router;
