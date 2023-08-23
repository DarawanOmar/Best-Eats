import React from 'react'
import { useAnimelContext } from '../context/AnimelContext'
import ListAnimels from './ListAnimels'
import Search from '../components/Search'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import ModelLogin from '../components/ModelLogin'
import { Slide, ToastContainer, toast } from 'react-toastify'

const Animles = () => {
    const {animal} = useAnimelContext()
    const darkValue = useSelector((state)=>state.dark.isDark);
    const[search,setSearch] = useState('')
    const[filterSearch,setFilteredAnimels] = useState([])
    const [pageNumner,setPageNumber] = useState(0);
    const[showModelLogin,setShowModelLogin] = useState(false)
    
    const foodPerPage = 8;
    const pageVisited = pageNumner * foodPerPage;
    const pageCount = Math.ceil(filterSearch.length / foodPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    
    useEffect(() => {
      setFilteredAnimels(animal);
      if(!search) return setFilteredAnimels(animal)
      const filterSearch = animal.filter((animel)=> (animel.category).toLowerCase().includes(((search).toLowerCase())))
    setFilteredAnimels(filterSearch)
  }, [animal , search]);

  const showToastify = () => {
    toast.success('Added To BagOrder');
  }
  

  return (

    <div className='max-w-6xl mx-auto min-h-screen'>
      <div className={darkValue ? 'sticky top-16 z-10 bg-black duration-500 ' : 'sticky top-16 z-10 bg-white duration-500'}>
        <h1 className='text-center text-2xl md:text-4xl font-bold text-orange-500 border-b-2 rounded-full border-orange-500 pb-2 '> Top Rated Menu Items</h1>
        <h1 className='md:my-3 p-4  '> <Search search={search} setSearch={setSearch} /> </h1>
      </div>
      {/* model Login */}
      {showModelLogin ? (
        <div className="">
            {showModelLogin ? <ModelLogin setShowModelLogin={setShowModelLogin} showModelLogin={showModelLogin} /> : null}
        </div>) :null 
      }
      <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-14 max-w-6xl mx-auto p-3'>
          {filterSearch.slice(pageVisited,pageVisited + foodPerPage).map(food=>{
              return <ListAnimels key={food.id} {...food} showModelLogin={showModelLogin} setShowModelLogin={setShowModelLogin} showToastify={showToastify}/>
          })}
      </div>
      <div className='pb-10 p-5'>
        <ReactPaginate
         previousLabel={"<<"}
         nextLabel={">>"}
         pageCount={pageCount}
         onPageChange={changePage}
         disabledLinkClassName=" bg-black/20 text-gray-500  py-2 rounded-md  duration-500 cursor-pointer"
         containerClassName="flex justify-between items-center max-w-sm mx-auto mt-10 "
         previousLinkClassName="bg-orange-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer  "
         nextLinkClassName="bg-orange-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer "
         activeClassName="border-2  border-orange-500 bg-orange-500 px-4 py-1 rounded-md text-white  border-2 hover:bg-transparent hover:border-orange-500 hover:text-black duration-500 cursor-pointer"
        />
        </div>
        <ToastContainer
          position='top-center'
          theme='light'
          transition={Slide}
      />
    </div>
  )
}

export default Animles