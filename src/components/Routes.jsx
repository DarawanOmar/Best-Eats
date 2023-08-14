import React from 'react'
import {  Routes , Route , useLocation} from "react-router-dom";
import BagOrder from "../components/BagOrder";
import Home from "../components/Home";
import Favoraite from "../components/Favoraite";
import About from "../components/About";
import Foods from "../components/Foods";
import FoodPage from "../components/FoodPage";
import ListFoods from '../pages/ListFoods';

import {AnimatePresence} from 'framer-motion'

const Routess = () => {
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
          <Route path='/listFoods' element={<ListFoods/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Routess