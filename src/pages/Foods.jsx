import React, { useState ,useEffect } from 'react'
import {  useSelector  } from 'react-redux'
// import {ScaleLoader} from 'react-spinners'
import FoodsList from '../components/FoodsList'
import Search from '../components/Search'
import ReactPaginate from 'react-paginate'
import { useAnimelContext } from '../context/AnimelContext'
import {AiFillWarning} from 'react-icons/ai'

import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomModel from '../components/CustomModel'


const Foods = () => {
  // const { isLoading, error } = useSelector((state)=>state.count);  
  // const[visibleFood,setVisibleFood] = useState(4)

    const darkValue = useSelector((state)=>state.dark.isDark);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const[search,setSearch] = useState('')
    const [pageNumner,setPageNumber] = useState(0);
    const {foods} = useAnimelContext()
    const[showModelLogin,setShowModelLogin] = useState(false)
    const[openModel,setOpenModel] = useState(false)
   

    useEffect(() => {
        setFilteredFoods(foods);
        if(!search) return setFilteredFoods(foods)
        const filterSearch = foods.filter((food)=> (food.name).toLowerCase().includes(((search).toLowerCase())))
        setFilteredFoods(filterSearch)
      }, [foods , search]);

    const filterType = (name) => {
        setFilteredFoods(foods.filter((food) => food.category === name));
      };
    
      const filterPrice = (price) => {
        setFilteredFoods(foods.filter((food) => food.price === price));
      };
    
      const resetFilters = () => {
        setFilteredFoods(foods);
      };
      
      const showToastify = () => {
        toast.success('Added To BagOrder');
      }

    // if(isLoading){
    //     return(
    //     <div className='text-center '>
    //         <h1 className='text-center py-6 text-4xl font-bold '> Loading...</h1>
    //         <ScaleLoader width={'2rem'} height={'6rem'}  color='orange'/>
    //     </div>
    //     )
    // }

    // const showMoreFood = ()=>{
    //   setVisibleFood(prev => prev + 4)
    // }
    // const showLessFood = ()=>{
    //   setVisibleFood(prev => prev - 16)
    // }

    const foodPerPage = 8;
    const pageVisited = pageNumner * foodPerPage;
    const pageCount = Math.ceil(filteredFoods.length / foodPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    }; 

  
    

  return (
    <div className="max-w-6xl mx-auto p-3 font-serif space-y-4">
      <div
        className={`sticky  top-16 z-10 ${darkValue ? "bg-black" : "bg-white"}  duration-500` }>
        <h1 className="text-center text-2xl md:text-4xl font-bold text-orange-500 border-b-2 rounded-full border-orange-500">
          Top Rated Menu Items
        </h1>
        <div className="py-4 flex  justify-between items-center">
          <Search search={search} setSearch={setSearch} />
          <div className="">
            <button onClick={() => setOpenModel((prev) => !prev)} className="text-orange-500 text-3xl"> <AiFillWarning /></button>

            {/*  model Warinig*/}
            {openModel && (
              <CustomModel
                title={"Eat"}
                warning={"Warning"}
                text={
                  "Before Filter the Food type And Price Change Filter Type To ( All )  And The Paginaition Number Change To ( 1 )"
                }
                closeX={"x"}
                closeFunctionality={() => setOpenModel((prev) => !prev)}
              />
            )}

            {/* model Login */}      
            {showModelLogin && (
              <CustomModel
                title={"Eat"}
                closeX={"x"}
                text={
                  " Please Login To Allow you Order And Favoraite And Offers...."
                }
                namePage={"Login"}
                to={"/login"}
                closeFunctionality={() => setShowModelLogin(prev => !prev)}
              />
            )}
          </div>
        </div>
      </div>


      <div className="md:flex md:justify-between ">
        <div className="p-3 border-b-2 border-orange-500 shadow-2xl">
          <h1 className="font-bold pb-4 text-xl"> Filter Type </h1>
          <div className="grid grid-cols-3 gap-3 md:flex md:justify-between md:items-center md:space-x-4 lg:space-x-6">
            <button onClick={resetFilters}
              className={`bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer ${darkValue ? "hover:text-white" : "hover:text-black"}  hover:bg-transparent duration-500`}>
            All</button>
            <button
              onClick={() => filterType("pizza")}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500  text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              Salad{" "}
            </button>
            <button
              onClick={() => filterType("burger")}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              Burger{" "}
            </button>
            <button
              onClick={() => filterType("chicken")}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              {" "}
              Chicken
            </button>
          </div>
        </div>
        <div className="p-3 border-b-2 border-orange-500 shadow-2xl my-8 md:my-0">
          <h1 className="font-bold pb-4 text-xl"> Filter Price</h1>
          <div className="grid grid-cols-3 gap-3 md:flex md:justify-between md:items-center md:space-x-4 lg:space-x-6 ">
            <button
              onClick={() => filterPrice(3)}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              3${" "}
            </button>
            <button
              onClick={() => filterPrice(5)}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              5${" "}
            </button>
            <button
              onClick={() => filterPrice(8)}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              {" "}
              8$
            </button>
            <button
              onClick={() => filterPrice(10)}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              10${" "}
            </button>
            <button
              onClick={() => filterPrice(12)}
              className={
                darkValue
                  ? "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-white  hover:bg-transparent duration-500"
                  : "bg-orange-500 text-white px-2 md:py-1 rounded-full border-2 border-orange-500 cursor-pointer hover:text-black  hover:bg-transparent duration-500"
              }
            >
              {" "}
              12$
            </button>
          </div>
        </div>
      </div>

      <div>
        <>
          <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-3 pt-14">
            {filteredFoods
              .slice(pageVisited, pageVisited + foodPerPage)
              .map((fod) => {
                return (
                  <FoodsList
                    key={fod.id}
                    food={fod}
                    showModelLogin={showModelLogin}
                    setShowModelLogin={setShowModelLogin}
                    showToastify={showToastify}
                  />
                );
              })}
          </div>
          <div className="p-4">
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
        </>
      </div>
    </div>
  );
}

export default Foods