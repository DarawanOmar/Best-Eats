import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux'

const AnimelBagOrder = ({id,quantity}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const {animal, getQuantityByID, decreaseAnimelCartQuantity, increaseAnimelCartQuantity, removeAnimelFromCarts} = useAnimelContext()
    const animelExists = animal.find(animel=> animel.id === id)
    const qty = getQuantityByID(id)
  return (
    <div className=''>
        <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange-500 relative' : ' relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
            <img className='h-[100px] w-full  object-cover rounded-t-xl' src={animelExists.image} alt={animelExists.name} />
            <h1 className='text-center font-bold pt-2'>{animelExists.name}</h1>
            <div className='flex flex-col  shadow-xl p-2 rounded-b-lg'>
                <div className='flex justify-between items-center py-2'>
                    <div className='flex space-x-2 '>
                        <button onClick={()=> decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                        <button disabled={qty<1} onClick={()=> increaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
                    </div>
                    <span className='font-bold text-xl font-mono flex items-center'><span className='text-sm '>x</span>{qty}</span>
                <h1 className='bg-orange-500 text-center text-white rounded-md px-1 font-mono'>{`${animelExists.price}$`}</h1>
                </div>
                <div>
                    <h1 className='text-center font-bold text-sm my-2'>Total Price : {animelExists.price * quantity}$</h1>
                </div>
            </div>
            <button onClick={()=> removeAnimelFromCarts(id)} className='absolute bg-black text-white rounded-md px-2 top-0 right-0'>X</button>
        </div>
    </div>
  )
}

export default AnimelBagOrder