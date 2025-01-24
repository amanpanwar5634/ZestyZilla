import jwt from "jsonwebtoken";
const authMiddleware=async(req,res,next)=>{
const {token}=req.headers; //in this middleware we pass the token which get converted into user id and it stoe that userId in req.body
//such that the route after middleware access it
if(!token){
   return  res.json({success:false,message:"Not authenticated Login again"});
}
try{
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);  //it give you the id
    req.body.userId=token_decode.id; //you store that id to req.body.userId
next();
}
catch(err){
console.log("err->",err);
res.json({status:false,message:"error"});
}

}
export default authMiddleware;