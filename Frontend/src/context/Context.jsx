import React, { useEffect } from "react";
import { createContext,useState } from "react";
export const StoreContext=createContext(null);
import list from "./contextlist.json";
export default function StoreContextProvider(props){
const [cardItems,setcardItems]=useState({});
const addToCard=(itemId)=>{
    if(!cardItems[itemId]){
        setcardItems((prev)=>({...prev,[itemId]:1}));
    }
    else{
        setcardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
}
const removeFromCart=(itemId)=>{
    setcardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
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
    cardItems,setcardItems,addToCard,removeFromCart,getTotalAmount,TotalItem
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