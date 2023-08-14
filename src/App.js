import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { BrowserRouter  } from "react-router-dom";
import { useSelector  , useDispatch} from 'react-redux'
import { fetchData ,totalCalculator} from "./features/Count/CountSlice";
import Routess from "./components/Routes";
import { FoodContextProvider } from "./context/FoodContext";


function App() {

  const dispatch = useDispatch()
  const {foods} = useSelector((state)=> state.count)

  useEffect(()=>{ 
      dispatch(fetchData())   
  },[])

  useEffect(()=>{
    dispatch(totalCalculator())
  },[foods])
  const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div
    className={darkValue ? 'bg-black text-white duration-700 ' : 'bg-white text-black duration-700'}>  
    <FoodContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routess/>
        </BrowserRouter>     
      </FoodContextProvider>  
    </div>
  );
}

export default App;
