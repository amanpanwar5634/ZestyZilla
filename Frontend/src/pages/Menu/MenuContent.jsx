import React from "react";
import menuList from "./menuList.json";
import CardMenu from "./CardMenu";
export default function MenuContent(){
    return (
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
  Welcome to our food haven! 
  <span className="text-pink-600">Where flavors meet joy :)</span>
</h1>
<p className="mt-12 font-bold">
  Craving something delicious? We've got you covered! 
  From wholesome meals to delightful treats, explore our menu crafted with care 
  and delivered with love. Satisfaction is just a click away!
</p>

        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3">
          {menuList.map((el)=>(<CardMenu key={el._id} item={el}/>))}
        </div>
        </div>
        </>
    )
}