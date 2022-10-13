import React from "react";
import sofaIcon from "../assets/images/double-sofa-02.png";
import tableIcon from "../assets/images/table.jpg";
import sofaIcon2 from "../assets/images/counter-timer-img.png";
const Category = () => {
  return (
    <div className=" container mt-20 mb-4">
      <h1
        className=" text-left text-2xl text-gray-800 font-semibold uppercase 
         font-popins"
        
      >
        Shopping By Category
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-center my-6">
        <a
          href="/"
          className="  overflow-hidden rounded relative 
             group shadow bg-black bg-opacity-20 h-[60%]"
        >
          <img
            className=" w-full h-full   group-hover:bg-zinc-200 transition"
            src={sofaIcon}
            alt=""
          />
          <p
            className=" text-2xl text-primary font-semibold inset-0 flex items-center
                 justify-center absolute group-hover:hidden transition"
          >
            Sofa
          </p>
        </a>

        <a
          href="/"
          className="w-full overflow-hidden overflow-y-hidden rounded relative 
             group shadow bg-black bg-opacity-20 h-[60%]  "
        >
          <img
            className="w-full h-full  group-hover:bg-zinc-200  transition"
            src={tableIcon}
            alt=""
          />
          <p
            className=" text-2xl text-primary  font-semibold inset-0 flex items-center
                 justify-center absolute group-hover:hidden transition"
          >
            Table
          </p>
        </a>

        <a
          href="/"
          className="   overflow-hidden rounded relative 
             group shadow bg-black bg-opacity-20 h-[60%] "
        >
          <img
            className="w-full h-full   group-hover:bg-zinc-200  transition"
            src={sofaIcon2}
            alt=""
          />
          <p
            className=" text-2xl text-primary  font-semibold inset-0 flex items-center
                 justify-center absolute group-hover:hidden transition"
          >
            Sofa
          </p>
        </a>
      </div>
    </div>
  );
};

export default Category;
