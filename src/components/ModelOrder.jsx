import React, { useState } from 'react'
import {BsFillSendCheckFill} from 'react-icons/bs'
import {FaHourglassEnd} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {MdRestaurant} from 'react-icons/md'

const ModelOrder = ({setOpenDailogBox}) => {
    
    const darkValue = useSelector((state)=>state.dark.isDark);
    const[successBox, setSuccessBox] = useState(false)
    const handleSuccessBox = () => {
        setSuccessBox(prev => !prev)
    }
  return ( 
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif'>

            {/* Success Order Box */}
            <div className={successBox ? " flex flex-col italic" : "hidden"}>
                <div className={darkValue ? 'py-2 px-2 bg-black text-white rounded-md' : 'py-2 px-2 bg-white  rounded-md'}>
                    <div className="flex justify-between items-center">
                        <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                        <button onClick={() => {
                            handleSuccessBox()
                            setOpenDailogBox(false)
                            }} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                    </div>
                    <div className='flex flex-col p-4'>
                        <div className='flex items-center  space-x-3'>
                            <h1>Your Order Successfully sent</h1>
                            <span className='text-green-500'><BsFillSendCheckFill/></span>
                        </div>
                        <p className='flex items-center'> please wait until your delivery coming <span className=''><FaHourglassEnd/></span></p>
                    </div>
                    <div className="text-right pb-2">
                        <Link to='/' className='btn-order btn-hover'>Go Back To Home</Link>
                    </div>
                </div>
            </div>

            {/* Dailog Box */}
            <div className={successBox ? "hidden" : " flex flex-col italic"}>
                <div className={darkValue ? 'px-2 rounded-md bg-black text-white' : 'px-2 rounded-md bg-white'}>
                    <div className="flex justify-between items-center">
                        <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                        <button  onClick={() => {
                            handleSuccessBox()
                            setOpenDailogBox(false)
                            }} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                    </div>
                    <div className='flex flex-col p-4'>
                        <div className='flex items-center  space-x-3'>
                            <h1  className='text-lg px-6 '>Are You Sure Want Order ? </h1>
                        </div>
                    <div className="text-center pt-3">
                        <div>
                            <button onClick={handleSuccessBox} className='btn-success btn-hover'>Yes</button>
                            <button onClick={ () => setOpenDailogBox(false)} className='btn-warning btn-hover'>No</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModelOrder