import getProduct from "../controllers/product.controllers/getProduct.mjs";
import updateStock from "../controllers/product.controllers/updateStock.mjs";
import getUser from "../middleware/getUser.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getProduct", getUser, getProduct);
router.patch("/updateStock", getUser, updateStock);

export default router();