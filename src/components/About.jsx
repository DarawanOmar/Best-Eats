import React from 'react'
import imgae2 from './img/In no time-amico.png'
import { useSelector  } from 'react-redux'

const About = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div className='max-w-6xl mx-auto p-4 '>
        <div className={darkValue ? 'flex flex-col md:flex-row md:justify-between h-screen md:mt-20 ' : 'flex flex-col md:flex-row md:justify-between  md:mt-20 items-center'}>
            <p className='text-center text-lg md:text-xl pb-4 '> 
                <h1 className='text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl text-center pb-4'>Welcome!</h1>
                We are a team of passionate individuals who believe in delivering quality products to our customers
                This is a simple delivery app built with react and redux, which allows users to place orders for
            </p>
            <img className='max-h-[300px] max-w-[300px] w-full h-full mx-auto border-2 rounded-lg shadow-2xl bg-gradient-to-t from-orange-600 to-orange-200' src={imgae2} alt="/" />
        </div>
    </div>
  )
}

export default About