import React from "react";
import Navbar from "../components/Navbar";
import OrderContent from "./OrderContent";
import Footer from "../components/Footer";
export default function Orders({url}){
    return (
        <> 
        <Navbar/>
        <OrderContent url={url}/>
        <Footer/>

        </>
    )
}