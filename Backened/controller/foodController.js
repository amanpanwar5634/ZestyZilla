import foodModel from "../models/foodModel.js";
import  fs from 'fs';
//add food item
const addfood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
const food=new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename,});

try{ await  food.save();
  res.json({status:true,message:"food Added",newfood:{food}});
}catch(err){
   console.log("error->",err);
   res.json({status:false,message:"error"});
}
}
//llist food items
const foodList=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
         res.json({success:true,data:foods});
    }catch(err){
      console.log("Eror-<",err);
      res.json({success:false,message:err});
    }
}
//remove food items
const removefood=async(req,res)=>{
    try{ const food=foodModel.findById(req.params.id);
        //to remove the image from the list
        fs.unlink(`uploads/${food.image}`,()=>{});
        const removedfood=await foodModel.findByIdAndDelete(req.params.id);
        res.json({success:true,message:"food removed",data:removedfood});
    }catch(err){
         console.log("eror->",err);
         res.json({success:false,message:err});
    }
}
export {addfood,foodList,removefood}
