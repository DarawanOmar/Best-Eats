import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useSelector  , useDispatch} from 'react-redux'
import { fetchData ,totalCalculator} from "./features/Count/CountSlice";
import BagOrder from "./components/BagOrder";
import Home from "./components/Home";
import Favoraite from "./components/Favoraite";
import About from "./components/About";
import Foods from "./components/Foods";
import FoodPage from "./components/FoodPage";


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
    <div className={darkValue ? 'bg-black text-white duration-700 ' : 'bg-white text-black duration-700'}>    
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="bagorder" element={<BagOrder/>}/>
            <Route path="/favoraite" element={<Favoraite/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/food" element={<Foods/>}/>
            <Route path="/foodpage/:id" element={<FoodPage/>}/>
          </Routes>
        </BrowserRouter>

       
    </div>
  );
}

export default App;
