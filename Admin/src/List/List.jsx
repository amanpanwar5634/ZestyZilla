import React from "react";
import Navbar from "../components/Navbar";
import ListContent from "./ListContent";
import Footer from "../components/Footer";
export default function List({url}){
    return (
        <>
         <Navbar/>
         <ListContent url={url}/>
         <Footer/>
        </>
    )
}