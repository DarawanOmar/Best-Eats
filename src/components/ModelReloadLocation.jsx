import React from 'react'
import { MdRestaurant } from 'react-icons/md';
import { AiFillWarning} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ModelReloadLocation = ({setOpenModelReloadLocation, openModelReloadLocation, setReload}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif'>
        <div className={openModelReloadLocation ?  " flex flex-col italic mx-4" : "hidden"}>
                <div className={darkValue ? 'px-2 rounded-md bg-black text-white' : 'px-2 rounded-md bg-white'}>
                    <div className="flex justify-between items-center px-1">
                        <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                        <button onClick={() => setOpenModelReloadLocation(false)} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                    </div>
                    <div className='flex flex-col p-4'>
                        <div className='flex flex-col items-center  space-x-3'>
                            <h1  className='text-lg px-6 flex items-center font-bold text-red-500 '>Warning <span className='text-2xl'><AiFillWarning/></span></h1>
                            <p className='text-center capitalize'> Be Careful If You Click Reload  You Lose Chosen Current Selected Location Again You Must Be Choose Your Location </p>
                        </div>
                        <div className="text-center mt-2">
                            <button onClick={() => setOpenModelReloadLocation(prev => !prev)} className='btn-order bg-red-500 md:btn-hover'>Exit</button>
                            <button onClick={() => {
                                setReload(prev => !prev)
                                setOpenModelReloadLocation(prev => !prev)
                            }} className='btn-order'>Reload</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ModelReloadLocation
