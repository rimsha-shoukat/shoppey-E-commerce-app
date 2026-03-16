import placeOrder from "../controllers/order.controllers/placeOrder.mjs";
import updateOrder from "../controllers/order.controllers/updateOrder.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.patch("/placeOrder", getUser, placeOrder);
router.patch("/updateOrder", getUser, updateOrder);

export default router;