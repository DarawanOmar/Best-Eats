import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Routess from "./components/Routes";
import { AnimelContextProvider } from "./context/AnimelContext";

//  Test Last Updated
function App() {
  // const dispatch = useDispatch()
  // const {foods} = useSelector((state)=> state.count)

  // useEffect(()=>{
  //     dispatch(fetchData())
  // },[])

  // useEffect(()=>{
  //   dispatch(totalCalculator())
  // },[foods])
  const darkValue = useSelector((state) => state.dark.isDark);

  return (
    <div
      className={
        darkValue
          ? "bg-black text-white duration-700 "
          : "bg-white text-black duration-700"
      }
    >
      <AnimelContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routess />
        </BrowserRouter>
      </AnimelContextProvider>
    </div>
  );
}

export default App;
