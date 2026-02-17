import getProduct from "../controllers/product.controllers/getProduct.mjs";

import express from "express";
const router = express.Router();

// routes
router.patch("/getProduct", getProduct);
// we will add differnt routes like kids, women, men, disount etc in future

export default router;