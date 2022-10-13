import React from "react";
import { BiSearchAlt2, BiHeart,BiCart,BiUser } from "react-icons/bi";
const Header = () => {
  return (
    <div className=" py-4 shadow-sm bg-white  ">
      <div className=" container flex items-center justify-between">
        <h1 className=" text-primary text-xl font-semibold">Logo</h1>

        <div className="flex rounded-md border-2 border-primary">
          <div className=" flex items-center bg-transparent w-full text-lg px-2 text-gray-500">
            <BiSearchAlt2 className=" text-lg" />
            <input
              className=" outline-none px-3 py-1 w-full border-none "
              type="text"
              placeholder="search"
            />
          </div>
          <button className=" bg-primary px-4 py-1  text-white font-semibold">
            Search
          </button>
        </div>
        <div className="flex items-center gap-5   ">
          <a href="/" className=" text-center flex flex-col items-center justify-end relative">
            <span className="">
              <BiHeart className=" text-2xl" />
            </span>{" "}
            <span className=" text-sm font-medium text-dimWhite">Wish List</span>
            <span className=" absolute -top-1 right-1 p-1.5 text-white h-5 w-5 text-sm flex items-center bg-primary rounded-full ">2</span>
          </a>
          <a href="/" className=" text-center flex flex-col items-center justify-end relative">
            <span className="">
              <BiCart className=" text-3xl" />
            </span>{" "}
            <span className=" text-sm font-medium text-dimWhite">Cart</span>
            <span className=" absolute -top-1 p-1.5 text-white h-5 w-5 text-sm flex items-center bg-primary rounded-full ">2</span>
          </a>
          <a href="/" className=" text-center flex flex-col items-center justify-end relative">
            <span className="">
              <BiUser className=" text-2xl" />
            </span>{" "}
            <span className=" text-sm font-medium text-dimWhite">Account</span>
            {/* <span className=" absolute -top-1 right-1 p-1.5 text-white h-5 w-5 text-sm flex items-center bg-primary rounded-full ">2</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
