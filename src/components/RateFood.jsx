import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {useRateBurger , useRateChicken , useRatePizza , useRateSalad} from '../hook/useRate'

const RateFood = () => {
    const {rateBurger,handleRate , handleRate2 , handleRate3 , handleRate4 , handleRate5} = useRateBurger()
    const {rateChicken,handleRateChicken,handleRateChicken2,handleRateChicken3,handleRateChicken4,handleRateChicken5} = useRateChicken()
    const {ratePizza,handleRatePizza,handleRatePizza2,handleRatePizza3,handleRatePizza4,handleRatePizza5} = useRatePizza()
    const {rateSalad,handleRateSalad,handleRateSalad2,handleRateSalad3,handleRateSalad4,handleRateSalad5} = useRateSalad()
   
  return (
    <div className='max-w-6xl mx-auto p-4 font-serif pt-28 '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            <div className=" relative rounded-xl">
                {/*  Overly*/}
                <div className="absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl">
                    <h1 className='text-4xl font-bold '>Rate <span className='text-orange-500'>Burger</span></h1>
                    <p className='flex text-2xl cursor-pointer'>
                        <span onClick={handleRate}  className={rateBurger === 1 || rateBurger === 2 || rateBurger === 3 || rateBurger === 4 || rateBurger === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRate2} className={rateBurger === 2 || rateBurger === 3 || rateBurger === 4 || rateBurger === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRate3} className={rateBurger === 3 || rateBurger === 4 || rateBurger === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRate4} className={rateBurger === 4 || rateBurger === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRate5} className={rateBurger === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 

                    </p>
                </div>
                <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' alt="/" />
            </div>
            <div className=" relative rounded-xl">
                {/*  Overly*/}
                <div className="absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl">
                    <h1 className='text-4xl font-bold '>Rate <span className='text-orange-500'>Chicken</span></h1>
                    <p className='flex text-2xl cursor-pointer'>
                        <span onClick={handleRateChicken}  className={rateChicken === 1 || rateChicken === 2 || rateChicken === 3 || rateChicken === 4 || rateChicken === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateChicken2} className={rateChicken === 2 || rateChicken === 3 || rateChicken === 4 || rateChicken === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateChicken3} className={rateChicken === 3 || rateChicken === 4 || rateChicken === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateChicken4} className={rateChicken === 4 || rateChicken === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateChicken5} className={rateChicken === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 

                    </p>
                </div>
                <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src='https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt="/" />
            </div>
            <div className=" relative rounded-xl">
                {/*  Overly*/}
                <div className="absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl">
                    <h1 className='text-4xl font-bold '>Rate <span className='text-orange-500'>Pizza</span></h1>
                    <p className='flex text-2xl cursor-pointer'>
                        <span onClick={handleRatePizza}  className={ratePizza === 1 || ratePizza === 2 || ratePizza === 3 || ratePizza === 4 || ratePizza === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRatePizza2} className={ratePizza === 2 || ratePizza === 3 || ratePizza === 4 || ratePizza === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRatePizza3} className={ratePizza === 3 || ratePizza === 4 || ratePizza === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRatePizza4} className={ratePizza === 4 || ratePizza === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRatePizza5} className={ratePizza === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 

                    </p>
                </div>
                <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="/" />
            </div>
            <div className=" relative rounded-xl">
                {/*  Overly*/}
                <div className="absolute max-h-[200px] bg-black/60 text-gray-200 w-full h-full flex flex-col justify-center rounded-xl">
                    <h1 className='text-4xl font-bold '>Rate <span className='text-orange-500'>Salad</span></h1>
                    <p className='flex text-2xl cursor-pointer'>
                        <span onClick={handleRateSalad}  className={rateSalad === 1 || rateSalad === 2 || rateSalad === 3 || rateSalad === 4 || rateSalad === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateSalad2} className={rateSalad === 2 || rateSalad === 3 || rateSalad === 4 || rateSalad === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateSalad3} className={rateSalad === 3 || rateSalad === 4 || rateSalad === 5? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateSalad4} className={rateSalad === 4 || rateSalad === 5  ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 
                        <span onClick={handleRateSalad5} className={rateSalad === 5 ? 'text-orange-500' : 'text-white'}><AiOutlineStar/></span> 

                    </p>
                </div>
                <img className='max-h-[200px] h-full w-full object-cover rounded-xl ' src='https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt="/" />
            </div>
        </div>
    </div>
  )
}

export default RateFood