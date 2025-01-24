import React, { useEffect, useState } from "react";
import axios from "axios";
 import toast from "react-hot-toast";
export default function ListContent({url}){
   
    const [list,setlist]=useState([]);
const fetchList=async()=>{
    const res=await axios.get(`${url}/food/list`);
    if(res.data.success){
        console.log(res.data.data);
        setlist(res.data.data);
    }
    else{ toast.error(res.data.message);
        console.log("error->",res.data.message);
    }
}
const removeFood=async(foodid)=>{
    console.log(foodid);
    const res=await axios.delete(`${url}/food/remove/${foodid}`);
    await fetchList();
    if(res.data.success){
        toast.success(res.data.message);
        console.log("the removed food item",res.data.data);
    }
    else{
        console.log("error->",res.data.message);
        toast.error(res.data.message);
    }
}
useEffect(()=>{
  fetchList();
},[])
    return (
        <>
        <div className="max-w-screen-xl container mx-auto md:px-20 px-4">
            <div className="mt-20 justify-between items-center text-center">
             <div className="grid  grid-cols-5 gap-1 border border-gray-300">
             <div className="font-bold bg-gray-200 p-2 text-center">Image</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Name</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Category</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Price</div>
  <div className="font-bold bg-gray-200 p-2 text-center">Remove</div>
    {list.map((el,index)=>{
        return (
            <>
              <div className="bg-white p-2 text-center m-auto text-xl"><img src={`${url}/images/`+el.image}></img></div>
                <div className="bg-white p-2 text-center m-auto text-xl">{el.name}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">{el.category}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">${el.price}</div>
                <div className="bg-white p-2 text-center m-auto text-xl">
                    <button onClick={()=>removeFood(el._id)} className="btn btn-primary text-lg">X</button></div>

            </>
        )
     })
 }  
     </div>
     </div>
     </div>
        </>
    )
}