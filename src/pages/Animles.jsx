import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import ListAnimels from './ListAnimels'
import Search from '../components/Search'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const Animles = () => {
    const {animal} = useAnimelContext()
    const darkValue = useSelector((state)=>state.dark.isDark);
    const[search,setSearch] = useState('')
    const[filterSearch,setFilteredAnimels] = useState([])

    useEffect(() => {
      setFilteredAnimels(animal);
      if(!search) return setFilteredAnimels(animal)
      const filterSearch = animal.filter((animel)=> (animel.category).toLowerCase().includes(((search).toLowerCase())))
      setFilteredAnimels(filterSearch)
    }, [animal , search]);

  return (

    <div className='max-w-6xl mx-auto'>
      <div className={darkValue ? 'sticky top-16 z-10 bg-black duration-500' : 'sticky top-16 z-10 bg-white duration-500'}>
        <h1 className='text-center text-2xl md:text-4xl font-bold text-orange-500 border-b-2 rounded-full border-orange-500 pb-2 '> Top Rated Menu Items</h1>
        <h1 className='md:my-3 p-4  '> <Search search={search} setSearch={setSearch} /> </h1>
      </div>

      <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-14 max-w-6xl mx-auto p-3'>
          {filterSearch.map(food=>{
              return <ListAnimels key={food.id} {...food}/>
          })}
      </div>
    </div>
  )
}

export default Animles