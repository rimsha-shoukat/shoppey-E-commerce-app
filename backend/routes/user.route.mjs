import signin from "../controllers/user.controllers/signin.mjs";
import signup from "../controllers/user.controllers/signup.mjs";
import profile from "../controllers/user.controllers/profile.mjs";
import updateName from "../controllers/user.controllers/updateName.mjs";
import updateImage from "../controllers/user.controllers/updateImage.mjs";
import updateEmail from "../controllers/user.controllers/updateEmail.mjs";
import updatePassword from "../controllers/user.controllers/updatePassword.mjs";
import updateSaved from "../controllers/user.controllers/updateSaved.mjs";
import removeSaved from "../controllers/user.controllers/removeSaved.mjs";
import updateCart from "../controllers/user.controllers/updateCart.mjs";
import removeCart from "../controllers/user.controllers/removeCart.mjs";
import updateLocation from "../controllers/user.controllers/updateLocation.mjs";
import updateNumber from "../controllers/user.controllers/updateNumber.mjs";
import updateRank from "../controllers/user.controllers/updateRank.mjs";
import addCoupons from "../controllers/user.controllers/addCoupons.mjs";
import removeCoupons from "../controllers/user.controllers/removeCoupons.mjs";
import logout from "../controllers/user.controllers/logout.mjs";
import deleteAccount from "../controllers/user.controllers/deleteAccount.mjs";
import getComments from "../controllers/user.controllers/getComments.mjs";
import getReviews from "../controllers/user.controllers/getReviews.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// auth routes
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/profile/logout", getUser, logout);
router.delete("/profile/deleteAccount", getUser, deleteAccount);

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
router.get("/profile/getComments", getUser, getComments);
router.get("/profile/getReviews", getUser, getReviews);

export default router;