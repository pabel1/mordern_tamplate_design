import React from "react";
import { BiMenu } from "react-icons/bi";
import sofaImg from "../assets/images/sofa.svg";
const LowerHeader = () => {
  return (
    <div className=" bg-bgnav text-white">
      <div className="container flex items-center gap-8 text-lg font-medium ">
        <div className=" bg-primary p-3 relative group">
          <a className=" flex items-center gap-3" href="/">
            <span>
              <BiMenu className=" text-2xl" />
            </span>{" "}
            All Categories
          </a>
          <div
            className=" bg-white absolute left-0 top-full py-3 shadow-md w-full  
          p-2 text-center hidden group-hover:block transition"
          >
            <a className=" flex items-center justify-evenly  border-b pb-2 hover:bg-gray-100
             transition w-full" href="/">
              <img className=" h-8 w-8 object-contain" src={sofaImg} alt="" />
              <span className=" text-dimWhite">Sofa</span>
            </a>
          </div>
        </div>
        <div className=" flex items-center justify-between flex-grow">
          <div className=" flex items-center gap-5 ">
            <a className=" hover:text-primary transition" href="/">Home</a>

            <a className=" hover:text-primary transition" href="/">Shop</a>

            <a className=" hover:text-primary transition" href="/">About Us</a>

            <a className=" hover:text-primary transition" href="/">Contact Us</a>
          </div>

          <button>
            <a className=" hover:text-primary transition" href="/">Login</a>/<a className=" hover:text-primary transition" href="/">Registration</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
