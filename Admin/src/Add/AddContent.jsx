import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default function AddContent({url}){
 
  const [image,setImage]=useState(false);
   const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
   })
   const onChangeHandler=(event)=>{
    setData(data=>({...data,[event.target.name]:event.target.value}));
   }
  const Submit = async(event) => {
    event.preventDefault();
    // Create a FormData object
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category",data.category);
   formData.append("image",image);// Access the name of the first file
      let res=await axios.post(`${url}/food/add`,formData);
      if(res.data.status){
        toast.success(res.data.message);
        setData({
          name:"",
          description:"",
          price:"",
          category:"Salad",
        })
        setImage(false);
      }
      else{toast.error(res.data.message);
      }
  };
 
    return (
        <>
        <div className="max-w-screen-2xl container md:px-28 p-4 mx-auto">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
      Add Your Favorite Food Items! 
      <span className="text-green-600"> Share the joy of flavors :)</span>
    </h1>
    <p className="mt-6 font-semibold">
      Create a culinary masterpiece! Fill in the details below to add delicious food items 
      to our menu. Your creations will bring joy to countless food lovers.
    </p>
        {/*form div*/} 
        <div className="w-5/6 m-auto p-6 ">
            <form onSubmit={Submit}>
              <div className="text-center mb-4">
                <h1 className="font-bold text-4xl">Food Information</h1>
              </div>
              <hr className="mb-6" />
              {/* Form Fields */}
              <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block mb-2 font-medium">Image</label>
                  <input onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder="Enter image"
                  name="image" className="w-full p-2 border border-gray-300 rounded h-30"
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 font-medium">Product Name</label>
                  <input onChange={onChangeHandler} value={data.name} name="name"
                    type="text"
                    placeholder="Enter Product name"
                    className="w-full p-2 border border-gray-300 rounded h-30" required
                  />
                </div>
                 </div>
                <div>
                  <label className="block mb-2 font-medium">Description</label>
                  <textarea type="text" onChange={onChangeHandler} value={data.description} name="description"
                    placeholder="Enter Street Address"
                    className="w-full p-2 border border-gray-300 rounded h-30" required
                 ></textarea>
                   
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label className="block mb-2 font-medium">Product Price</label>
                    <input onChange={onChangeHandler} value={data.price} name="price"
                      type="Number" 
                      placeholder="Enter Price"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                     
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 font-medium">category</label>
                     <select onChange={onChangeHandler} name="category" 
                      className="w-full p-2 border border-gray-300 rounded" >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                     </select>
                     
                  </div>
                </div>
                <div>
                <button type="submit" className="btn btn-primary btn-wide">Add</button>
              </div>
              </div>
             
            </form>
         </div>
         </div> 
        </div> 
        </>
    )
}