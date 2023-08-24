import React from 'react'
import { MdRestaurant } from 'react-icons/md';
import { useSelector } from 'react-redux';


const ModelGoogleAccount = ({showGoogleAccount, setShowGoogleAccount}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div>
         <div className={showGoogleAccount ? " fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif" : "hidden"}>
        <div className= " flex flex-col  mx-4">
            <div className={darkValue ? 'px-2 rounded-md bg-black text-white' : 'px-2 rounded-md bg-white'}>
                <div className="flex justify-between items-center px-1">
                    <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                    <button onClick={() => setShowGoogleAccount(!showGoogleAccount)} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                </div>
                <div className='flex flex-col p-4'>
                    <div className='flex flex-col items-center  space-x-3'>
                        <p className='text-center '> For Now Just <span className='bg-green-500 text-white'>Sing Up With Google Account</span> Available </p>
                        <h1 className='py-2'>You Can Login Now With it</h1>
                    </div>
                    <div className="text-center">
                        <button onClick={() => setShowGoogleAccount(!showGoogleAccount)} className='btn-order md:btn-hover'>Go Now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModelGoogleAccount


