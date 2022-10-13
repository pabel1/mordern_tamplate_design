import React from 'react'
import cardImg from '../assets/images/single-sofa-01.jpg'
const Product = () => {
  return (
    <div className=' container my-3'>
        <h1 className=" text-left text-2xl text-gray-800 font-semibold uppercase 
         font-popins">New Arrival</h1>
        <div className=' grid grid-cols-4'>
            <div className=' w-full shadow-md bg-white my-4 flex flex-col justify-around'>
                <div className=' relative bg-gray-300 w-full h-[50%]' >
                    <img className=' w-full h-full ' src={cardImg} alt="" />
                </div>
                <div className=' px-5  w-full last:px-1'>
                    <h2>Sofa Chair</h2>
                    <p>$50.00 <span> $500.00</span></p>
                    <p>  <span>(150)</span> </p>
                    <button className=' w-full p-2 text-white rounded text-lg bg-primary border border-primary 
                     hover:bg-transparent hover:text-primary transition'>Add To Cart
                    </button>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Product