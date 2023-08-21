import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {RiHeartAddFill, RiHeart3Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useAnimelContext } from '../context/AnimelContext';

import Aos from 'aos'
import 'aos/dist/aos.css'

const FoodsList = ({id,name,image,price}) => {
    
    useEffect(()=>{
      Aos.init()
    },[])

    const darkValue = useSelector((state)=>state.dark.isDark);
    const[favorite,setFavorite] = useState(false)
    const handeFavoraite = ()=>{
        setFavorite(!favorite)
    }
    const {getQuantityFoodByID, addToFavoraiteFood ,increaseFoodCartQuantity,decreaseFoodCartQuantity} = useAnimelContext()
    const qty = getQuantityFoodByID(id)

  return (
    <div data-aos="fade-up" className={darkValue ? 'md:hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative shadow-xl p-2' : ' shadow-xl p-2 relative md:hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <Link to={`/foodpage/${id}`} > <img className='h-[100px] w-full  object-cover rounded-xl ' src={image} alt={name} /> </Link>
        <h1 className='text-center font-bold pt-2 text-sm md:text-xl py-2'>{name}</h1>
        <div className='flex  justify-between items-center p-2 '>
            <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
                <button disabled={qty<1} onClick={()=> decreaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <button className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-2 md:px-4' : 'hidden'} onClick={()=> increaseFoodCartQuantity(id)}>Order</button>
            <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
            <h1 className='text-sm rounded-md px-1 font-mono'>{`${price}$`}</h1>
        </div>
        <span onClick={()=>{
            handeFavoraite()
            addToFavoraiteFood(id)
        }} className={favorite ? 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full' : 'absolute top-0 right-0 bg-white text-black flex justify-center items-center text-center h-5 w-5 rounded-full '}>{ favorite ? <RiHeart3Fill/> : <RiHeartAddFill/> }</span>
    </div>
  )
}

export default FoodsList