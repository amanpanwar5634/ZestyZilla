import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import  cartRoute from "./routes/cartRoute.js";
 
import 'dotenv/config.js'; //to acquire the .env file
import orderRouter from "./routes/orderRoute.js";
//config
const app=express();
const port =4000;
//middleware
app.use(express.json());
app.use(cors());
//connection db
connectDb();

//api endpoint
app.use("/food",foodRouter);
app.use("/user",userRouter);
app.use("/cart",cartRoute);
app.use("/order",orderRouter);
//to access images in browser
app.use("/images",express.static("uploads"));

//route
app.get("/",(req,res)=>{
    res.send("api working");
})
app.listen(port,()=>{
    console.log("app is listening on port");
})
//mongodb+srv://amanpanwar123op:<db_password>@cluster0.ni6ue.mongodb.net/?