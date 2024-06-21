import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import itemsRate from '../data/datas.json'

import "swiper/css";
import 'swiper/css/navigation';
import ListRateFoodAndAnimal from "./ListRateFoodAndAnimal";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState } from "react";
import CustomModel from "./CustomModel";
import useWindowSize from "../utils/useWindowSize";
const RateFood = () => {
  const[showModelLogin,setShowModelLogin] = useState(false)

  useEffect(()=>{
    Aos.init()
  },[])
  const {width} = useWindowSize()
  return (
    <div className="max-w-6xl mx-auto p-4 font-serif pt-28">
      <h1 className=" text-center font-bold py-4 md:text-2xl">
        Sliding Image And Rate Food & Animals{" "}
      </h1>
      <div className="" data-aos="fade-up">
        <Swiper
          slidesPerView={width > 1024 ? 3.7 :  width > 770 ? 2.5 : width > 735 ? 2 :width > 600 ? 1.8 : 1.2 }
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {itemsRate.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ListRateFoodAndAnimal
                  {...item}
                  showModelLogin={showModelLogin}
                  setShowModelLogin={setShowModelLogin}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {showModelLogin ? (
        <div className="">
          {showModelLogin ? (
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
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default RateFood