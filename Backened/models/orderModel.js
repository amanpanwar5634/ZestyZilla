import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    amount:{type:Number,required:true},
    items:{type:Array,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"food processing"},
    payment:{type:Boolean,default:false},
    date:{type:Date,default:Date.now()}
});
const orderModel=new mongoose.model("order",orderSchema);
export default orderModel;