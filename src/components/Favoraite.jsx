import React from 'react'
import { useSelector  } from 'react-redux'
import FavoraiteListFood from './FavoraiteListFood';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useAnimelContext } from '../context/AnimelContext';
import FavoraiteListAnimel from './FavoraiteListAnimel';


const Favoraite = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const { foods } = useSelector((state)=>state.count);  
    const filterFavoraite = foods.filter((food)=> food.favoraite === true)
    const {animalCarts} = useAnimelContext()
    const listFavoraiteAnimel = animalCarts.filter( animel => animel.favoraite === true)

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
    }}

    className={darkValue ? 'max-w-6xl mx-auto p-4 h-screen font-serif' : 'max-w-6xl mx-auto p-4 font-serif'}>
        {filterFavoraite.length > 0  && listFavoraiteAnimel.length > 0 ? (
          <div>
            <h1 className='text-center text-orange-500 text-xl md:text-2xl lg:text-4xl font-bold font-serif'> Favoraite Foods Here!..</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
                {filterFavoraite.map((food)=>(
                    <FavoraiteListFood key={food.id} {...food}/>
                ))}
            </div>
            <h1 className='text-center text-orange-500 text-xl md:text-2xl lg:text-4xl font-bold font-serif'> Favoraite Animels Here!..</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
                {listFavoraiteAnimel.map((animelCarts)=>(
                    <FavoraiteListAnimel key={animelCarts.id} {...animelCarts}/>
                ))}
            </div>
          </div>
        ) : filterFavoraite.length > 0 ? (
          <div>
            <h1 className='text-center text-orange-500 text-xl md:text-2xl lg:text-4xl font-bold font-serif'> Favoraite Foods Here!..</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
                {filterFavoraite.map((food)=>(
                    <FavoraiteListFood key={food.id} {...food}/>
                ))}
            </div>
            </div>
        ) : listFavoraiteAnimel.length > 0 ? (
          <div>
            <h1 className='text-center text-orange-500 text-xl md:text-2xl lg:text-4xl font-bold font-serif'> Favoraite Animels Here!..</h1>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
                  {listFavoraiteAnimel.map((animelCarts)=>(
                      <FavoraiteListAnimel key={animelCarts.id} {...animelCarts}/>
                  ))}
              </div>
          </div>
        ) : (
        <div className='flex flex-col items-center justify-center mt-48 '>
          <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl'>Your Favoraite Food List  Not Yet !</h1>
          <p className='py-3 font-bold'>Click This Button To Add Favoraite Food</p>
          <Link to='/food' className={darkValue ? "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500" : "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add Favoraite </Link>
        </div>
        )}
        
    </motion.div>
  )
}

export default Favoraite