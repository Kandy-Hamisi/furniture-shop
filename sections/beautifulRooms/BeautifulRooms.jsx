'use client'

import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Pagination,
    FreeMode,
    Autoplay
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { beautifulRooms } from '@/constants';
import { RoomCard } from '@/components';

// const swiper = new Swiper('.swiper', {
//     modules: [ Navigation, Pagination, EffectCards ]
// })

// console.log(swiper);


const BeautifulRooms = () => {
  return (
    <section className='max-container flex items-center gap-12'>
      <div>
        <h3 className='font-bold mb-4 text-4xl flex flex-col'><span>50+ Beautiful rooms</span><span>inspiration</span></h3>
        <p className='mb-4'>Our designers already have made a lot of beautiful prototype of rooms that inspire you</p>
        <button className='cursor-pointer p-2 bg-safari-deep-brown text-white'>Explore More</button>
      </div>
      <div className='flex gap-12'>
        
        <div>
            <Swiper
                grabCursor={true}
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, FreeMode, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    beautifulRooms.map((room) => (
                        <SwiperSlide key={room.id}>
                            <RoomCard {...room} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BeautifulRooms
