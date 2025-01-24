import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function OrderContent({url}){
    let [orders,setorders]=useState([]);
    const fetchOrders=async()=>{
        const res=await axios.get(`${url}/order/list`);
        if(res.data.status){
            console.log(res.data.data);
            setorders(res.data.data);
        }
        else{
            toast.error(res.data.message);
        }
    }
    const statusHandler=async(event,orderId)=>{
       try {const res=await axios.post(url+"/order/status",{orderId,status:event.target.value})
        console.log(res.data.updatedOrder);
        if(res.data.status){
            console.log(res.data.status);
            await fetchOrders();
        }}
        catch(err){
          console.log("error->",err);
        }
    }
    useEffect(()=>{
        fetchOrders();
       
    },[]);
    return (
        <>
        <div className="container mx-auto px-4 md:px-20 min-h-screen ">
        <header className="text-center mt-20">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Welcome to Order Page!{" "} 
                </h1>
            </header>
        {/* Orders Section */}
        <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Your Orders!</h2>
        {orders ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order, index) => (
         <div key={order.id || index} 
        className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl shadow-lg p-6 flex flex-col space-y-4 transition-transform duration-300 hover:scale-105">
         <span className="font-bold text-2xl mx-auto">Order:{index+1}</span>
         <span className=" text-xl mx-auto">By~{order.address.name}</span>
         <hr className="text-yellow-700"></hr>
        <p className="text-black-700 font-bold">  
             {order.items.map((item, i) => `${item.name} x${item.quantity}${ i === order.items.length - 1 ? "" : ", " }` ).join("")}
         </p>
        <p className="text-gray-700"> 
        <span className="text-green-600 font-bold"> {order.address.street+","} </span>
      </p>
      <p className="text-gray-700">
      <span className="text-green-600 font-bold">{order.address.city+","+order.address.state+","+order.address.zipcode}</span>
      </p>
      <p className="text-gray-700">
      <span className="text-green-600 font-bold">{order.address.phonenumber}</span>
      </p>
      <p className="text-gray-700 flex justify-between">
      <span className="text-green-600 font-bold">Items:{order.items.length}</span>
      <span className="text-green-600 font-bold">${order.amount}</span>
      </p>
      <select className="border font-bold text-center text-xl" 
      onChange={(event)=>{statusHandler(event,order._id)}} value={order.status}>
        <option className="text-black-400">Food Proccessing</option>
        <option className="text-yellow-400">Out For Delivery</option>
        <option className="text-green-400">Delivered</option>
      </select>
    </div> ))}
    </div>
    ) : (
     <p className="text-center text-gray-500">
     No orders found. Start exploring our menu and place your first order!
     </p>
     )}
   </section>
   </div>
        </>

    )
}