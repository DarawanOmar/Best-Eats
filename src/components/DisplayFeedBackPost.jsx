import React from 'react'
import { useSelector } from 'react-redux';

const DisplayFeedBackPost = ({username,image,title,date}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div className={darkValue ? "flex flex-col shadow-xl p-4 rounded-md bg-neutral-900" : "flex flex-col shadow-xl p-4 rounded-md bg-neutral-200"}>
                <div className="flex items-center space-x-4 py-2 border-b-2 border-orange-500">
                    <h1 className='text-lg font-bold italic'>{username}</h1>
                    <img src={image} alt={username} className='w-8 h-8 rounded-full' />
                </div>
                <div className="my-2">
                    {title}
                </div>
                <div className="flex justify-end">
                  {date}
                </div>
            </div>
  )
}

export default DisplayFeedBackPost