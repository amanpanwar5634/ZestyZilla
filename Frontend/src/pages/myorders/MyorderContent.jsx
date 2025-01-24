import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/Context";
import axios from "axios";

export default function MyorderContent() {
    const { url, token } = useContext(StoreContext);
    const [orders, setOrders] = useState([]);

const fetchOrders = async () => {
    try {const response = await axios.post( `${url}/order/userorders`, {},{ headers: { token } } );
     if (response.data.status) {setOrders(response.data.data); } 
     else {  console.error("Error:", response.data.message); }
    } 
    catch (error) { console.error("Error fetching orders:", error.message);}
    };

    useEffect(() => {
        if (token) fetchOrders();
    }, [token]);

    return (
        <div className="container mx-auto px-4 md:px-20 min-h-screen">
         {/* Welcome Section */}
         <header className="text-center mt-16">
            <h1 className="text-2xl md:text-4xl font-bold">
             Welcome to Order Page!{" "}
            <span className="text-pink-600">Where flavors meet joy :)</span>
            </h1>  
         </header>

            {/* Orders Section */}
         <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Your Orders! </h2>
         {orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order, index) => (
             <div key={order.id || index} className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 
             border-blue-300 rounded-xl shadow-lg p-6 flex flex-col space-y-4 transition-transform duration-300 hover:scale-105" >
             <h3 className="text-lg font-bold text-blue-700"> Order{index+1} </h3>
             <p className="text-gray-700"><strong>Items:</strong>{" "}
             {order.items.map((item, i) =>`${item.name} x${item.quantity}${i === order.items.length - 1 ? "" : ", "}`).join("")}
             </p>
            <p className="text-gray-700"><strong>Total Price:</strong>{" "}<span className="text-green-600 font-bold">  ${order.amount} </span>
             </p>
             <p className="text-gray-700"> <strong>Status:</strong>{" "}
             <span className={`px-3 py-1 rounded-full text-white font-bold ${
               order.status === "Delivered" ? "bg-green-500" : order.status === "Out For Delivery" ? "bg-yellow-500" : "bg-red-500" }`}
             >
             {order.status}
            </span>
            </p>
            <button className="btn btn-primary" onClick={fetchOrders}>Track Order</button>
             </div> ))}
            </div>
                ) : (
           <p className="text-center text-gray-500"> No orders found. Start exploring our menu and place your first order! </p>
             )}
            </section>
        </div>
    );
}
