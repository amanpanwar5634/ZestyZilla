import React from "react";
export default function Adminhome(){
   return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
  <div className="mt-20 items-center justify-center text-center">
    <div
      className="hero h-[85vh]"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1679524181408-0b872058bcfe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFkbWlufGVufDB8fDB8fHww)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Admin Panel</h1>
          <p className="mb-5">
            Manage all aspects of your application seamlessly. Monitor activities, review reports, and
            stay updated in real time.
          </p>
        
        </div>
      </div>
    </div>
  </div>
</div>

    </>
   )
}