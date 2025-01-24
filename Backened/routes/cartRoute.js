import { addToCart,removeFromCart,getCart } from "../controller/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import express, { Router } from "express";
const router=express.Router();
router.get("/get",authMiddleware,getCart);
router.post("/add",authMiddleware,addToCart);
router.post("/remove",authMiddleware,removeFromCart);

export default router;