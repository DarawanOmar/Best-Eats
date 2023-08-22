import React from 'react'
import { MdRestaurant } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { useSelector } from 'react-redux';
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'

const Login = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const navigate = useNavigate()
    const singInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider)
        console.log(result);
        navigate("/")
    }
    
    const[user] = useAuthState(auth)

  return (
    
    <div className=" flex items-center justify-center h-[500px]  md:h-[650px] font-serif">

        <div className="shadow-xl rounded-md p-14">
            <div className="flex items-center justify-between">
                <h1 className='font-bold text-xl flex items-center text-orange-500'>Best <span className={darkValue ? 'text-white mx-1 duration-500 ': 'text-black mx-1 duration-500 '}>Eat</span> <span><MdRestaurant/></span></h1>
            <h1 className="my-2">Sign Up</h1>
            </div>
            <form action="" method="post" className="flex flex-col my-4">
                <label className="text-sm text-gray-500 hover:text-orange-500">Email address</label>
                <input className="border-b-orange-500 border-b-[3px] focus:outline-none" type="email" name="email"/>
                <label className="text-sm text-gray-500 hover:text-orange-500 mt-2">Password</label>
                <input className="border-b-orange-500 border-b-[3px] focus:outline-none" type="password" name="password"/>
                <input className="bg-orange-500 text-white rounded-md mt-4 py-2 border-2 hover:bg-transparent hover:border-orange-500 hover:text-black cursor-pointer duration-500" type="submit" value="Login"/>
            </form>
            <div className="">
                <div className="flex justify-center items-center bg-gray-200 p-2 space-x-2 rounded-sm">
                    <button onClick={singInWithGoogle} className=''>Sing Up With Google Account</button>
                    <span className='text-xl'><FcGoogle/></span>
                </div>
            </div>
            
            <div className="flex items-center mt-2">
                <p>No account? <span className="text-orange-500  px-2 py-1 ">Sign up</span></p>
            </div>
            
        </div>
    </div>

  )
}

export default Login