import React from "react";
import { useState,useEffect } from "react";
export default function Navbar(){
    let [sticky,setsticky]=useState(false);
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
   return (
    <>
    <div  className={`max-w-screeen-2xl container mx-auto md-px-20 px-4 fixed left-0 top-0 right-0 z-50 dark:bg-slate-700 dark:text-white
    ${sticky && "sticky-navbar bg-base-200 shadow-md duration-300  dark:bg-slate-900 dark:text-white transition-all ease-in-out" }`}>
    <div className="navbar bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
        <li><a href="/add">Add</a></li>
        <li><a href="/orders">Total Orders</a></li>
        <li><a href="/list">List</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-4xl font-bold">Admin Panel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-bold">
    <li><a href="/add">Add</a></li>
        <li><a href="/orders">Toal Orders</a></li>
        <li><a href="/list">List</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  </div>
</div>
    </div>
    </>
   )
}