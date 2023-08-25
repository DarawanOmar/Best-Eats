import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import RateDisplayNavBar from '../components/RateDisplayNavBar'
import { Link } from 'react-router-dom'

const RateNavBar = () => {

    const {rateFoodAndAnimals} = useAnimelContext()
    const sortedRateFoodAndAnimals = [...rateFoodAndAnimals].sort((a, b) => b.rateNumber - a.rateNumber);    
    
  return (
    <>
      {sortedRateFoodAndAnimals.length > 0 ? (
        <div>
        <div className='max-w-6xl mx-auto min-h-screen'>
            <div className='flex justify-center'>
              <h1 className=' max-w-max text-2xl md:text-3x lg:text-4xl font-bold text-orange-500 border-b-2 rounded-full border-orange-500 px-10 py-1 md:py-3'>Top Rate </h1>
            </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 font-serif '>
              {sortedRateFoodAndAnimals.map(item => {
                  return <RateDisplayNavBar key={item.id} {...item} />
              })}
          </div>
        </div>
      </div>
      ) : (
        <div className=" font-serif mt-20">
          <h1 className='text-center text-xl md:text-3xl  font-bold capitalize'> You have not yet Rate food and animals!!</h1>
          <p className='text-center md:text-xl text-gray-400 capitalize py-2'>Back To Home To Image Slider and  Rate Food & Animal</p>
          <div className='text-center py-3'>
            <Link to='/' className='btn-order max-w-max py-2 md:text-xl '>Back To Home</Link>
          </div>
        </div>
      )
    }
    </>
  )
}

export default RateNavBar