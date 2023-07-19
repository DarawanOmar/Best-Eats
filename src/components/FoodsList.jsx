import React, { useState } from 'react'
import { increment , decrement ,favoraite} from './features/Count/CountSlice'
import { useDispatch , useSelector} from 'react-redux';
import {AiOutlineStar} from 'react-icons/ai'


const FoodsList = ({id,name,count,image,price}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const dispatch = useDispatch();
    const[favorite,setFavorite] = useState(false)
    const handeFavoraite = ()=>{
        setFavorite(!favorite)
    }

  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <img className='h-[150px] w-full  object-cover rounded-t-xl' src={image} alt={name} />
        <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{name}</h1>
        <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
            <div className='flex space-x-2 '>
                <button disabled={count<1} onClick={()=> {dispatch(decrement({id}))}} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> dispatch(increment({id}))} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <span className={count >0 ? 'font-bold text-xl' : 'hidden'}>{count}</span>
            <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${price}$`}</h1>
        </div>
        <span onClick={()=>{
            handeFavoraite()
            dispatch(favoraite(id))
        }} className={favorite ? 'absolute top-0 right-0 bg-orange-500 text-white rounded-full' : 'absolute top-0 right-0 text-white rounded-full bg-black'}><AiOutlineStar/></span>
    </div>
  )
}

export default FoodsList