import React from 'react'
import {  Routes , Route , useLocation} from "react-router-dom";
import BagOrder from "../components/BagOrder";
import Home from "../components/Home";
import Favoraite from "../components/Favoraite";
import About from "../components/About";
import Foods from "../components/Foods";
import FoodPage from "../components/FoodPage";
import Animles from '../pages/Animles';
import Location from './Location';
import {AnimatePresence} from 'framer-motion'
import Map from './Map';
import RateNavBar from './RateNavBar';
import AnimalPage from './AnimalPage';
import useScrollToTop from '../hook/useScrollToTop';
import Theme from './Theme';
import Login from './Login';
import FeedBack from './FeedBack';
import UpdatePost from './UpdatePost';

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