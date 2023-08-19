import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import RateDisplayNavBar from './RateDisplayNavBar'

const RateNavBar = () => {

    const {rateFoodAndAnimals} = useAnimelContext()
    const sortedRateFoodAndAnimals = [...rateFoodAndAnimals].sort((a, b) => b.rateNumber - a.rateNumber);
  return (
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
  )
}

export default RateNavBar