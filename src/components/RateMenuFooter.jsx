import React, { useEffect, useState } from 'react'
import { useSelector  } from 'react-redux'
import { getDatacategories } from '../api/axios'

const RateMenuFooter = () => {
    
  const [categories , setCategories] = useState([])
  useEffect(()=>{
    getDatacategories().then(json => setCategories(json))
  },[])
  const darkValue = useSelector((state)=>state.dark.isDark);
  

  return (
    <div className='max-w-6xl mx-auto p-4 font-serif '>
        <h1 className='text-center font-bold text-2xl text-orange-500 pt-10 pb-14'>Top Rates Menu Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((item)=> (
                <div key={item.id} className={!darkValue ? 'flex items-center justify-between p-4 bg-gray-200 rounded-xl border-b-2 border-orange-500 shadow-xl cursor-pointer   hover:scale-105 duration-500' : 'bg-black  flex items-center justify-between p-4 cursor-pointer  rounded-xl border-y-2 border-orange-500 shadow-xl hover:scale-105 duration-500'}>
                    <h1 className='text-md sm:text-xl'> {item.name} </h1>
                    <img className='w-[35px]' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RateMenuFooter