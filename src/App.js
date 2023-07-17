import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Cards  from "./components/Cards";
import Foods from "./components/Foods";
import RateFood from "./components/RateFood";
import RateMenuFooter from "./components/RateMenuFooter";
import { useSelector  } from 'react-redux'


function App() {

  const darkValue = useSelector((state)=>state.dark.isDark);

  return (
    <div className={darkValue ? 'bg-black text-white duration-700' : 'bg-white text-black duration-700'}>    
        <Navbar/>
        <Hero/>
        <Cards/>
        <Foods/>
        <RateFood/>
        <RateMenuFooter/>
    </div>
  );
}

export default App;
