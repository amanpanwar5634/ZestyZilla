import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { StoreContext } from "../context/Context";
import toast from "react-hot-toast";
export default function Navbar(){
  const {cardItems,getTotalAmount,TotalItem,token,settoken}=useContext(StoreContext);
  let [sticky,setsticky]=useState(false);
  const navigate=useNavigate();
  //to logout from the site  but problem with this is when user is Login and we refresh it set to logout automaticallyy for this ->context
  const Logout=()=>{
    localStorage.removeItem("token");
    settoken("");
    toast.success("Logout Successfull");
    navigate("/");
  }
  useEffect(()=>{
   const handleScroll=()=>{
   if(window.scrollY>0){setsticky(true)}
   else{
    setsticky(false);
   }
   };
   window.addEventListener("scroll",handleScroll);
   return ()=>{window.removeEventListener("scroll",handleScroll);}
  },[]);
return(
    <>
    <div className={`max-w-screeen-2xl container mx-auto md-px-20 px-4 fixed left-0 top-0 right-0 z-50 dark:bg-slate-700 dark:text-white
    ${sticky && "sticky-navbar bg-base-200 shadow-md duration-300  dark:bg-slate-900 dark:text-white transition-all ease-in-out" }`}>
    <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a>ContactUs</a></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">ZestyZilla</a>
  </div>
  <div className="navbar-end space-x-3">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li> 
      <li><a href="/menu">Menu</a></li>
        <li><a>ContactUs</a></li>
    </ul>
  </div >
   
<div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{TotalItem()}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{TotalItem()}Items</span>
          <span className="text-info">${getTotalAmount()}</span>
          <div className="card-actions">
           <Link to="/cart"><button className="btn btn-primary btn-block">View cart</button></Link> 
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*to switch between login and logout*/}
  {!token?<div className="flex flex-row items-center"><a className="btn  bg-black text-white rounded-md px-5 py-1 hover:bg-slate-800 cursor-pointer"
   onClick={()=>document.getElementById('my_modal_3').showModal()}   
    >Log In</a>
    <Login/></div>:
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><Link to="/order"><a>Place Order</a></Link></li>
        <li><a onClick={Logout}>Logout</a></li>
        <li><Link to="/myorder"><a>My Order</a></Link></li>
      </ul>
    </div>
    }
  </div>
  </div>
    </div>
    
    </>
)
}