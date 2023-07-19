import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Foods from './Foods'
import RateFood from './RateFood'
import RateMenuFooter from './RateMenuFooter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Cards/>
        <Foods/>
        <RateFood/>
        <RateMenuFooter/>
    </div>
  )
}

export default Home