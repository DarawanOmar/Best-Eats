import React from 'react'
import { useSelector  } from 'react-redux'
import {AiOutlineStar} from 'react-icons/ai'
import { useAnimelContext } from '../context/AnimelContext';

const FavoraiteListFood = ({id}) => {
  
  const darkValue = useSelector((state)=>state.dark.isDark);
  const { foods,decreaseFoodCartQuantity, increaseFoodCartQuantity, getQuantityFoodByID, addToFavoraiteFood } = useAnimelContext()
  const filterAnimelFavoraite = foods.find(animel => animel.id === id)
  const qty = getQuantityFoodByID(id)

return (
  <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
   <img className='h-[100px] w-full  object-cover rounded-t-xl' src={filterAnimelFavoraite.image} alt={filterAnimelFavoraite.username} />
  <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{filterAnimelFavoraite.username}</h1>
  <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
      <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
          <button disabled={qty<1} onClick={()=> decreaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
          <button onClick={()=> increaseFoodCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
      </div>
      <button className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-4 ' : 'hidden'} onClick={()=> increaseFoodCartQuantity(id)}>Order</button>
      <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
      <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${filterAnimelFavoraite.price}$`}</h1>
  </div>
  <span onClick={()=>{
      addToFavoraiteFood(id)
  }} className= 'absolute top-0 right-0 bg-orange-500 text-white rounded-full'><AiOutlineStar/></span>
</div>
)
}

export default FavoraiteListFood