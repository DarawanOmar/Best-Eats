import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Foods from './Foods'
import RateFood from '../components/RateFoodAndAnimal'
import RateMenuFooter from '../components/RateMenuFooter'
import Footer from "../components/Footer";

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