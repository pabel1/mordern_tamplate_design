import React from 'react'
import bannerImg from '../assets/images/banner-bg.jpg'
const Banner = () => {
  return (
    <div className=' bg-cover bg-no-repeat bg-center py-[6%] ' style={{backgroundImage:`url(${bannerImg})`}}>
        <div className="container text-left  space-y-6">
            <h1 className=' text-6xl text-gray-900 font-semibold mb-3 font-popins'>Best Collection for <br /> Home Decoration</h1>
            <p className=' text-justify text-slate-700'>Ut erat sanctus et tempor takimata voluptua. Ea no eirmod amet sit sit eirmod <br />
             dolore diam, lorem stet rebum diam lorem lorem sed. Voluptua at labore <br />
              rebum diam et magna. </p>
              <button className=' bg-primary  text-center px-5 py-2  rounded
               font-semibold text-white border-2 border-primary hover:bg-transparent hover:text-primary transition'>Shop Now</button>
        </div>

    </div>
  )
}

export default Banner