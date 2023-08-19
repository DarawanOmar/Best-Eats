import React from 'react'
import { useSelector } from 'react-redux';
import { useAnimelContext } from '../context/AnimelContext';
import { useState } from 'react';

const AnimalPageDisplay = ({id, image, price, username, discription,favoraite}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const {animalCarts,getQuantityByID, increaseAnimelCartQuantity,decreaseAnimelCartQuantity,addToFavoraite} = useAnimelContext()
    const qty = getQuantityByID(id)
    const animalCart = animalCarts.find(item => item.id === id)
    const [fav, setfav] = useState(favoraite)
  
    return (
      <div className='max-w-6xl mx-auto  h-screen'>
           <img src={image} alt={username} className='max-h-[200px]  md:max-h-[400px]  w-full object-cover'/>
          <h1 className='font-bold text-2xl pt-3 pl-2'>{username}</h1>
          <p className='pl-2 pt-3'> {discription}.</p>
          
          <div className='flex justify-between items-center p-3 pt-6'>
            {qty === 0 ? (
                <div className="">
                    <button onClick={() => increaseAnimelCartQuantity(id)} className='btn-order md:btn-hover text-xl py-2'>Order</button>
                </div>
            ):(
                <div className='flex space-x-2 mt-3'>
                  <button onClick={() => decreaseAnimelCartQuantity(id)}  className={darkValue ? 'btn-warning' : 'btn-warning'}>-</button>
                  <button onClick={() => increaseAnimelCartQuantity(id)} className={darkValue ? 'btn-success' : 'btn-success'}>+</button>
              </div>
            )}
              
              <span className='text-xl font-bold '>{animalCart?.quantity}</span>
              <h1 className='bg-orange-500 text-white rounded-md px-3 py-1  text-2xl font-mono'>{`${price}$`}</h1>
          </div>
         {fav === false ? (
             <button to='/food' onClick={() => { 
                addToFavoraite(id)
                setfav(prev => !prev)
            }} className={darkValue ? "bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add To Favoraite </button>
          ):(
            <div className='flex items-center justify-center'>
                <button onClick={() => {
                    setfav(prev => !prev)
                    addToFavoraite(id)
                    }} className={darkValue ? "bg-green-500 px-4 py-2  rounded-md  border-2 border-green-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-green-500 px-4 py-2  rounded-md  border-2 border-green-500 text-white hover:bg-transparent hover:text-black duration-500 " }>Added To Favoraite</button>
            </div>
          )}         
  
      </div>
    )
}

export default AnimalPageDisplay