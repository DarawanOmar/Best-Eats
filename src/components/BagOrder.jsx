import React from 'react';
import { useSelector } from 'react-redux';
import FoodBagOrder from './FoodBagOrder';
import { Link } from 'react-router-dom';


const BagOrder = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const { foods } = useSelector((state) => state.count);
    const total = useSelector((state) => state.count.totalPrice);
    const foodFilter = foods.filter((food) => food.count > 0);


    return (
        <div className={darkValue ? 'max-w-6xl mx-auto font-serif h-screen' : 'max-w-6xl mx-auto font-serif'}>
            {foodFilter.length > 0 ? (
                <div>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold pb-2'> Your Order Foods Here!..</h1>
                    <h1 className={darkValue ? 'text-center font-bold text-white text-2xl' : 'text-center font-bold text-2xl'}>Total Price : {`${total} $`}</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                        {foodFilter.map((food) => (
                            <FoodBagOrder key={food.id} {...food} />
                        ))}
                    </div>
                </div>
            ) : ( 
                <div className='flex flex-col items-center justify-center mt-48 '>
                <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl'>Your List is Empty !</h1>
                <p className='py-3 font-bold'>Click This Button To Add  Food</p>
                <Link to='/food' className={darkValue ? "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500" : "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add Food </Link>
              </div>
            )}
        </div>
    );
};

export default BagOrder;
