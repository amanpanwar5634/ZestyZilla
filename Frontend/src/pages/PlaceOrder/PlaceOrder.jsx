import React from "react";
import Navbar from "../../components/Navbar";
import OrderContent from "./OrderContent";
import Footer from "../../components/Footer";
export default function PlaceOrder(){
    return(<>
    <div>
        <Navbar/>
        <OrderContent/>
        <Footer/>

        
    </div>
    </>)
}