import React from 'react'
import { useAnimelContext } from '../context/AnimelContext';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import CustomModel from './CustomModel';


const FoodPageDisplay = ({id,name,count,image,price,discription, favoraite}) => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const {foodCarts,getQuantityFoodByID, increaseFoodCartQuantity,decreaseFoodCartQuantity,addToFavoraiteFood} = useAnimelContext()
  const qty = getQuantityFoodByID(id)
  const foodCart = foodCarts.find(item => item.id === id)
  const [fav, setfav] = useState(favoraite)
  const[user] = useAuthState(auth)
  const [openModel, setOpenModel] = useState(false)

  return (
    <div className='max-w-6xl mx-auto  h-screen'>
           <img src={image} alt={name} className='max-h-[200px]  md:max-h-[400px] w-full object-cover'/>
          <h1 className='font-bold text-2xl pt-3 pl-2'>{name}</h1>
          <p className='pl-2 pt-3'> {discription}.</p>
          
          <div className='flex justify-between items-center p-3 pt-6'>
            {qty === 0 ? (
                user ? (
                  <div className="">
                      <button onClick={() => increaseFoodCartQuantity(id)} className='btn-order md:btn-hover text-xl py-2'>Order</button>
                  </div>
                ):(
                  <div className="">
                      <button onClick={() => setOpenModel(prev => !prev)} className='btn-order md:btn-hover text-xl py-2'>Order</button>
                  </div>
                )
            ):(
                <div className='flex space-x-2 mt-3'>
                  <button onClick={() => decreaseFoodCartQuantity(id)}  className={darkValue ? 'btn-warning' : 'btn-warning'}>-</button>
                  <button onClick={() => increaseFoodCartQuantity(id)} className={darkValue ? 'btn-success' : 'btn-success'}>+</button>
              </div>
            )}
              
              <span className='text-xl font-bold '>{foodCart?.quantity}</span>
              <h1 className='bg-orange-500 text-white rounded-md px-3 py-1  text-2xl font-mono'>{`${price}$`}</h1>
          </div>
         {fav === false ? (
              user ?(
                <button to='/food' onClick={() => { 
                    addToFavoraiteFood(id)
                    setfav(prev => !prev)
                }} className={darkValue ? "bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add To Favoraite </button>
                ):(
                  
                  <button onClick={() => setOpenModel(prev => !prev)} className={darkValue ? "bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add To Favoraite </button>
                )
            ):(
              <div className='flex items-center justify-center'>
                  <button onClick={() => {
                      setfav(prev => !prev)
                      addToFavoraiteFood(id)
                      }} className={darkValue ? "bg-green-500 px-4 py-2  rounded-md  border-2 border-green-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-green-500 px-4 py-2  rounded-md  border-2 border-green-500 text-white hover:bg-transparent hover:text-black duration-500 " }>Added To Favoraite</button>
              </div>
          )}       

          {/* Model */}
          {openModel && 
            <CustomModel 
              title={"Eat"} 
              closeX={"x"}
              namePage={"Login"}
              to={"/login"}
              text={"Please Login To Allow you Order And Favoraite And Offers...."}
              closeFunctionality={() => setOpenModel(prev => !prev)}
            />}

      </div>
  )
}

export default FoodPageDisplay