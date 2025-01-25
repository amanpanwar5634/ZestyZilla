 
import orderModel from "../models/orderModel.js";
 import userModel from "../models/userModel.js";
 import Stripe from "stripe";
//placing user order for frontend
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
const placeOrder=async(req,res)=>{
    const frontend_url="https://zestyzillafrontend.vercel.app";
 try{ const newOrder=new orderModel({
    userId:req.body.userId,
    items:req.body.items,
    amount:req.body.amount,
    address:req.body.address,
 });
 await newOrder.save();
 //after order save we have to clear cartData
 await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
 const line_items=req.body.items.map((item)=>({
    price_data:{
        currency:"inr",
        product_data:{
            name:item.name
        },
    unit_amount:item.price*100*80
    },
    quantity:item.quantity
 }))
line_items.push({
    price_data:{
        currency:"inr",
        product_data:{
            name:"delivery charge"
        },
        unit_amount:2*100*80
    },
    quantity:1
})
const session=await stripe.checkout.sessions.create({
    line_items:line_items,
    mode:'payment',
    success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
})
 res.json({success:true,session_url:session.url});
 }
 catch(err){
   console.log(err);
   res.json({success:false,message:"error"})
 }
}
//payment verification method
const verifyOrder=async(req,res)=>{
 const {orderId,success}=req.body;
 try{if(success=='true'){
    await orderModel.findByIdAndUpdate(orderId,{payment:true});
    res.json({success:true,message:"paid"});
 }
 else{
    await orderModel.findByIdAndDelete(orderId);
res.json({status:false,message:"Not paid"});
 }
 }
 catch(err){
    console.log("error->",err);
  res.json({status:false,message:"error"});
 }
}
//user orders
const userOrder=async(req,res)=>{
try{   
    const orders=await orderModel.find({userId:req.body.userId});
    console.log(orders);
res.json({status:true,data:orders});
}catch(err){
 console.log("error->",err);
 res.json({status:false,message:"error"});
}
}
//list order for the admin panel
const listOrders=async(req,res)=>{
    try{ const orders=await orderModel.find({});
    res.json({status:true,data:orders});
    }
    catch(err){
     console.log(err);
     res.json({status:false,message:"error"});
    }
}
//api for updation order status
const updateStatus=async(req,res)=>{
    try{
        const updatedOrder=await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({status:true,message:"staus changed",updatedOrder});
    }
    catch(err){console.log("error->",err);
        res.json({status:false,message:"error"});
    }
}
export  {placeOrder,verifyOrder,userOrder,listOrders,updateStatus}