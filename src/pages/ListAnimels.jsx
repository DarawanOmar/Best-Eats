import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiHeart3Fill, RiHeartAddFill } from 'react-icons/ri'

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase';

const ListAnimels = ({id, image, price, username, showModelLogin, setShowModelLogin, showToastify}) => {
  
  const darkValue = useSelector((state)=>state.dark.isDark);
  const {getQuantityByID, increaseAnimelCartQuantity, decreaseAnimelCartQuantity, addToFavoraite} = useAnimelContext()
  const qty = getQuantityByID(id)
  const[user] = useAuthState(auth)

    const[toggleFavoraite, setToggleFavoraite] = useState(false)
    const handleFavoraite = () => {
      setToggleFavoraite(prev => !prev)
    }

  return (
    <div  className={darkValue ? 'md:hover:scale-105 rounded-lg cursor-pointer duration-300 border  relative shadow-xl p-2 ' : 'shadow-xl p-2 relative md:hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <Link to={`/animalpage/${id}`}><img className='h-[100px] w-full  object-cover rounded-xl' src={image} alt={username} /></Link>
        <h1 className='text-center font-bold pt-2 text-sm md:text-xl py-2'>{username}</h1>
        <div className='flex  justify-between items-center  p-2'>
            <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
                <button disabled={qty<1} onClick={()=> decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            {user ? (
                <button onClick={()=> {
                  increaseAnimelCartQuantity(id)
                  showToastify()
                }} className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-2 md:px-4' : 'hidden'} >Order</button> 
                ):(
                  <button onClick={()=> setShowModelLogin(!showModelLogin)} className='flex text-white bg-orange-500 rounded-md px-2 md:px-4'  >Order</button>
              )}
            <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
            <h1 className='text-sm rounded-md px-1 font-mono'>{`${price}$`}</h1>
        </div>
        {user ? ( 
          <button onClick={()=>{
              handleFavoraite()
              addToFavoraite(id)
              }} className={toggleFavoraite ? 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full' : 'absolute top-0 right-0 bg-white text-black flex justify-center items-center text-center h-5 w-5 rounded-full '}>{ toggleFavoraite ? <RiHeart3Fill/> : <RiHeartAddFill/> }
          </button>) : (

          <button onClick={()=>setShowModelLogin(!showModelLogin)} className={toggleFavoraite ? 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full' : 'absolute top-0 right-0 bg-white text-black flex justify-center items-center text-center h-5 w-5 rounded-full '}>{ toggleFavoraite ? <RiHeart3Fill/> : <RiHeartAddFill/> }</button>
          )}
    </div>
  )
}

export default ListAnimels