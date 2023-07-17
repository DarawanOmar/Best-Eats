import React, {  useState } from 'react'
import { data } from '../data/data'
import { useSelector  } from 'react-redux'

const Foods = () => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    
    const [foods,setFood] = useState(data)

    const filterType = (name) => {
        setFood(data.filter((food)=> {return food.category === name}))
    }
    const filterPrice = (price) => {
        setFood(data.filter((food)=> {return food.price === price}))
    }
  return (
    <div className='max-w-6xl mx-auto p-4 font-serif space-y-4'>
        <h1 className='text-center text-2xl md:text-4xl font-bold text-orange-500'> Top Rated Menu Items</h1>
        <div className='md:flex md:justify-between '>
            <div className='p-3 border-b-2 border-orange-500 shadow-2xl'>
                <h1 className='font-bold pb-3'> Filter Type </h1>
                <div className='flex justify-between items-center md:space-x-4 lg:space-x-6'>
                    <button onClick={()=> setFood(data)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>All </button>
                    <button onClick={()=> filterType('burger')}  className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>Burger </button>
                    <button onClick={()=> filterType('pizza')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> Pizza</button>
                    <button onClick={()=> filterType('salad')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>Salad </button>
                    <button  onClick={()=> filterType('chicken')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> Chicken</button>
                </div>
            </div>
            <div className='p-3 border-b-2 border-orange-500 shadow-2xl'>
                <h1 className='font-bold pb-3'> Filter Price</h1>
                <div className='flex justify-between items-center md:space-x-4 lg:space-x-6'>
                    <button onClick={()=> filterPrice('3$')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>3$ </button>
                    <button onClick={()=> filterPrice('5$')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>5$ </button>
                    <button onClick={()=> filterPrice('8$')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> 8$</button>
                    <button onClick={()=> filterPrice('10$')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>10$ </button>
                    <button onClick={()=> filterPrice('12$')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> 12$</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-16'>
            {foods.map((food)=>(
                <div key={food.id} className={darkValue ? 'relative hover:scale-105 border-4 rounded-2xl hover:border-orange-500 hover:rounded-2xl cursor-pointer duration-700' : 'relative hover:scale-105 cursor-pointer duration-300'} >
                    <img className='max-h-[200px] w-full h-full object-cover rounded-t-xl' src={food.image} alt={food.name} />
                    <div className=' bg-white text-black h-[50px] flex  justify-between items-center rounded-b-xl shadow-xl p-2 '>
                        <h1>{food.name}</h1>
                        <h1>{food.price}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods