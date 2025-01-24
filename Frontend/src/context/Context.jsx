import React, { useEffect } from "react";
import { createContext,useState } from "react";
export const StoreContext=createContext(null);
import list from "./contextlist.json";
import axios from "axios";
export default function StoreContextProvider(props){
    const url="https://zestyzilla-backend.onrender.com";
    const [token,settoken]=useState("");
const [cardItems,setcardItems]=useState({});
//concept of fetching alll food items
const [list,setlist]=useState([]);
  const fetchData=async()=>{
    try{const res=await axios.get(url+"/food/list");
    if(res.data.success){
         setlist(res.data.data);
    }
    else{
      console.log("error->",err);
    }}
    catch(err){
      console.log("eror->",err);
    }
  }
useEffect(()=>{
    async function LoadData(){
        await fetchData();
        if(localStorage.getItem("token")){  
            settoken(localStorage.getItem("token")); //we use this such that after relod token don't get vanish
            await loadCartData(localStorage.getItem("token"));
        }
    }LoadData();
    
},[])
//
const addToCard=async(itemId)=>{    //cardItems is the object which store the key as the itemid and values as the count of that item id
    if(!cardItems[itemId]){
        setcardItems((prev)=>({...prev,[itemId]:1}));
    }
    else{
        setcardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    //add in backened also
    if(token){
        await axios.post(url+"/cart/add",{itemId},{headers:{token}});
    }
}
const removeFromCart=async(itemId)=>{
    setcardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    //remove in backened also 
    if(token){
        await axios.post(url+"/cart/remove",{itemId},{headers:{token}});
    }
}
//in refresh the menu page the updataion on increament and decreament get vanished so for that we fetch the food items from backened
const loadCartData=async(token)=>{   //we want to show the load data every time when render so we use it in useEffect
    const res=await axios.get(url+"/cart/get",{headers:{token}});
    setcardItems(res.data.cartData);
}
const TotalItem=()=>{               
    let totalItem=0;
     for(const item in cardItems){ 
        if(cardItems[item]>0){
            totalItem+=cardItems[item]; 
        }
     }
     return totalItem;
}
const getTotalAmount=()=>{
    let totalAmount=0;
     for(const item in cardItems){
        if(cardItems[item]>0){
            let itemInfo=list.find((el)=>el._id===item);
            totalAmount+=itemInfo.price * cardItems[item];
        }
     }
     return totalAmount;
}
const ContextValue={
    cardItems,setcardItems,addToCard,removeFromCart,getTotalAmount,TotalItem,token,settoken,url,list,setlist
}
useEffect(()=>{
    console.log(cardItems);
})
return(
    <>
    <StoreContext.Provider value={ContextValue}>
    {props.children}
    </StoreContext.Provider>
    </>
)
}
