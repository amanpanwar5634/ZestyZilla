import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import toast from "react-hot-toast";
import { StoreContext } from "../context/Context";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function Signup(){
  const navigate=useNavigate();
  const {url,token,settoken}=useContext(StoreContext);
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit=async(data)=>{
      console.log("Data->",data);
     const userInfo={
      username:data.username,
      password:data.password,
      email:data.email
     }
     console.log("data.password",data.password);
     try{const res=await axios.post(`${url}/user/register`,userInfo);
     if(res.data.success){
      console.log("Signup user",res.data.newuser);
       toast.success("Signup successfull");
        settoken(res.data.token);
        localStorage.setItem("token",res.data.token);
        navigate("/");
     }
     else{
        toast.error("Error in Signup");
     }}
     catch(err){
      console.log("error in fetching->",err);
     }
    }
    return (
        <>
        <div>
        <div>
      <div id="my_modal_2" className="h-screen items-center flex justify-center ">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
            </Link>
            <h1 className="font-bold text-4xl text-center">Signup</h1>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Username</h3>
              <input type="text" placeholder="Enter name" className="w-80 mt-3 outline-none bg-white-300"
                {...register("username", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.text && <span>This field is required</span>}</p>
            </div>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Email</h3>
              <input type="email" placeholder="Enter email" className="w-80 mt-3 outline-none bg-white-300"
                {...register("email", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.email && <span>This field is required</span>}</p>
            </div>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Password</h3>
              <input type="password" placeholder="Enter password" className="w-80 mt-3 outline-none bg-white-300"
                {...register("password", { required: true })} ></input>
              <br></br><p className="text-red-600 mt-2">{errors.password && <span>This field is required</span>}</p>
            </div>
            <div className="flex flex-cols-1  items-center md:flex-cols-2 px-4 py-1 justify justify-between mt-3">
              <div><button className="mx-2 btn btn-primary">Signup</button></div>
              <div><p>Have Account?{" "}
                <button><span className="mx-2 text-blue-500 underline cursor-pointer "
                  onClick={() => document.getElementById("my_modal_3").showModal()}>Login</span></button>
                <Login /></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
        </>
    )
}