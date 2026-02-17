import getProduct from "../controllers/product.controllers/getProduct.mjs";

import express from "express";
const router = express.Router();

// routes
router.get("/getProduct", getProduct);

export default router;