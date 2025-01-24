import userModel from "../models/userModel.js";
import userRouter from "../routes/userRoute.js";
const addToCart=async(req,res)=>{
try{ let id=req.body.userId;
    let itemId=req.body.itemId;
     let user=await userModel.findById(id);
     let cartData=await user.cartData;
     if(!cartData[itemId]){   //if cardDara size is 0 we intilaize and store the value fo count of items in carttData array;
        cartData[itemId]=1;    //carddata id will store the the no. of item
     }
     else{
        cartData[itemId]+=1;
     }
     await userModel.findByIdAndUpdate(id,{cartData},{ new: true });  //we insert the new cartdata to the user of that id 
      res.json({success:true,message:"added to Cart"});
}
catch(err){
 console.log("Error->",err);
  res.json({status:false,message:"error"});
}
}
const removeFromCart=async(req,res)=>{
    try{ let id=req.body.userId;
        let itemId=req.body.itemId;
        const user=await userModel.findById(id);
         const cartData=user.cartData;
         if(cartData[itemId]>0){
            cartData[itemId]-=1;
         }
         await userModel.findByIdAndUpdate(id,{cartData});
         res.json({status:true,message:"cart item deleted successfully"});
        }
    catch(err){
        res.json({status:false,message:"error)"});
    }

}
const getCart=async(req,res)=>{
 try{
 let id=req.body.userId;
  const user=await userModel.findById(id);
  const cartData=user.cartData;
  res.json({success:true,message:"cart get successfully",cartData});
 }
 catch(err){
  console.log("erro->",err);
  res.json({success:false,message:"error"});
 }
}
export {addToCart,removeFromCart,getCart}