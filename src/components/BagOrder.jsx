import React from 'react';
import { useSelector } from 'react-redux';
import FoodBagOrder from './FoodBagOrder';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useAnimelContext } from '../context/AnimelContext';
import AnimelBagOrder from './AnimelBagOrder';


const BagOrder = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const { foods } = useSelector((state) => state.count);
    const total = useSelector((state) => state.count.totalPrice);
    const foodFilter = foods.filter((food) => food.count > 0);
    const {animalCarts, totalOrder, totolPrice} = useAnimelContext()
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
        className={darkValue ? 'max-w-6xl mx-auto font-serif h-screen' : 'max-w-6xl mx-auto font-serif'}>
            {foodFilter.length > 0 && totalOrder > 0? (
                <div>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500 mb-2'> Your Orders Here!..</h1>
                    <h1 className={darkValue ? 'text-center font-bold text-white text-2xl  ' : ' text-center font-bold text-2xl'}>Total Price Food : {`${total} $`}</h1>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                        {foodFilter.map((food) => (
                            <FoodBagOrder key={food.id} {...food} />
                            ))}
                    </div>
                            <h1 className={darkValue ? 'text-center font-bold text-white text-2xl  ' : ' text-center font-bold text-2xl'}>Total Price Animels : {`${totolPrice} $`}</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                    {animalCarts.map((animelCart) => (
                        <AnimelBagOrder key={animelCart.id} {...animelCart} />
                    ))}
                </div>
                 
                </div>
            ):foodFilter.length > 0? (
                <div>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500'> Your Orders Here!..</h1>
                    <h1 className={darkValue ? 'text-center font-bold text-white text-2xl  ' : ' text-center font-bold text-2xl'}>Total Price Food : {`${total} $`}</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                        {foodFilter.map((food) => (
                            <FoodBagOrder key={food.id} {...food} />
                        ))}
                    </div>
                 
                </div>
            ) : totalOrder > 0 ? (
                <div>
                <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500'> Your Orders Here!..</h1>
                <h1 className={darkValue ? 'text-center font-bold text-white text-2xl  ' : ' text-center font-bold text-2xl'}>Total Price Animels : {`${totolPrice} $`}</h1>
            
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                    {animalCarts.map((animelCart) => (
                        <AnimelBagOrder key={animelCart.id} {...animelCart} />
                    ))}
                </div>
            </div>
            ) : ( 
                <div className='flex flex-col items-center justify-center mt-48 '>
                <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl'>Your List is Empty Now!</h1>
                <p className='py-3 font-bold'>Click This Button To Add  Food And Animel</p>
                <div className='flex space-x-4'>
                    <Link to='/food' className={darkValue ? "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500" : "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add Food </Link>
                    <Link to='/animels' className={darkValue ? "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500" : "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add Animel </Link>
                </div>
              </div>
            )}
        </motion.div>
    );
};

export default BagOrder;
