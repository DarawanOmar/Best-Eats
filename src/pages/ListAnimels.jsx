import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import { useSelector } from 'react-redux'
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'

const ListAnimels = ({id, image, price, username, category}) => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const {getQuantityByID, increaseAnimelCartQuantity, decreaseAnimelCartQuantity, addToFavoraite} = useAnimelContext()
    const qty = getQuantityByID(id)

    const[toggleFavoraite, setToggleFavoraite] = useState(false)
    const handleFavoraite = () => {
      setToggleFavoraite(prev => !prev)
    }

  return (
    <div  className={darkValue ? 'hover:scale-105 rounded-lg cursor-pointer duration-300 border border-orange-500 relative shadow-xl' : 'shadow-xl  relative hover:scale-105 rounded-lg cursor-pointer duration-300'} >
        <img className='h-[150px] w-full  object-cover rounded-t-xl' src={image} alt={username} />
        <h1 className='text-center font-bold pt-2 md:text-xl py-2'>{username}</h1>
        <div className='flex  justify-between items-center p-2 md:p-4 rounded-b-lg'>
            <div className='flex space-x-2 '>
                <button onClick={() => decreaseAnimelCartQuantity(id)} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>-</button>
                <button onClick={()=> increaseAnimelCartQuantity(id)}    className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  md:text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold  md:text-xl '}>+</button>
            </div>
            <span className={qty >0 ? 'font-bold text-xl flex items-center' : 'hidden'}><span className='text-xs text-gray-500'>x</span>{qty}</span>
        </div>
        <h1 className='bg-orange-500 text-white rounded-md px-1 font-mono text-center '>{`${price}$`}</h1>
        <h1 className="bg-gray-300 max-w-max rounded-md px-[4px] font-bold text-xs m-2">#{category}</h1>
        <span onClick={ () => {
          addToFavoraite(id)
          handleFavoraite()
          }} className={toggleFavoraite ? 'absolute top-0 right-0 bg-orange-500 text-white rounded-full' : 'absolute top-0 right-0 text-white rounded-full bg-black'}> <AiOutlineStar/> </span>
    </div>
  )
}

export default ListAnimels