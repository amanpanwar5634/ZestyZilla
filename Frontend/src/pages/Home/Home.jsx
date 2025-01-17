import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TastyPicks from "../../components/TastyPicks";
export default function Home(){
    return(<>
    <div>
    <Navbar/>
     <Header/>
     <TastyPicks/>
     <Footer/>
    </div>
    </>)
}