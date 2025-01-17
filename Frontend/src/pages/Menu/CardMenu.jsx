import React, { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/Context";
export default function CardMenu({item}){
   console.log("itemid->",item._id);
  const { cardItems,addToCard,removeFromCart}=useContext(StoreContext);
  console.log("cardItems->",cardItems);
    return (
        <>
    <div className="mt-3 mb-3 p-3">
    <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white border">
  <figure>
    <img
      src={item.image}
      alt="food" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between items-center ">
      <div className="badge badge-outline text-xl p-3">${item.price}</div>
      <div> 
      {!cardItems[item._id]?<button onClick={()=>addToCard(item._id)} className="btn btn-primary">+1</button>:
      <div className="flex justify-around space-x-4 items-center">
        <button onClick={()=>removeFromCart(item._id)} className="btn btn-danger">-1</button>
        <p className="text-xl text-red-500">{cardItems[item._id]}</p>
        <button onClick={()=>addToCard(item._id)} className="btn btn-primary">+1</button>
      </div>}
      </div>
    </div>
  </div>
</div>
    </div>
        </>
    )}