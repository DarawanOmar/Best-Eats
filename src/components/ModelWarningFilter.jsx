import React from 'react'
import { MdRestaurant } from 'react-icons/md';
import { AiFillWarning} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ModelWarningFilter = ({setOpenModelWarning, openModelWarning}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif'>
        <div className={openModelWarning ?  " flex flex-col italic mx-4" : "hidden"}>
                <div className={darkValue ? 'px-2 rounded-md bg-black text-white' : 'px-2 rounded-md bg-white'}>
                    <div className="flex justify-between items-center px-1">
                        <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                        <button onClick={() => setOpenModelWarning(false)} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                    </div>
                    <div className='flex flex-col p-4'>
                        <div className='flex flex-col items-center  space-x-3'>
                            <h1  className='text-lg px-6 flex items-center font-bold text-red-500 '>Warning <span className='text-2xl'><AiFillWarning/></span></h1>
                            <p className='text-center'> Before Filter the Food type And Price Change Filter Type To ( All )  And The Paginaition Number Change To ( 1 )  </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ModelWarningFilter