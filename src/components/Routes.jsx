import React from 'react'
import {  Routes , Route , useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import useScrollToTop from '../hook/useScrollToTop';
import BagOrder from "../pages/BagOrder";
import Home from "../pages/Home";
import Favoraite from "../pages/Favoraite";
import About from "../pages/About";
import Foods from "../pages/Foods";
import FoodPage from "../pages/FoodPage";
import Animles from '../pages/Animles';
import Location from '../pages/Location';
import Map from '../pages/Map';
import RateNavBar from '../pages/RateNavBar';
import AnimalPage from '../pages/AnimalPage';
import Theme from '../pages/Theme';
import Login from '../pages/Login';
import FeedBack from '../pages/FeedBack';
import UpdatePost from '../pages/UpdatePost';

const Routess = () => {

  useScrollToTop()
  const location = useLocation()
  
  return (
    <div>
      <AnimatePresence >
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="bagorder" element={<BagOrder />} />
          <Route path="/favoraite" element={<Favoraite />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Foods />} />
          <Route path="/foodpage/:id" element={<FoodPage />} />
          <Route path='/animels' element={<Animles/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/rate' element={<RateNavBar/>}/>
          <Route path='/theme' element={<Theme/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feedback' element={<FeedBack/>}/>
          <Route path='/animalpage/:id' element={<AnimalPage/>}/>
          <Route path='/upatepostfeddback/:docId' element={<UpdatePost/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Routess