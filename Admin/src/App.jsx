import { Route,Routes } from "react-router-dom";
import Home from "./Home/Home";
import Add from "./Add/Add";
import List from "./List/List";
import Orders from "./Orders/Orders";
import {Toaster} from "react-hot-toast";
export default function App() {
  const url="https://zestyzilla-backend.onrender.com";
  return (
    <>
     <Routes>
      <Route path="/" element={<Home url={url}/>}></Route>
      <Route path="/add" element={<Add url={url}/>}></Route>
      <Route path="/list" element={<List url={url}/>}></Route>
      <Route path="/orders" element={<Orders url={url}/>}></Route>
     </Routes>
     <Toaster/>
    </>
    
  )
}
