import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux';
import { VscHeartFilled } from 'react-icons/vsc'


const FavoraiteListAnimel = ({id}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const { animal,decreaseAnimelCartQuantity, increaseAnimelCartQuantity, getQuantityByID, addToFavoraite } = useAnimelContext()
    const filterAnimelFavoraite = animal.find(animel => animel.id === id)
    const qty = getQuantityByID(id)
  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
     <img className='h-[100px] w-full  object-cover rounded-t-xl' src={filterAnimelFavoraite.image} alt={filterAnimelFavoraite.username} />
    <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{filterAnimelFavoraite.username}</h1>
    <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
        <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
            <button disabled={qty<1} onClick={()=> decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
            <button onClick={()=> increaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
        </div>
        <button className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-4 ' : 'hidden'} onClick={()=> increaseAnimelCartQuantity(id)}>Order</button>
        <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
        <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${filterAnimelFavoraite.price}$`}</h1>
    </div>
    <span onClick={()=>{
        addToFavoraite(id)
    }} className= 'absolute top-0 right-0 text-orange-500 bg-white flex justify-center items-center text-center h-5 w-5 rounded-full'><VscHeartFilled/></span>
</div>
  )
}

export default FavoraiteListAnimel