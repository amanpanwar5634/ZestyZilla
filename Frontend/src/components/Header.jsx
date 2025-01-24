import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/Context";
import { Link } from "react-router-dom";
export default function Header(){
  let {token,settoken}=useContext(StoreContext);
    return (
        <>
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-20 items-center justify-center text-center">
              <div
                className="hero h-[75vh]"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Zesty Zilla</h1>
                    <p className="mb-5">
                      Enjoy delicious meals delivered to your doorsteps in minutes. Choose from a wide
                      variety of cuisines and get your food hot and fresh.
                    </p>
                    <Link to={token ? "/myorder" : "/signup"}><button className="btn btn-primary">Order Now</button></Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      
}