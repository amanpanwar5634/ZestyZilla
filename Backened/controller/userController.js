import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"
//createtoken
const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET); //it generate the token
}
//login
const Login=async(req,res)=>{
 const {email,password}=req.body;
 try{ const user=await userModel.findOne({email});
     if(!user){return res.json({success:false,message:"user not exist"})}
     const isMatch=await bcrypt.compare(password,user.password); //bcrypt .compare ,compare the usr passwrod and hash password
     if(!isMatch){return res.json({success:false,message:"invalid credentials"})}
     const token=createtoken(user._id); //the token generated is store in token which pass after successfull login
     res.json({success:true,token,message:"Login successfull",loginUser:user});
 }
 catch(err){
    console.log("error->",err);
    res.json({success:false,message:"error in login"});
 }
}

const Register=async(req,res)=>{
  let {username,email,password}=req.body;
   let existUser=await userModel.findOne({email});
   try{ if(existUser)  return res.json({success:false,message:"user already created"});
        if(!validator.isEmail(email))  return res.json({success:false,message:"enter a valid email"});
        //hashing passsword
        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);
        const newUser=new userModel({
            username:username,
            email:email,
            password:hashPassword
        })
        const user=await newUser.save();
        const token=createtoken(user._id);
        return res.json({success:true,token,message:"new user created",newuser:user})
   }
   catch(err){
    console.log("err->",err);
    res.json({success:false,messge:"error"});
   }

}
export {Login,Register}