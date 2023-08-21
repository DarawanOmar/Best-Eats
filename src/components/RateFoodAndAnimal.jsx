import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import itemsRate from '../data/datas.json'

import "swiper/css";
import 'swiper/css/navigation';
import ListRateFoodAndAnimal from "./ListRateFoodAndAnimal";

import Aos from 'aos'
import 'aos/dist/aos.css'

const RateFood = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='max-w-6xl mx-auto p-4 font-serif pt-28'>
        <h1 className=" text-center font-bold py-4 md:text-2xl">Sliding Image And Rate Food & Animals  </h1>
        <div className="" data-aos="fade-up">
            <Swiper         
              slidesPerView={2}
              spaceBetween={5}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
            >
                {itemsRate.map(item=>{
                    return <SwiperSlide key={item.id}> <ListRateFoodAndAnimal  {...item}/> </SwiperSlide>
                })}
            </Swiper>
        </div>

        
    </div>
  )
}

export default RateFood