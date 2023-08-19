import React from 'react'
import imgae2 from '../img/In no time-amico.png'
import { useSelector  } from 'react-redux'

import {motion} from 'framer-motion'
import Test from './Test'


const About = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001}
    }} className='max-w-6xl mx-auto p-4 '>
        <div className={darkValue ? 'flex flex-col md:flex-row md:justify-between md:mt-20 h-screen ' : 'flex flex-col md:flex-row md:justify-between  md:mt-20 items-center'}>
            <p className={darkValue ? 'text-center text-lg md:text-xl pb-4 md:mt-[68px] ':'text-center text-lg md:text-xl pb-4 '}> 
                <h1 className={darkValue ? 'text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl text-center pb-4':'text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl text-center pb-4'}>Welcome!</h1>
                We are a team of passionate individuals who believe in delivering quality products to our customers
                This is a simple delivery app built with react and redux, which allows users to place orders for
                <span> <Test/></span>
            </p>
            <img className='max-h-[300px] max-w-[300px] w-full h-full mx-auto border-2 rounded-lg shadow-2xl bg-gradient-to-t from-orange-600 to-orange-200' src={imgae2} alt="/" />
        </div>
    </motion.div>
  )
}

export default About