import getOrder from "../controllers/order.controllers/getOrder.mjs";
import deleteOrder from "../controllers/order.controllers/deleteOrder.mjs";
import placeOrder from "../controllers/order.controllers/placeOrder.mjs";
import updateOrder from "../controllers/order.controllers/updateOrder.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getOrder", getUser, getOrder);
router.patch("/placeOrder", getUser, placeOrder);
router.delete("/deleteOrder", getUser, deleteOrder);
router.patch("/updateOrder", getUser, updateOrder);

export default router;