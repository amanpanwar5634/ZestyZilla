import React, { useContext,useRef } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../../context/Context";
import toast from "react-hot-toast";
import axios from "axios";
export default function OrderContent() {
 
  const { getTotalAmount,url,token,list,cardItems} = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit=async(data)=>{
    console.log("data from the form after implement ref->",data);
    const orderInfo={
    name:data.name,
    email:data.email,
    city:data.city,
    state:data.state,
    street:data.street,
    zipcode:data.zipcode,
    country:data.country,
    phonenumber:data.phonenumber,
    }
    const orderItems=[]; //we need order detail so we add the iteminfo with  key quantity from the carditemsand make it orderItems array
     list.map((item)=>{  //we find the the no. of item from the cardItems 
        if(cardItems[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"]=cardItems[item._id];
          orderItems.push(itemInfo);
        }
        console.log(orderItems);
     })
     //now we have to pass the order data to the route
     let orderData={
      address:orderInfo, //it store the user info
      items:orderItems,   //it sore the items details that the user order
      amount:getTotalAmount()+2,
     }
     let res=await axios.post(url+'/order/place',orderData,{headers:{token}});
     if(res.data.success){
      const {session_url}=res.data;
      window.location.replace(session_url);
      toast.success("process complete");
     }
     else{
      toast.error("error,Ensure you are Logged In!");
     }
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Delivery Information Form */}
          <div className="w-full md:w-1/2  p-6 ">
          <form onSubmit={handleSubmit(Submit)}>
              <div className="text-center mb-4">
                <h1 className="font-bold text-4xl">Delivery Information</h1>
              </div>
              <hr className="mb-6" />
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="text-red-600 mt-1">This field is required</p>}
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="text-red-600 mt-1">This field is required</p>}
                </div>

                <div>
                  <label className="block mb-2 font-medium">Street</label>
                  <input
                    type="text"
                    placeholder="Enter Street Address"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register("street", { required: true })}
                  />
                  {errors.street && <p className="text-red-600 mt-1">This field is required</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label className="block mb-2 font-medium">City</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="w-full p-2 border border-gray-300 rounded"
                      {...register("city", { required: true })}
                    />
                    {errors.city && <p className="text-red-600 mt-1">This field is required</p>}
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 font-medium">State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="w-full p-2 border border-gray-300 rounded"
                      {...register("state", { required: true })}
                    />
                    {errors.state && <p className="text-red-600 mt-1">This field is required</p>}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label className="block mb-2 font-medium">Zip Code</label>
                    <input
                      type="number"
                      placeholder="Enter Zip Code"
                      className="w-full p-2 border border-gray-300 rounded"
                      {...register("zipcode", { required: true })}
                    />
                    {errors.zipcode && <p className="text-red-600 mt-1">This field is required</p>}
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 font-medium">Country</label>
                    <input
                      type="text"
                      placeholder="Enter Country"
                      className="w-full p-2 border border-gray-300 rounded"
                      {...register("country", { required: true })}
                    />
                    {errors.country && <p className="text-red-600 mt-1">This field is required</p>}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register("phonenumber", { required: true })}
                  />
                  {errors.phonenumber && <p className="text-red-600 mt-1">This field is required</p>}
                </div>
              </div>
              <div className="text-center">
              <button className="btn btn-primary px-6 py-2 rounded">Proceed to Payment</button>
            </div>
             </form>
          </div>  
         
          {/* Card Totals */}
          <div className="w-full md:w-1/2 space-y-6 p-6 ">
            <div>
              <h1 className="text-3xl font-bold text-center">Card Totals</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>${getTotalAmount()}</h2>
            </div>
              <div className="flex justify-between">
                <h2>Delivery Charge</h2>
                <h2>${getTotalAmount()==0?0:2}</h2>
              </div>
            <div className="flex justify-between text-red-600 font-bold">
              <h2>Total Amount</h2>
              <h2>${getTotalAmount() ==0?0:getTotalAmount() + 2}</h2>
            </div>
           
          </div>
        
        </div>
      </div>
    </div>
  );
}
