import React from 'react'
import { AiFillWarning } from 'react-icons/ai'
import { MdRestaurant } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CustomModel = ({title,closeX,text,yes,no,closeFunctionality,namePage,to,warning,yesFunctionality}) => {
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif">
        <div className="flex flex-col italic px-6 ">
                <div className= 'px-2 rounded-md bg-white '>
                    <div className="flex justify-between items-center">
                        <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className= 'text-black mx-1 duration-500 '>{title}</span> <span><MdRestaurant/></span></h1>
                        <button onClick={closeFunctionality} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>{closeX}</span></button>
                    </div>
                    <div className='flex flex-col p-4 '>
                        {warning && 
                        <div className=" flex justify-center items-center text-2xl font-bold text-red-500">
                            <span><AiFillWarning/></span>
                            <h1 >{warning}</h1>
                        </div>}
                        <div className='flex items-center  space-x-3'>
                            <h1  className='text-lg px- text-center'>{text} </h1>
                        </div>
                        <div className="text-center pt-3">
                            {yes && no && (
                            <div>
                                <button onClick={closeFunctionality}  className='btn-warning btn-hover'>{no}</button>
                                <button onClick={yesFunctionality} className='btn-success btn-hover'>{yes}</button>
                            </div>)}
                        </div>
                        {namePage && to &&(
                        <div className="text-center">
                            <Link onClick={yesFunctionality} className='btn-order md:btn-hover' to={`${to}`} >{namePage}</Link>
                        </div>)}
                        
                    </div>
                </div>
            </div>

    </div>
  )
}

export default CustomModel