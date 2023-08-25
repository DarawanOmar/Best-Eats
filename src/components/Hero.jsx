import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import CustomModel from './CustomModel'
import { useState } from 'react'

const Hero = () => {
  const[openMode,setOpenMode] = useState(false)

  useEffect(()=>{
    Aos.init()
  },[])
  
  return (
    <div>
      <div className= 'max-w-6xl mx-auto p-4 font-serif grid grid-cols-1 md:grid-cols-2'>
          {/* Text Large Size */}
          <div className='hidden md:block'>
            <h1 className='text-3xl md:text-4xl font-bold italic text-center mb-3'> Welcome To Best <span className='text-orange-500'>Eat</span></h1>
            <div className='text-center mt-5 hidden md:block' data-aos="fade-left">
              <h2 className='my-10 capitalize text-lg'> you can order food and animals and amount your location for fast delivery and
                add food and animals to favoraite and aslo rate food & animals.
              </h2>
             <h3> You Can Order Now Click The Button Below : </h3>
              <div className='flex mb-10 justify-center items-center'>
                <Link to='/food' className='btn-order md:btn-hover py-2 mt-4'>Order Food Now </Link >
                <Link to='/animels' className='btn-order md:btn-hover py-2 mt-4'>Order Animals Now </Link >
              </div>
            </div>
          </div>
          {/* Image */}
          <h1 className='md:hidden text-3xl md:text-4xl font-bold italic text-center mb-3'> Welcome To Best <span className='text-orange-500'>Eat</span></h1>
        <div className='max-h-[500px] relative ' data-aos='fade-right'>
            <div className='absolute  bg-black/50 w-full h-full text-gray-200 rounded-xl max-h-[500px] flex flex-col justify-center'>
              <h1 className='px-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
              <h1 className='px-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Delivery <span className='text-orange-500'>Foods</span></h1>
            </div>
            <img className='max-h-[500px] rounded-xl  object-cover w-full' src="https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=740&t=st=1689590307~exp=1689590907~hmac=5a8ab45368ed3a6f20d3d0b2a377438c6450cd0d1a198b8ae5cf233a2e3ea07d" alt="Hero" />
        </div>
        {/* Text Mobile Size */}
        <div className=' mt-5 flex text-center flex-col md:hidden'>
          <p className='capitalize text-center'> you can order food and animals and amount  location for fast delivery and add food and animals to favoraite and aslo rate food & animals.</p>
          <h3> You Can Order Now Click The Button Below : </h3>
          <div className='flex mb-10 justify-center items-center'>
            <Link to='/food' className='btn-order md:btn-hover mt-4 text-sm py-4'>Order Food Now </Link >
            <Link to='/animels' className='btn-order md:btn-hover mt-4 text-sm py-4'>Order Animals Now </Link >
            <button onClick={()=>setOpenMode(prev => !prev)} className='btn-order'>Model</button>
          </div>
        </div>
      </div>
        {openMode && <CustomModel title={"Best"} text={"Are You Sure Want TO Delete ?"} namePage={"Login"} to={"/login"} closeX={"x"} closeFunctionality={()=>setOpenMode(prev => !prev)}/>}
    </div>
  )
}

export default Hero