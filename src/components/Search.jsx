import React from 'react'
import {CgSearch  } from 'react-icons/cg'
import {  useSelector  } from 'react-redux'


const Search = ({search,setSearch}) => {
  const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div>
      <div className={darkValue ? 'flex items-center text-white bg-orange-500 rounded-full w-[305px] sm:w-[500px] md:w-[440px] lg:w-[460px]' : 'flex items-center text-black bg-gray-200 rounded-full w-[250px] sm:w-[500px] md:w-[440px] lg:w-[460px]'}>
        <CgSearch size={'20px'} className='ml-2'/>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} className={darkValue ? 'w-full bg-transparent focus:outline-none p-2 placeholder:text-white': 'w-full bg-transparent focus:outline-none p-2'} placeholder='Search'/>
      </div>
    </div>
  )
}

export default Search