import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
export default function Signup(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    return (
        <>
        <div>
        <div>
      <div id="my_modal_2" className="h-screen items-center flex justify-center">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
            </Link>
            <h1 className="font-bold text-4xl text-center">Signup</h1>
            <div className="mt-2 px-4 py-1">
              <h3 className="mb-1">Name</h3>
              <input type="text" placeholder="Enter name" className="w-80 mt-3 outline-none bg-white-300"
                {...register("fullname", { required: true })} ></input>
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