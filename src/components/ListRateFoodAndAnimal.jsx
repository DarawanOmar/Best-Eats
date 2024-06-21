import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import { useAnimelContext } from '../context/AnimelContext';

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase';

const ListRateFoodAndAnimal = ({id,name,image, setShowModelLogin, showModelLogin}) => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const [rate,setRate] = useState(0)
  const {addRateFoodAndAnimals} = useAnimelContext()
  
  const[user] = useAuthState(auth)

  const handleRating = (rating) => {
    addRateFoodAndAnimals(id, rating);
};

  return (
    <div>
        <div className=" relative rounded-xl shadow-xl">
        <div className={darkValue ? "absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl border-2 border-orange-500" : "absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl"}>
            <h1 className='text-4xl font-bold '>Rate <span className='text-orange-500'>{name}</span></h1>
            <div className='flex text-2xl cursor-pointer'>
                
                {user ? <button  onClick={() => {
                  setRate(1)
                  handleRating(1)
                  }}  className={rate === 1 || rate === 2 || rate === 3 || rate === 4 || rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button> :
                <button  onClick={() => setShowModelLogin(!showModelLogin)}  className={rate === 1 || rate === 2 || rate === 3 || rate === 4 || rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button>}
                
                {user ? <button  onClick={() => {
                  setRate(2)
                  handleRating(2)
                  }}  className={rate === 2 || rate === 3 || rate === 4 || rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button> :
                <button  onClick={() => setShowModelLogin(!showModelLogin)}  className={rate === 2 || rate === 3 || rate === 4 || rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button>}

                {user ? <button  onClick={() => {
                  setRate(3)
                  handleRating(3)
                  }}  className={rate === 3 || rate === 4 || rate === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button> :
                <button  onClick={() => setShowModelLogin(!showModelLogin)}  className={rate === 3 || rate === 4 || rate === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button>}

                {user ? <button  onClick={() => {
                  setRate(4)
                  handleRating(4)
                  }}  className={rate === 4 || rate === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button> :
                <button  onClick={() => setShowModelLogin(!showModelLogin)}  className={rate === 4 || rate === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button>}

                {user ? <button  onClick={() => {
                  setRate(5)
                  handleRating(5)
                  }}  className={rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button> :
                <button  onClick={() => setShowModelLogin(!showModelLogin)}  className={rate === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/>
                </button>}
                
            </div>
        </div>
        <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src={image} alt="/" />
    </div>
    </div>
  )
}

export default ListRateFoodAndAnimal