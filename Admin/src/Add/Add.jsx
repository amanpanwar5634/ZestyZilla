import React from "react"; 
import Navbar from "../components/Navbar";
import AddContent from "./AddContent";
import Footer from "../../../Frontend/src/components/Footer";
export default function Add({url}){
    return (
        <>
        <Navbar/>
        <AddContent url={url}/>
        <Footer/>
        </>
    )
}