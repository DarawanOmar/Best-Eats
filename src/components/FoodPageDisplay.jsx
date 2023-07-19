import React from 'react'
import { increment , decrement ,favoraite} from './features/Count/CountSlice'
import { useDispatch , useSelector} from 'react-redux';


const FoodPageDisplay = ({id,name,count,image,price,discription}) => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const dispatch = useDispatch();

  return (
    <div className='max-w-6xl mx-auto  h-screen'>
         <img src={image} alt={name} className='max-h-[200px]  md:max-h-[400px]  w-full object-cover'/>
        <h1 className='font-bold text-2xl pt-3 pl-2'>{name}</h1>
        <p className='pl-2'> {discription}</p>
        
        <div className='flex justify-between items-center p-3'>
            <div className='flex space-x-2 mt-3'>
                <button disabled={count<1} onClick={()=> {dispatch(decrement({id}))}} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold text-3xl '}>-</button>
                <button onClick={()=> dispatch(increment({id}))} className={darkValue ? 'bg-white text-black rounded-md px-2 font-bold  text-xl ' : 'bg-slate-300 rounded-md px-2 font-bold text-3xl '}>+</button>
            </div>
            <span className={count >0 ? 'font-bold text-2xl' : 'hidden'}>{count}</span>
            <h1 className='bg-orange-500 text-white rounded-md px-3 py-2 font-mono'>{`${price}$`}</h1>
        </div>
        <button onClick={()=> dispatch(favoraite(id))} to='/food' className={darkValue ? "bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500 mx-auto mt-4 block " : " mx-auto mt-4 block bg-orange-500 px-4 py-2  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Add To Favoraite </button>


    </div>
  )
}

export default FoodPageDisplay