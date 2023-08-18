import React from 'react';
import { useSelector } from 'react-redux';
import FoodBagOrder from './FoodBagOrder';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useAnimelContext } from '../context/AnimelContext';
import AnimelBagOrder from './AnimelBagOrder';
import { SiCodechef } from 'react-icons/si'
import { CgPlayListAdd} from 'react-icons/cg'
import { GiLion } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import { useState } from 'react';


const BagOrder = () => {

    const darkValue = useSelector((state)=>state.dark.isDark);
    const { animalCarts, totalOrder, totolPrice, foodCarts, totalOrderFood, totolPriceFood } = useAnimelContext()

    const foodCartsFilter = foodCarts.filter(food => food.quantity > 0) 
    const animelCartsFilter = animalCarts.filter(food => food.quantity > 0) 

    const[toggleAdd,setToggleAdd] = useState(false)
    const handleToggleAdd = () => {
        setToggleAdd(prev => !prev)
    }

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
        className={darkValue ? 'max-w-6xl mx-auto font-serif min-h-screen ' : 'max-w-6xl mx-auto font-serif '}>
            {totalOrderFood > 0 && totalOrder > 0 ? (
                <div className=''>
                    <div className=' flex justify-between items-center '>
                        <h1 className='text-4xl text-orange-500 '><SiCodechef/> </h1>
                         <h1 className='text-center px-4 text-xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500 mb-2'>Your Orders Here</h1>
                         <div className="">
                         <button className='text-orange-500 text-3xl md:text-4xl md:mr-2' onClick={handleToggleAdd} ><CgPlayListAdd/></button>
                         </div>
                    </div>
                    <div className={toggleAdd ? "flex justify-center space-x-4 items-center  translate-x-0 duration-700 ease-in-ou py-6" : "translate-x-[-100%] duration-700 ease-in-out "} >
                    {toggleAdd && (
                            <>
                                <Link className='btn-order md:btn-hover flex ' to='/food'>Add Foods <MdFastfood/> </Link>
                                <Link className='btn-order md:btn-hover flex items-center' to='/animels'>Add Animels <GiLion/> </Link>
                            </>
                        )}
                    </div>
                    <div className={darkValue ? 'flex justify-between items-center sticky z-10 bg-black top-[67px] py-4 ' : 'flex sticky justify-between items-center z-10 bg-white top-[67px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  md:text-xl lg:text-2xl  flex items-center' : ' text- font-bold text-sm ml-4 md:text-xl lg:text-2xl flex items-center'}>Total Price Animel:  <GiLion/> {`${totolPrice} $`}</h1>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm mr-4  md:text-xl lg:text-2xl  flex items-center' : ' text- font-bold text-sm ml-4 md:text-xl lg:text-2xl flex items-center'}>Total Price Food <MdFastfood/> :{`${totolPriceFood} $`}</h1>
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
                    <Link to='/map' className=' btn-order text-xl btn-hover '>Next</Link>
                 </div>

                </div>
            ):totalOrderFood > 0 ? (
                <div>
                    <div className=' flex justify-between items-center px-2'>
                        <h1 className='text-4xl md:text-5xl text-orange-500 '><SiCodechef/></h1>
                         <h1 className='text-center px-4 text-xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500 mb-2'>Your Orders Here</h1>
                         <div className="">
                            <button className='text-orange-500 text-3xl md:text-4xl md:mr-2' onClick={handleToggleAdd} ><CgPlayListAdd/></button>
                         </div>
                    </div>

                    <div className={toggleAdd ? "flex justify-center space-x-4 items-center  translate-x-0 duration-700 ease-in-ou py-6" : "translate-x-[-100%] duration-700 ease-in-out "} >
                    {toggleAdd && (
                            <>
                                <Link className='btn-order md:btn-hover flex ' to='/food'>Add Foods <MdFastfood/> </Link>
                                <Link className='btn-order md:btn-hover flex items-center' to='/animels'>Add Animels <GiLion/> </Link>
                            </>
                        )}
                    </div>
                    <div className={darkValue ? 'flex sticky z-10 bg-black top-[68px] py-4' : 'flex sticky z-10 bg-white top-[68px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  flex items-center ' : ' text- font-bold text-sm ml-4 flex items-center'}>Total Price Food <MdFastfood/> :{`${totolPriceFood} $`} </h1>
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
                        <Link to='/map' className='btn-order text-xl btn-hover'>Next</Link>
                    </div>
                 
                </div>
            ) : totalOrder > 0 ? (
                <div>
                <div className=' flex justify-between items-center '>
                        <h1 className='text-4xl text-orange-500 '><SiCodechef/></h1>
                         <h1 className='text-center px-4 text-xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2 border-b-2 rounded-full border-orange-500 mb-2'>Your Orders Here</h1>
                         <div className="">
                         <button className='text-orange-500 text-3xl md:text-4xl md:mr-2' onClick={handleToggleAdd} ><CgPlayListAdd/></button>
                         </div>
                    </div>
                    <div className={toggleAdd ? "flex justify-center space-x-4 items-center  translate-x-0 duration-700 ease-in-ou py-6" : "translate-x-[-100%] duration-700 ease-in-out "} >
                    {toggleAdd && (
                            <>
                                <Link className='btn-order md:btn-hover flex ' to='/food'>Add Foods  <MdFastfood/> </Link>
                                <Link className='btn-order md:btn-hover flex items-center' to='/animels'>Add Animels <GiLion/> </Link>
                            </>
                        )}
                    </div>
                <div className={darkValue ? 'flex sticky z-10 bg-black top-[68px] py-4' : 'flex sticky z-10 bg-white top-[68px] py-4'}>
                        <h1 className={darkValue ? 'text- font-bold text-white text-sm ml-4  flex items-center ' : ' text- font-bold text-sm ml-4 flex items-center'}>Total Price Animel <GiLion/> :{`${totolPrice} $`} </h1>
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
                    <Link to='/map' className='btn-order text-xl btn-hover'>Next</Link>
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
