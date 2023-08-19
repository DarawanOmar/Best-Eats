import React from 'react'
import listItemsRate from '../data/datas.json'
import { AiOutlineStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const RateDisplayNavBar = ({id,rateNumber}) => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const rateExists = listItemsRate.find(item => item.id === id)
  console.log(rateExists);
  if(!rateExists) return null
  return (
    <div>
      <h1 className='text-center text-xl font-bold mb-2 italic'>Rate : {rateNumber}</h1>
     <div className=" relative rounded-xl ">
        <div className={darkValue ? "absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl border-2 border-orange-500" : "absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl"}>
            <h1 className='text-2xl md:text-4xl font-bold '> <span>{rateExists.name}s Rate</span></h1>
            <div className='flex text-2xl cursor-pointer'>
                <button className={rateNumber === 1 || rateNumber === 2 || rateNumber === 3 || rateNumber === 4 || rateNumber === 5 ? 'text-orange-500' : 'text-white'} ><AiOutlineStar/></button>
                <button className={rateNumber === 2 || rateNumber === 3 || rateNumber === 4 || rateNumber === 5 ? 'text-orange-500' : 'text-white'} ><AiOutlineStar/></button>
                <button className={rateNumber === 3 || rateNumber === 4 || rateNumber === 5 ? 'text-orange-500' : 'text-white'} ><AiOutlineStar/></button>
                <button className={rateNumber === 4 || rateNumber === 5 ? 'text-orange-500' : 'text-white'} ><AiOutlineStar/></button>
                <button className={rateNumber === 5 ? 'text-orange-500' : 'text-white'} ><AiOutlineStar/></button>
            </div>
        </div>
        <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src={rateExists.image} alt="/" />
    </div>
    </div>
  )
}

export default RateDisplayNavBar