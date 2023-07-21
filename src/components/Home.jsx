import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Foods from './Foods'
import RateFood from './RateFood'
import RateMenuFooter from './RateMenuFooter'
import {  useSelector  } from 'react-redux'

const Home = () => {

  const {error} = useSelector((state)=>state.count);  

  return (
    <div>
      {!error && 
      <>
        <Hero/>
        <Cards/>
        <Foods/>
        <RateFood/>
        <RateMenuFooter/>
        </>}
        {error && <>
          <div className='text-center text-2xl font-bold text-red-500 mt-48'>
            <h1> You Have An Error</h1>
            <h1> {error}</h1>
          </div>
        </>}
    </div>
  )
}

export default Home