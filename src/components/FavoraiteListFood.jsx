import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { decrement, increment , unFavoraite} from '../features/Count/CountSlice';
import {AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const FavoraiteListFood = ({id,name,count,image,price}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const dispatch = useDispatch();
  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange-500 relative' : ' relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
    <Link to={`/foodpage/${id}`} ><img className='h-[150px] w-full  object-cover rounded-t-xl' src={image} alt={name} /></Link>
    <h1 className='text-center font-bold pt-2'>{name}</h1>
    <div className='flex flex-col  shadow-xl p-2 rounded-b-lg'>
        <div className='flex justify-between items-center py-2'>
            <div className='flex space-x-2 '>
                <button disabled={count<1} onClick={()=> {dispatch(decrement({id}))}} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> dispatch(increment({id}))} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <span className='font-bold text-xl font-mono'>{count}</span>
        </div>
        <h1 className='bg-orange-500 text-center text-white rounded-md px-1 font-mono'>{`${price}$`}</h1>
    </div>
    <button onClick={()=> dispatch(unFavoraite(id))} className='absolute bg-orange-500 text-white  rounded-full  top-0 right-0'><AiOutlineStar/></button>
</div>
  )
}

export default FavoraiteListFood