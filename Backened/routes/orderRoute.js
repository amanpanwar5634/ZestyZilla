 import express from "express";
 import { listOrders, placeOrder,updateStatus,userOrder,verifyOrder} from "../controller/orderController.js";
 import authMiddleware from "../middleware/authMiddleware.js";
const orderRouter=express.Router();
//
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);
export default orderRouter;