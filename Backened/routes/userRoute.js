import { Login,Register } from "../controller/userController.js";
import express from "express";
const userRouter=express.Router();
//
userRouter.post("/login",Login);
userRouter.post("/register",Register);

export default userRouter;