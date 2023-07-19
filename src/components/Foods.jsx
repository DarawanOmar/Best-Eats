import React, { useState ,useEffect } from 'react'
import {  useSelector  } from 'react-redux'
import {ScaleLoader} from 'react-spinners'
import FoodsList from './FoodsList'

const Foods = () => {
    
    const darkValue = useSelector((state)=>state.dark.isDark);
    const { foods , isLoading} = useSelector((state)=>state.count);  
    const [filteredFoods, setFilteredFoods] = useState([]);

    useEffect(() => {
        setFilteredFoods(foods);
      }, [foods]);

    const filterType = (name) => {
        setFilteredFoods(foods.filter((food) => food.category === name));
      };
    
      const filterPrice = (price) => {
        setFilteredFoods(foods.filter((food) => food.price === price));
      };
    
      const resetFilters = () => {
        setFilteredFoods(foods);
      };

    if(isLoading){
        return(
        <div className='text-center '>
            <h1 className='text-center py-6 text-4xl font-bold '> Loading...</h1>
            <ScaleLoader width={'2rem'} height={'6rem'}  color='orange'/>
        </div>
        )
    }
 
    

  return (
    <div className='max-w-6xl mx-auto p-4 font-serif space-y-4 '>
        <h1 className='text-center text-2xl md:text-4xl font-bold text-orange-500'> Top Rated Menu Items</h1>
        <div className='md:flex md:justify-between '>
            <div className='p-3 border-b-2 border-orange-500 shadow-2xl'>
                <h1 className='font-bold pb-4 text-xl'> Filter Type </h1>
                <div className='grid grid-cols-3 gap-3 md:flex md:justify-between md:items-center md:space-x-4 lg:space-x-6'>
                    <button onClick={resetFilters} className={darkValue ? ' bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'col-span-3  bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>All </button>
                    <button onClick={()=> filterType('pizza')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500  text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> Pizza</button>
                    <button onClick={()=> filterType('salad')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>Salad </button>
                    <button onClick={()=> filterType('burger')}  className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>Burger </button>
                    <button  onClick={()=> filterType('chicken')} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> Chicken</button>
                </div>
            </div>
            <div className='p-3 border-b-2 border-orange-500 shadow-2xl my-8 md:my-0'>
                <h1 className='font-bold pb-4 text-xl'> Filter Price</h1>
                <div className='grid grid-cols-3 gap-3 md:flex md:justify-between md:items-center md:space-x-4 lg:space-x-6 '>
                    <button onClick={()=> filterPrice(3)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>3$ </button>
                    <button onClick={()=> filterPrice(5)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>5$ </button>
                    <button onClick={()=> filterPrice(8)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> 8$</button>
                    <button onClick={()=> filterPrice(10)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}>10$ </button>
                    <button onClick={()=> filterPrice(12)} className={darkValue ? 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500' : 'bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500'}> 12$</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-14'>
            {filteredFoods.map((fod)=>{
                return <FoodsList key={fod.id} {...fod}/>
            })}
        </div>
    </div>
  )
}

export default Foods