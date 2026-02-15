import getOrder from "../controllers/order.controllers/getOrder.mjs";
import deleteOrder from "../controllers/order.controllers/deleteOrder.mjs";
import updateOrder from "../controllers/order.controllers/updateOrder.mjs";
import updateOrderStatus from "../controllers/order.controllers/updateOrderStatusmjs";

import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getOrder", getUser, getOrder);
router.patch("/updateOrder", getUser, updateOrder);
router.delete("/deleteOrder", getUser, deleteOrder);
router.patch("/updateOrderStatus", getUser, updateOrderStatus);

export default router();