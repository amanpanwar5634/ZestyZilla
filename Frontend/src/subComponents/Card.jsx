import React from "react";
export default function Card({item}){
    return(<>
        <div className="mt-3 mb-3 p-3">
  <div className="card bg-base-100 w-80 dark:bg-slate-900 dark:text-white border-0">
    <div className="card-body items-center text-center">
      <h2 className="card-title mb-2">{item.name}</h2>  
    </div>
    <figure className="flex justify-center ">
      <img
        src={item.image}
        alt={item.name}
        className="w-48 h-48 rounded-full object-cover mb-2 hover:scale-105 duration-300"  // Smaller image size
      />
    </figure>
  </div>
</div>


        </>);
}