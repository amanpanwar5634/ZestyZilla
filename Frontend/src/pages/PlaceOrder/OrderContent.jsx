import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../../context/Context";

export default function OrderContent() {
  const { getTotalAmount } = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Delivery Information Form */}
          <div className="w-full md:w-1/2  p-6 ">
            <form>
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
                      {...register("zip", { required: true })}
                    />
                    {errors.zip && <p className="text-red-600 mt-1">This field is required</p>}
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
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <p className="text-red-600 mt-1">This field is required</p>}
                </div>
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
            <div className="text-center">
              <button className="btn btn-primary px-6 py-2 rounded">Proceed to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
