import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import ListAnimels from './ListAnimels'

const Animles = () => {
    const {animal} = useAnimelContext()
  return (
    <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-14 max-w-6xl mx-auto p-6'>
        {animal.map(food=>{
            return <ListAnimels key={food.id} {...food}/>
        })}
    </div>
  )
}

export default Animles