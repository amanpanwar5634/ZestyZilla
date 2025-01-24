import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { StoreContext } from "../context/Context";
import axios from "axios";
export default function Login(){
  const {url,token,settoken}=useContext(StoreContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit=async(data)=>{
        console.log("Data->",data);
       const userInfo={
        password:data.password,
        email:data.email
       }
       console.log("data.password",data.password);
       try{const res=await axios.post(`${url}/user/login`,userInfo);
       if(res.data.success){
        console.log("login user",res.data.loginUser);
         toast.success("login successfull");
          settoken(res.data.token);
          localStorage.setItem("token",res.data.token);
          document.getElementById("my_modal_3").close();
     
       }
       else{
          toast.error("Error in Login");
       }}
       catch(err){
        console.log("error in fetching->",err);
       }
      }
    return(<>
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
     <Link to="/">
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕</button></Link>
      <h1 className="font-bold text-4xl text-center">Login</h1>
   <div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Email</h3>
    <input type="email"placeholder="Enter email" className="w-80 mt-1 outline-none bg-white-300"
    {...register("email", { required: true })} ></input>
     <br></br><p className="text-red-600 mt-2">{errors.email && <span>This field is required</span>}</p>
    </div>
    <div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Password</h3>
    <input type="password" placeholder="Enter password" className="w-80 mt-1 outline-none bg-white-300" 
    {...register("password", { required: true })}></input>
     <br></br><p className="text-red-600 mt-2">{errors.password && <span>This field is required</span>}</p>
    </div>
    <div className="flex flex-cols-1 items-center md:flex-cols-2 px-4 py-1 justify justify-between mt-3">
     <div><button className="mx-2 btn btn-primary">Login</button></div>
     <div><p>Not registered?{" "}
       <Link to="/signup"> <span className="mx-2 text-blue-500 underline cursor-pointer">Signup</span></Link></p></div>
    </div>
     </form>
  </div>
</dialog>
    </div>
    </>)
}
 