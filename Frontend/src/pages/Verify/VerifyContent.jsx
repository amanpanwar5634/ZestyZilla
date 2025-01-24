import React, { useContext, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { StoreContext } from "../../context/Context";
 import toast from "react-hot-toast";
import axios from "axios";
export default function VerifyContent(){
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const verifyPayment=async()=>{
        const res=await axios.post(url+"/order/verify/",{success,orderId})
        if(res.data.success){
            navigate("/myorder");
        }
        else{
            navigate("/");
            toast.error(res.data.message);
        }
    }
    useEffect(()=>{
   verifyPayment();
    },[])
    return (
        <>
        <div> 
            
          
        </div>
        </>
    )
}