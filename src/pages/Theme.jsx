import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dark, night } from '../features/Dark-Mode/DarkModeSlice';

const Theme = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const dispatch = useDispatch();
    const [handleBtn, sethandleBtn] = useState(false)

    const handleButton = () =>{
        sethandleBtn(!handleBtn)
    }

    const darkMode = () =>{
        sethandleBtn(true)
   }
   const lightMode = () =>{
        sethandleBtn(false)
   }
  return (
    <div className='min-h-screen font-serif max-w-6xl mx-auto'>
        <div className='max-w-6xl mx-auto  flex justify-between items-center  px-4'>
            <h1 className="md:text-xl">Change To Dark Mode Just Turn On </h1>
            <div className='flex items-center space-x-2'>
                    <div className={darkValue ? 'flex  items-center bg-green-400 text-white rounded-full ' : 'flex  items-center bg-gray-400 text-white rounded-full '}>
                        <button onClick={() => {
                            darkMode()
                            dispatch(night())
                        }} ><div className={handleBtn && darkValue ? 'bg-white text-black rounded-full p-3 border-y-orange-500 cursor-pointer  duration-500 ' : handleBtn && !darkValue ? 'bg-black rounded-full p-3 border-y-orange-500 cursor-pointer  duration-500 ' : 'bg-green-400 rounded-full p-2  cursor-pointer duration-500'}></div></button>
                        <button onClick={() => {
                            lightMode()
                            dispatch(dark())
                        }}><div  className={!handleBtn && darkValue ? 'bg-white text-black rounded-full p-3  cursor-pointer': !handleBtn && !darkValue ? 'bg-black rounded-full p-3  cursor-pointer ' : 'bg-gray-400 rounded-full p-2  cursor-pointer'}></div></button>
                    </div>
               </div>
        </div>
        
    </div>
  )
}

export default Theme