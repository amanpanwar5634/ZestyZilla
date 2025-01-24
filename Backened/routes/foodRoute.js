import express from "express";
import { addfood,foodList, removefood } from "../controller/foodController.js";
import multer from "multer";
const foodRouter=express.Router();
//IMAGE UPLOAD
const storage=multer.diskStorage({
    destination:"uploads",
     filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
     }
})
const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addfood);
foodRouter.get("/list",foodList);
foodRouter.delete("/remove/:id",removefood);
export default foodRouter;