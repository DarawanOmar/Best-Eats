import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Foods from './Foods'
import RateFood from './RateFoodAndAnimal'
import RateMenuFooter from './RateMenuFooter'
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Foods/>
      <RateFood/>
      <RateMenuFooter/>
      <Footer/>
    </div>
  )
}

export default Home