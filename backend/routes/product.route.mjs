import getProduct from "../controllers/product.controllers/getProduct.mjs";
import setDiscount from "../controllers/product.controllers/setDiscount.mjs";
import getDiscount from "../controllers/product.controllers/getDiscount.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getProducts", getProduct);
router.patch("/setDiscount", setDiscount);
router.get("/getDiscount", getDiscount);

export default router;