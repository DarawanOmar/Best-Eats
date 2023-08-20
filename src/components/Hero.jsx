import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  
  return (
    <div className= 'max-w-6xl mx-auto p-4 font-serif'>

      <div className='max-h-[500px] relative ' data-aos='fade-right'>
        
          <div className='absolute  bg-black/50 w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center'>
            <h1 className='px-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='px-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Delivery <span className='text-orange-500'>Foods</span></h1>
          </div>
          <img className='max-h-[500px] object-cover w-full' src="https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=740&t=st=1689590307~exp=1689590907~hmac=5a8ab45368ed3a6f20d3d0b2a377438c6450cd0d1a198b8ae5cf233a2e3ea07d" alt="" />

      </div>
    </div>
  )
}

export default Hero