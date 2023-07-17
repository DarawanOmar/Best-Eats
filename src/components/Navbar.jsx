import React, { useState } from 'react'
import {CgMenu , CgSearch , CgClose } from 'react-icons/cg'
import {FaShoppingCart ,FaUserFriends , FaHeart , FaTruck , FaWallet } from 'react-icons/fa'
import {AiFillTag} from 'react-icons/ai'
import {MdHelp } from 'react-icons/md'
import {BsSaveFill } from 'react-icons/bs'
import {BsSun ,BsMoon} from 'react-icons/bs';
import { useSelector ,useDispatch } from 'react-redux'
import {dark , night} from './Dark-Mode/DarkModeSlice'

const Navbar = () => {

     const darkValue = useSelector((state)=>state.dark.isDark);
     const dispatch = useDispatch();

     const [handleBtn, sethandleBtn] = useState(true)
     const [nav ,setNav] = useState(false)

     const handleNav = () => {
          setNav(!nav)
     }
     const handleDeliveryBtn = () =>{
          sethandleBtn(true)
     }
     const handlePickupDelivery = () =>{
          sethandleBtn(false)
     }
  return (
    <div className='top-0 sticky z-10 duration-700'>
        <div className={darkValue ? 'flex justify-between items-center p-4 font-serif max-w-6xl mx-auto bg-black text-white duration-700' : 'flex justify-between items-center p-4 font-serif max-w-6xl mx-auto bg-white text-black duration-700'}>
            
           <div className='flex items-center '>
                <CgMenu size={'25px'} onClick={handleNav} className='cursor-pointer'/>
                <h1 className='text-2xl md:text-3xl'>Best <span className='font-bold text-orange-500'>Eats</span></h1>
                <div className='hidden md:flex lg:ml-4 items-center bg-gray-400 text-white rounded-full text-sm'>
                    <p onClick={handleDeliveryBtn} className={handleBtn? 'bg-black rounded-full p-2 border-y-orange-500 cursor-pointer  duration-500 ' : 'bg-gray-400 rounded-full p-2  cursor-pointer duration-500'}>Delivery</p>
                    <p onClick={handlePickupDelivery} className={!handleBtn ? 'bg-black rounded-full p-2  cursor-pointer' : 'bg-gray-400 rounded-full p-2  cursor-pointer'}>PickUp</p>
                </div>
           </div>

           <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[340px] md:w-[300px] lg:w-[500px]'>
                <CgSearch size={'20px'}/>
                <input type="text" className='w-full bg-transparent focus:outline-none p-2' placeholder='Search Foods'/>
           </div>

           <div className='flex items-center space-x-1 '>
                <div className='hidden md:flex lg:ml-4 items-center bg-gray-500 text-white rounded-full text-xl'>
                    <button onClick={()=> { dispatch(night())}} className= {darkValue ?  'rounded-full p-2  cursor-pointer duration-500' : 'bg-black rounded-full p-2  cursor-pointer duration-500'}><BsSun/></button>
                    <button onClick={()=> { dispatch(dark())}} className= {darkValue ? ' text-black rounded-full p-2  cursor-pointer bg-white' : ' text-white rounded-full p-2  cursor-pointer'}><BsMoon/></button>
                </div>
                <div className='hidden md:flex items-center bg-black text-white rounded-full px-4 py-2 space-x-1'>
                     <FaShoppingCart/>
                     <h1> Cart</h1>
                </div>
           </div>
        </div>

        {/* Mobile Menu */}
          <div className={nav ? ' bg-black/75 fixed top-0 left-0 z-10 h-screen w-full font-serif duration-300' : ''}>
                    <div className={nav && darkValue ? 'fixed top-0 left-0 bg-black text-white w-[300px] h-screen  duration-500 ease-in-out ': nav && !darkValue ? 'fixed top-0 left-0 bg-white text-black w-[300px] h-screen  duration-500 ease-in-out ' : ' fixed  left-[-100%] duration-500 ' }>
                         <div className='flex justify-between items-center  p-4'>
                              <h1 className='text-2xl md:text-3xl'>Best <span className='font-bold text-orange-500'>Eats</span></h1>
                              <div className='flex lg:ml-4 items-center bg-gray-500 text-white rounded-full text-xl'>
                                   <button onClick={()=> { dispatch(night())}} className= {darkValue ?  'rounded-full p-2  cursor-pointer duration-500' : 'bg-black rounded-full p-2  cursor-pointer duration-500'}><BsSun/></button>
                                   <button onClick={()=> { dispatch(dark())}} className= {darkValue ? ' text-black rounded-full p-2  cursor-pointer bg-white' : ' text-white rounded-full p-2  cursor-pointer'}><BsMoon/></button>
                              </div>
                              <CgClose  size={'25px'} onClick={handleNav} className='cursor-pointer'/>
                         </div>
                         <ul className='p-4 pt-6 flex flex-col '>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <FaTruck/> <span className='ml-2'>Order</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <FaHeart/> <span className='ml-2'>Favorites</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <FaWallet/> <span className='ml-2'>Wallet</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <AiFillTag/> <span className='ml-2'>Promitions</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <BsSaveFill/> <span className='ml-2'> Best One</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <FaUserFriends/> <span className='ml-2'>invit Friend</span></li>
                              <li className='flex items-center text-lg pt-4 cursor-pointer'> <MdHelp/> <span className='ml-2'>Help</span></li>
                         </ul>
                    </div>
          </div>
    </div>

  )
}

export default Navbar