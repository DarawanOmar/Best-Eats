import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { decrement, increment , unFavoraite} from '../features/Count/CountSlice';
import {AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const FavoraiteListFood = ({id,name,count,image,price}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const dispatch = useDispatch();
  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
    <Link to={`/foodpage/${id}`} > <img className='h-[100px] w-full  object-cover rounded-t-xl' src={image} alt={name} /> </Link>
    <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{name}</h1>
    <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
        <div className={count > 0 ? 'flex space-x-2 ' : 'hidden'}>
            <button disabled={count<1} onClick={()=> {dispatch(decrement({id}))}} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
            <button onClick={()=> dispatch(increment({id}))} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
        </div>
        <button className={count === 0 ? 'flex text-white bg-orange-500 rounded-md px-4 ' : 'hidden'} onClick={()=> dispatch(increment({id}))}>Order</button>
        <span className={count >0 ? 'font-bold text-xl' : 'hidden'}>{count}</span>
        <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${price}$`}</h1>
    </div>
    <span onClick={()=>{

        dispatch(unFavoraite(id))
    }} className='absolute top-0 right-0 bg-orange-500 text-white rounded-full' ><AiOutlineStar/></span>
</div>
  )
}

export default FavoraiteListFood