import getProduct from "../controllers/product.controllers/getProduct.mjs";
import getDiscount from "../controllers/product.controllers/getDiscount.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getProducts", getProduct);
router.get("/getDiscount", getDiscount);

export default router;