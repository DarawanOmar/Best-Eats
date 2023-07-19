import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FoodPageDisplay from './FoodPageDisplay'

const FoodPage = () => {

    const foods = useSelector((state)=> state.count.foods)
    const {id} = useParams()
    const food = foods.find((food)=> (food.id).toString() === id)
    const f = Array(food)
    console.log();
  return (
    <div className='max-w-6xl mx-auto'>

        {f.map((food)=>{
            return <FoodPageDisplay key={food.id} {...food}/>
        })}    
    </div>
  )
}

export default FoodPage