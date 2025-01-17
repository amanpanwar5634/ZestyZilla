import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/Menu/Menu";
import Signup from "./components/Signup";
export default function App() {
  return (<>
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}