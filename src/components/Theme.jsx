import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dark, night } from '../features/Dark-Mode/DarkModeSlice';

const Theme = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const dispatch = useDispatch();
    const [handleBtn, sethandleBtn] = useState(true)

    const darkMode = () =>{
        sethandleBtn(true)
   }
   const lightMode = () =>{
        sethandleBtn(false)
   }

  return (
    <div className='min-h-screen font-serif'>
        {/* <div className='max-w-6xl mx-auto  flex justify-between items-center  p-2'>
            <h1 className="">Change To Dark Mode Just Turn On </h1>

            <div className={darkValue ? "hidden duration-700" : " flex items-center duration-700"}>
                <button onClick={() => dispatch(dark())} className="w-5 h-5 rounded-full bg-black"></button>
                <div className="w-4 h-1 rounded-full bg-black"></div>
            </div>

            <div className={darkValue ? " flex items-center duration-700" : "hidden duration-700"}>
                <div className="w-4 h-1 rounded-full bg-sky-600"></div>
                <button onClick={() => dispatch(night())} className="w-5 h-5 rounded-full bg-sky-600"></button>
            </div>
        </div> */}
        <div className='max-w-6xl mx-auto  flex justify-between items-center  p-2'>
            <h1 className="">Change To Dark Mode Just Turn On </h1>
            <div className='flex items-center space-x-2'>
                    <div className='flex  items-center bg-gray-400 text-white rounded-full '>
                        <button onClick={() => {
                            darkMode()
                            dispatch(night())
                        }} ><div className={handleBtn && darkValue ? 'bg-white text-black rounded-full p-3 border-y-orange-500 cursor-pointer  duration-500 ' : handleBtn && !darkValue ? 'bg-black rounded-full p-3 border-y-orange-500 cursor-pointer  duration-500 ' : 'bg-gray-400 rounded-full p-2  cursor-pointer duration-500'}></div></button>
                        <button onClick={() => {
                            lightMode()
                            dispatch(dark())
                        }}><div  className={!handleBtn && darkValue ? 'bg-green-400 text-black rounded-full p-3  cursor-pointer': !handleBtn && !darkValue ? 'bg-black rounded-full p-3  cursor-pointer ' : 'bg-gray-400 rounded-full p-2  cursor-pointer'}></div></button>
                    </div>
               </div>
        </div>
    </div>
  )
}

export default Theme