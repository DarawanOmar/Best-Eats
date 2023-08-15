import React from 'react'
import { formatCurrency } from '../hook/formatCurrency'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux'

const ListAnimels = ({id, image, price, username, discription, category}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const discriptions = discription.slice(0,50)
    const {getQuantityByID, increaseAnimelCartQuantity, decreaseAnimelCartQuantity} = useAnimelContext()
    const qty = getQuantityByID(id)

  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
         <img className='h-[150px] w-full  object-cover rounded-t-xl' src={image} alt={username} />
        <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{username}</h1>
        <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono text-center '>{`${price}$`}</h1>
        <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg'>
            <div className='flex space-x-2 '>
                <button onClick={() => decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseAnimelCartQuantity(id)}    className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}x</span>
        </div>
      
    </div>
  )
}

export default ListAnimels