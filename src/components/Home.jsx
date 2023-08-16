import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Foods from './Foods'
import RateFood from './RateFood'
import RateMenuFooter from './RateMenuFooter'
import Footer from "./Footer";


const Home = () => {


  return (
    <div>
      
      <>
        <div><Hero/></div>
        <div><Cards/></div>
        <div><Foods/></div>
        <div><RateFood/></div>
        <div><RateMenuFooter/></div>
        <div> <Footer/> </div>
        </>
        
    </div>
  )
}

export default Home