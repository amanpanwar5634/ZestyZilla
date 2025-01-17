import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function Login(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return(<>
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
 