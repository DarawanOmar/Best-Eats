import React, { useState } from 'react'
import {useSelector} from 'react-redux';
import {AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useAnimelContext } from '../context/AnimelContext';

const FoodsList = ({id,name,image,price}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const[favorite,setFavorite] = useState(false)
    const handeFavoraite = ()=>{
        setFavorite(!favorite)
    }
    const {getQuantityFoodByID, addToFavoraiteFood ,increaseFoodCartQuantity,decreaseFoodCartQuantity} = useAnimelContext()
    const qty = getQuantityFoodByID(id)

  return (
    <div  className={darkValue ? 'md:hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative md:hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <Link to={`/foodpage/${id}`} > <img className='h-[100px] w-full  object-cover rounded-t-xl ' src={image} alt={name} /> </Link>
        <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{name}</h1>
        <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
            <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
                <button disabled={qty<1} onClick={()=> decreaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <button className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-4' : 'hidden'} onClick={()=> increaseFoodCartQuantity(id)}>Order</button>
            <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
            <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${price}$`}</h1>
        </div>
        <span onClick={()=>{
            handeFavoraite()
            addToFavoraiteFood(id)
        }} className={favorite ? 'absolute top-0 right-0 bg-orange-500 text-white rounded-full' : 'absolute top-0 right-0 text-white rounded-full bg-black'}><AiOutlineStar/></span>
    </div>
  )
}

export default FoodsList