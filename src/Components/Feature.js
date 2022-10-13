import React from "react";
import vanIcon from "../assets/images/delivery-van.svg";
const Feature = () => {
  return (
    <div className=" container mt-14 mb-4 text-center">
      <div className=" grid grid-cols-3 gap-4 justify-center mx-auto w-[80%]">
        <div className=" flex items-center gap-4 border-2 border-primary px-2 py-4 
        justify-center rounded">
          <img className=" h-10 w-10 object-contain" src={vanIcon} alt="" />
          <span>
            <h1 className=" text-xl">For Free Shipping</h1>
            <p className=" text-sm text-gray-700">Order Minimum $200</p>
          </span>
        </div>
        <div className=" flex items-center gap-4 border-2 border-primary px-2 py-3 
        justify-center rounded">
          <img className=" h-10 w-10 object-contain" src={vanIcon} alt="" />
          <span>
            <h1 className=" text-xl">For Free Shipping</h1>
            <p className=" text-sm text-gray-700">Order Minimum $200</p>
          </span>
        </div>
        <div className=" flex items-center gap-4 border-2 border-primary px-2 py-3
         justify-center rounded">
          <img className=" h-10 w-10 object-contain" src={vanIcon} alt="" />
          <span>
            <h1 className=" text-xl">For Free Shipping</h1>
            <p className=" text-sm text-gray-700">Order Minimum $200</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
