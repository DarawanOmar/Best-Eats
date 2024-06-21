import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import {FaShoppingCart , FaHeart , FaTruck ,FaHome, FaCloudMoon, } from 'react-icons/fa'
import {MdPerson, MdRestaurant, MdLogout, MdFeedback} from 'react-icons/md'
import {BsSun ,BsMoon, BsTextParagraph  } from 'react-icons/bs';
import { GiLion } from 'react-icons/gi';
import { BiSolidMapPin } from 'react-icons/bi';
import { SlGraph } from 'react-icons/sl';

import { useSelector ,useDispatch } from 'react-redux'
import {dark , night} from '../features/Dark-Mode/DarkModeSlice'
import { Link } from 'react-router-dom'
import { useAnimelContext } from '../context/AnimelContext'

import logoUser from '../img/NicePng_gray-circle-png_1366211.png'

import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

     const darkValue = useSelector((state)=>state.dark.isDark);
     const dispatch = useDispatch();
     const [handleBtn, sethandleBtn] = useState(true)
     const [nav ,setNav] = useState(false)
     const [showLogout, setShowLogout] = useState(false)
     const {totalOrder, totalOrderFood} = useAnimelContext()

     const navigate = useNavigate()

     const handleNav = () => {
          setNav(!nav)
     }
     const handleDeliveryBtn = () =>{
          sethandleBtn(true)
     }
     const handlePickupDelivery = () =>{
          sethandleBtn(false)
     }
     const handleShowLogout = () => {
          setShowLogout(!showLogout)
     }
     const handleShowLogout2 = () => {
          setShowLogout(false)
     }

     const[user] = useAuthState(auth)
     const logOut = async () => {
          await signOut(auth)
     }

  return (
    <div className='top-0 sticky z-20 duration-700'>
        <div className={darkValue ? 'flex justify-between items-center p-4 font-serif max-w-6xl mx-auto bg-black text-white duration-700 border-2 border-x-orange-500 border-y-black' : 'flex justify-between  items-center p-4 font-serif max-w-6xl mx-auto bg-white text-black duration-700'}>
            
           <div className='flex items-center space-x-2'>
                <button onClick={() => {
                    handleNav()
                    handleShowLogout2()
                }} className='text-3xl cursor-pointer'> <BsTextParagraph/></button>
                <Link to='/' className='text-3xl md:text-3xl'>Best <span className='font-bold text-orange-500'>Eats</span></Link>
                <div className='hidden md:flex lg:ml-4 items-center bg-gray-400 text-white rounded-full text-sm'>
                    <p onClick={handleDeliveryBtn} className={handleBtn && darkValue ? 'bg-white text-black rounded-full p-2 border-y-orange-500 cursor-pointer  duration-500 ' : handleBtn && !darkValue ? 'bg-black rounded-full p-2 border-y-orange-500 cursor-pointer  duration-500 ' : 'bg-gray-400 rounded-full p-2  cursor-pointer duration-500'}>Delivery</p>
                    <p onClick={handlePickupDelivery} className={!handleBtn && darkValue ? 'bg-white text-black rounded-full p-2  cursor-pointer': !handleBtn && !darkValue ? 'bg-black rounded-full p-2  cursor-pointer ' : 'bg-gray-400 rounded-full p-2  cursor-pointer'}>PickUp</p>
                </div>
           </div>         

           <div className='flex items-center space-x-1 '>
                <div className='hidden md:flex lg:ml-4 items-center bg-gray-500 text-white rounded-full text-xl'>
                    <button onClick={()=> { dispatch(night())}} className= {darkValue ?  'rounded-full p-2  cursor-pointer duration-500' : 'bg-black rounded-full p-2  cursor-pointer duration-500'}><BsSun/></button>
                    <button onClick={()=> { dispatch(dark())}} className= {darkValue ? ' text-black rounded-full p-2  cursor-pointer bg-white' : ' text-white rounded-full p-2  cursor-pointer'}><BsMoon/></button>
                </div>

               <Link to='bagorder' className={`relative flex items-center ${totalOrderFood  > 0 || totalOrder > 0 ? "bg-green-500" : "bg-black"} text-white rounded-full pl-4 pr-5 md:pr-7 py-2 space-x-1`}>
                    <FaShoppingCart size={'20px'}/>
                    <span className={totalOrderFood  > 0 || totalOrder > 0 ? 'text-md md:text-xl absolute top-0 right-0 text-white pr-1 max-w-max rounded-full ' : 'hidden'}>{totalOrderFood + totalOrder}</span>
               </Link>
               <div  className='flex justify-center items-center'>
                    {!user ? (
                         <Link to='/login'><img src={logoUser} alt="user" className='w-8 h-8 rounded-full flex justify-center items-center ' /></Link>
                    ):(
                         <button onClick={handleShowLogout}>
                              <img src={user?.photoURL} alt="user" className='w-8 h-8 rounded-full flex justify-center items-center ' />
                         </button>
                    )}
               </div>
           </div >
        </div>
          <div className={showLogout ? 'max-w-6xl mx-auto flex justify-end  duration-700 ease-in-out' : ' flex justify-end max-w-6xl mx-auto  -translate-y-52 duration-700 ease-in-out'}>
               <button 
                    className='flex items-center bg-orange-500 text-white px-4 py-1 rounded-full' 
                    onClick={() => {
                         logOut()
                         handleShowLogout()
                         navigate("/")
                    }}
               >LogOut <span className='ml-1'><MdLogout/></span> </button>
          </div>

   
   


        { /*Mobile Menu*/ }
          <div onClick={()=> setNav(false)} className={nav ? ' bg-black/75 fixed top-0 left-0 z-20 h-screen w-full font-serif duration-300' : ''}>
               <div className={nav && darkValue ? 'fixed top-0 left-0 bg-black text-white w-[230px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-screen  duration-500 ease-in-out ': nav && !darkValue ? 'fixed top-0 left-0 bg-white text-black w-[230px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-screen  duration-500 ease-in-out ' : ' fixed  left-[-100%] duration-500 ' }>
                    <div className='flex justify-between items-center  p-4'>
                         <h1 className='text-2xl md:text-3xl'>Best <span className='font-bold text-orange-500'>Eats</span></h1>
                         
                         <IoMdClose  size={'25px'} onClick={handleNav} className='cursor-pointer font-bold'/>
                    </div>
                    <ul className='p-4 pt-6 flex flex-col '>
                         <Link to='/' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-orange-500  ' : 'hidden'}> <FaHome /> <span className='ml-2 '>Home</span></Link>
                         <Link to='food' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <MdRestaurant/> <span className='ml-2 '>Foods</span></Link>
                         <Link to='/animels' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <GiLion/> <span className='ml-2 '>Animels</span></Link>
                         <Link  to='bagorder' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer  hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <FaTruck/> <span className='ml-2 '>Order</span></Link>
                         <Link to='/favoraite' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <FaHeart/> <span className='ml-2 '>Favorites</span></Link>
                         <Link to='/location' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <BiSolidMapPin/> <span className='ml-2 '> Maps</span></Link>
                         <Link to='/rate' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <SlGraph/> <span className='ml-2 '>Rates</span></Link>
                         <Link to='/theme' onClick={handleNav} className={nav ? 'flex items-center text-xl mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <FaCloudMoon/> <span className='ml-2 text-lg'>Change Theme</span></Link>
                         <Link to='/feedback' onClick={handleNav} className={nav ? 'flex items-center text-xl mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <MdFeedback/> <span className='ml-2 text-lg'>FeedBack</span></Link>
                         <Link to='/about' onClick={handleNav} className={nav ? 'flex items-center text-lg mt-4 cursor-pointer hover:pl-4 duration-500 hover:border-l-[30px]  hover:border-orange-500 ' : 'hidden'}> <MdPerson/> <span className='ml-2 '>About Us</span></Link>
                    </ul>
               </div>
          </div>
    </div>

  )
}

export default Navbar