import React from 'react'
import { MdRestaurant } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { useSelector } from 'react-redux';
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {GrFormViewHide} from 'react-icons/gr'
import { useState } from 'react';
// import {useAuthState} from 'react-firebase-hooks/auth'

const Login = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const[showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const singInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider)
        navigate("/")
    }
   
    const handleShowPassword =  () => { setShowPassword(prev => !prev) }

    
    // const[user] = useAuthState(auth)

  return (
    
    <div className={darkValue ? " flex items-center justify-center  min-h-screen  font-serif  text-black": " flex items-center justify-center h-[500px]  md:h-[650px] font-serif text-black"}>

        <div className={darkValue ? "shadow-xl rounded-md p-14 bg-neutral-900" : "shadow-xl rounded-md p-14 bg-neutral-200"}>
            <div className="flex items-center justify-between">
                <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
            <h1 className={darkValue ? "my-2 text-white" : "my-2"}>Sign Up</h1>
            </div>
            <form className="flex flex-col my-4 ">
                <div className='flex flex-col'>
                    <label className={darkValue ? "text-sm text-white hover:text-orange-500" : "text-sm text-black hover:text-orange-500"}>Email address</label>
                    <input className="border-b-orange-500 border-b-[3px] rounded-tl-sm rounded-tr-sm focus:outline-none  pl-2" type="email" name="email"/>
                </div>
                <div className='flex flex-col relative'>
                    <label className={darkValue ? "text-sm text-white hover:text-orange-500 mt-2" : "text-sm text-black hover:text-orange-500 mt-2"}>Password</label>
                    <input className="border-b-orange-500 border-b-[3px] rounded-tl-sm rounded-tr-sm focus:outline-none  pl-2" type={showPassword ? "text" : "password"} name="password"/>
                    <span onClick={handleShowPassword} className='absolute right-0 top-8'><GrFormViewHide/></span>
                </div>
                <button className="bg-orange-500 text-white rounded-md mt-4 py-2 hover:bg-opacity-80 cursor-pointer duration-500" >Login</button>
            </form>
            <div className="">
                <div className="flex justify-center items-center bg-white p-2 space-x-2 rounded-md">
                    <button onClick={singInWithGoogle} className='text-sm'>Sing Up With Google Account</button>
                    <span className='text-xl'><FcGoogle/></span>
                </div>
            </div>
            
            <div className="flex items-center mt-2">
                <p className={darkValue ? "my-2 text-white" : "my-2"}>No account? <button className="text-orange-500  px-2 py-1 ">Sign up</button></p>
            </div>
            
        </div>
    </div>

  )
}

export default Login