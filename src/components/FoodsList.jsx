import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {RiHeartAddFill, RiHeart3Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useAnimelContext } from '../context/AnimelContext';

import Aos from 'aos'
import 'aos/dist/aos.css'

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase';

const FoodsList = ({food, setShowModelLogin, showModelLogin}) => {
  
  useEffect(()=>{
    Aos.init()
  },[])
  
    const[user] = useAuthState(auth)

    const darkValue = useSelector((state)=>state.dark.isDark);
    const[favorite,setFavorite] = useState(false)

    const handeFavoraite = ()=>{
        setFavorite(!favorite)
    }
    const {getQuantityFoodByID, addToFavoraiteFood ,increaseFoodCartQuantity,decreaseFoodCartQuantity} = useAnimelContext()
    const qty = getQuantityFoodByID(food.id)

  return (
    <div data-aos="fade-up" className={darkValue ? 'md:hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative shadow-xl p-2' : ' shadow-xl p-2 relative md:hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <Link to={`/foodpage/${food.id}`} > <img className='h-[100px] w-full  object-cover rounded-xl ' src={food.image} alt={food.name} /> </Link>
        <h1 className='text-center font-bold pt-2 text-sm md:text-xl py-2'>{food.name}</h1>
        <div className='flex  justify-between items-center p-2 '>
            <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
                <button disabled={qty<1} onClick={()=> decreaseFoodCartQuantity(food.id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseFoodCartQuantity(food.id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            {user ? (
               <button onClick={()=> increaseFoodCartQuantity(food.id)} className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-2 md:px-4' : 'hidden'} >Order</button> 
              ):(
                <button onClick={()=> setShowModelLogin(!showModelLogin)} className='flex text-white bg-orange-500 rounded-md px-2 md:px-4'  >Order</button>
            )}
            <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
            <h1 className='text-sm rounded-md px-1 font-mono'>{`${food.price}$`}</h1>
        </div>
        
        {user ? ( 

        <button onClick={()=>{
            handeFavoraite()
            addToFavoraiteFood(food.id)
            }} className={favorite ? 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full' : 'absolute top-0 right-0 bg-white text-black flex justify-center items-center text-center h-5 w-5 rounded-full '}>{ favorite ? <RiHeart3Fill/> : <RiHeartAddFill/> }
        </button>) : (

        <button onClick={()=>setShowModelLogin(!showModelLogin)} className={favorite ? 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full' : 'absolute top-0 right-0 bg-white text-black flex justify-center items-center text-center h-5 w-5 rounded-full '}>{ favorite ? <RiHeart3Fill/> : <RiHeartAddFill/> }</button>
        )}
        
        
      
     
    </div>
  )
}

export default FoodsList

