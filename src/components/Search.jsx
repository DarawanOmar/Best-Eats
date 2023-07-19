import React from 'react'
import {CgSearch  } from 'react-icons/cg'


const Search = () => {
  return (
    <div>
        <div className='flex items-center bg-gray-200 rounded-full w-[150px] sm:w-[340px] md:w-[300px] lg:w-[500px]'>
                <CgSearch size={'20px'}/>
                <input type="text" className='w-full bg-transparent focus:outline-none p-2' placeholder='Search Foods'/>
           </div>
    </div>
  )
}

export default Search