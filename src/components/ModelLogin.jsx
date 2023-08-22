import React from 'react'
import { MdRestaurant } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ModelLogin = ({showModelLogin, setShowModelLogin}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div>
         <div className={showModelLogin ? " fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif" : "hidden"}>
        <div className= " flex flex-col italic mx-4">
            <div className={darkValue ? 'px-2 rounded-md bg-black text-white' : 'px-2 rounded-md bg-white'}>
                <div className="flex justify-between items-center px-1">
                    <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
                    <button onClick={() => setShowModelLogin(!showModelLogin)} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
                </div>
                <div className='flex flex-col p-4'>
                    <div className='flex flex-col items-center  space-x-3'>
                        <p className='text-center'> Please Login To Allow you Order And Favoraite And Offers.... </p>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                      <Link to='/login' className='btn-order text-center'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModelLogin