import React, { useContext } from "react";
import CardMenu from "../Menu/CardMenu";
import list from "./carList.json";
import { StoreContext } from "../../context/Context";
import { Link } from "react-router-dom";
export default function CartContent(){
    console.log("list->",list);
    const {cardItems,removeFromCart,getTotalAmount}=useContext(StoreContext);
    console.log("cardItems",cardItems);
    return(
        <>
        <div className="max-w-screen-xl container mx-auto md:px-20 px-4">
            <div className="mt-20 justify-between items-center text-center">
             <div className="grid  grid-cols-6 gap-1 border border-gray-300">
             <div className="font-bold bg-gray-200 p-2 text-center">Title</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Item</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Price</div>
  <div className="font-bold bg-gray-200 p-2 text-center">No. of Items</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Total Price</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Remove</div>
  
  {list.map((el)=>{
    if(cardItems[el._id]>0){
        return(
            <>
            
                <div className="bg-white p-2 text-center m-auto text-xl"><img src={el.image}></img></div>
                <div className="bg-white p-2 text-center m-auto text-xl">{el.name}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">${el.price}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">{cardItems[el._id]}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">${el.price * cardItems[el._id]}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">
                    <button onClick={()=>removeFromCart(el._id)} className="btn btn-primary text-lg">X</button></div>
            
            </>
        )
    }
  })}
             </div>
             <div className="flex  flex-col md:flex-row mt-4">
            
               <div className="flex-col space-y-4 md:w-1/2 items-center p-4 border shadow"> 
               <div className="flex justify-between justify-around"><h1 className="text-xl font-bold ">Card Totals</h1></div>
               <div className="flex justify-between outline-black"><h1>Subtotal</h1> <h1>${getTotalAmount()}</h1></div>
               <div className="flex justify-between">
                <h2>Delivery Charge</h2>
                <h2>${getTotalAmount()==0?0:2}</h2>
              </div>
              <div className="flex justify-between text-red-600 font-bold">
              <h2>Total Amount</h2>
              <h2>${getTotalAmount() ==0?0:getTotalAmount() + 2}</h2>
            </div>
               <div className="flex justify-around">
                <Link to='/order'>
               <button className="btn btn-primary">Proceed to Checkout</button>
               </Link></div>
               </div>

               <div className="flex-col space-y-4 md:w-1/2 items-center p-4 "> 
               <div  className="flex justify-between justify-around"><h1>If you have a promo code.Enter it here!</h1></div>
               <div  className="flex justify-between justify-around"> 
               <div className="join ">
              <input className="input input-bordered join-item" placeholder="promo code" />
              <button className="btn join-item rounded-r-full">Submit</button>
              </div>
               </div>
               </div>
             </div>
            </div>
        </div>
        </>
    )
}