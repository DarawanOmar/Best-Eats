import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux'
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'

const ListAnimels = ({id, image, price, username}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const {getQuantityByID, increaseAnimelCartQuantity, decreaseAnimelCartQuantity, addToFavoraite} = useAnimelContext()
    const qty = getQuantityByID(id)

    const[toggleFavoraite, setToggleFavoraite] = useState(false)
    const handleFavoraite = () => {
      setToggleFavoraite(prev => !prev)
    }

  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange- relative ' : '  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
     <img className='h-[100px] w-full  object-cover rounded-t-xl' src={image} alt={username} />
    <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{username}</h1>
    <div className='flex  justify-between items-center shadow-xl p-2 md:p-4 rounded-b-lg pb-6'>
        <div className={qty > 0 ? 'flex space-x-2 ' : 'hidden'}>
            <button disabled={qty<1} onClick={()=> decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
            <button onClick={()=> increaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
        </div>
        <button className={qty === 0 ? 'flex text-white bg-orange-500 rounded-md px-4 ' : 'hidden'} onClick={()=> increaseAnimelCartQuantity(id)}>Order</button>
        <span className={qty >0 ? 'font-bold text-xl' : 'hidden'}>{qty}</span>
        <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono'>{`${price}$`}</h1>
    </div>
    <span onClick={()=>{
        handleFavoraite()
        addToFavoraite(id)
    }} className={toggleFavoraite ? 'absolute top-0 right-0 bg-orange-500 text-white rounded-full' : 'absolute top-0 right-0 text-white rounded-full bg-black'}><AiOutlineStar/></span>
</div>
  )
}

export default ListAnimels