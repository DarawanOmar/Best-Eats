import React from 'react';
import { useSelector } from 'react-redux';
import FoodBagOrder from './FoodBagOrder';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useAnimelContext } from '../context/AnimelContext';
import AnimelBagOrder from './AnimelBagOrder';


const BagOrder = () => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const { animalCarts, totalOrder, totolPrice, foodCarts, totalOrderFood, totolPriceFood } = useAnimelContext()

    const foodCartsFilter = foodCarts.filter(food => food.quantity > 0) 
    const animelCartsFilter = animalCarts.filter(food => food.quantity > 0) 

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
        className={darkValue ? 'max-w-6xl mx-auto font-serif ' : 'max-w-6xl mx-auto font-serif bg-white'}>
            {totalOrderFood > 0 && totalOrder > 0 ? (
                <div className=''>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500 mb-2'> Your Orders Here!..</h1>
                    <div className={darkValue ? 'flex justify-between items-center sticky z-10 bg-black top-[68px] py-4 border-x-2 border-orange-500' : 'flex sticky justify-between items-center z-10 bg-white top-[68px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  md:text-xl lg:text-2xl  ' : ' text- font-bold text-sm ml-4 md:text-xl lg:text-2xl '}>Total Price Animel:{`${totolPrice} $`}</h1>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  md:text-xl lg:text-2xl  ' : ' text- font-bold text-sm ml-4 md:text-xl lg:text-2xl '}>Total Price Food:{`${totolPriceFood} $`}</h1>
                    </div>

                    <div className='p-4'>
                        <h1 className='text-center text-orange-500 font-bold text-lg md:text-xl lg:text-2xl py-2  '>List Order Foods</h1>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 border-2 md:border-none rounded-md'>
                            {foodCartsFilter.map((food) => (
                                <FoodBagOrder key={food.id} {...food} />
                                ))}
                        </div>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-center text-orange-500 font-bold text-lg md:text-xl lg:text-2xl py-2  '>List Order Animels</h1>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 border-2 md:border-none rounded-md '>
                            {animelCartsFilter.map((animelCart) => (
                                <AnimelBagOrder key={animelCart.id} {...animelCart} />
                            ))}
                        </div>
                    </div>

                 <div className='text-center pb-6'>
                    <Link to='/location' className=' btn-order text-xl btn-hover '>Next</Link>
                 </div>

                </div>
            ):totalOrderFood > 0 ? (
                <div>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500'> Your Orders Here!..</h1>
                    <div className={darkValue ? 'flex sticky z-10 bg-black top-[68px] py-4' : 'flex sticky z-10 bg-white top-[68px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  ' : ' text- font-bold text-sm ml-4'}>Total Price Food:{`${totolPriceFood} $`}</h1>
                    </div>
                    <h1 className='text-center text-orange-500 font-bold text-lg md:text-xl lg:text-2xl py-2  '>List Order Foods</h1>
                    <div className='p-4'>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 border-2 md:border-none rounded-md'>
                            {foodCartsFilter.map((food) => (
                                <FoodBagOrder key={food.id} {...food} />
                            ))}
                        </div>
                    </div>
                    <div className='text-center pb-6'>
                        <Link to='/location' className='btn-order text-xl btn-hover'>Next</Link>
                    </div>
                 
                </div>
            ) : totalOrder > 0 ? (
                <div>
                <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500'> Your Orders Here!..</h1>
                <div className={darkValue ? 'flex sticky z-10 bg-black top-[68px] py-4' : 'flex sticky z-10 bg-white top-[68px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  ' : ' text- font-bold text-sm ml-4'}>Total Price Animel:{`${totolPrice} $`}</h1>
                </div>
                <h1 className='text-center text-orange-500 font-bold text-lg md:text-xl lg:text-2xl py-2  '>List Order Animels</h1>
                <div className='p-4'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 border-2 md:border-none rounded-md'>
                        {animelCartsFilter.map((animelCart) => (
                            <AnimelBagOrder key={animelCart.id} {...animelCart} />
                        ))}
                    </div>
                </div>
                <div className='text-center pb-6'>
                    <Link to='/location' className='btn-order text-xl btn-hover'>Next</Link>
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
