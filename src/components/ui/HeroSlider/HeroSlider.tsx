'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//style for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from '../CustomButton/CustomButton';

const HeroSlider = () => {
  const slideData = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      desription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reprehenderit at eligendi fugiat nulla optio nemo eum excepturi tenetur, neque ipsa distinctio nesciunt blanditiis quia dolore ut iusto cumque consequatur',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      desription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reprehenderit at eligendi fugiat nulla optio nemo eum excepturi tenetur, neque ipsa distinctio nesciunt blanditiis quia dolore ut iusto cumque consequatur',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      desription:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reprehenderit at eligendi fugiat nulla optio nemo eum excepturi tenetur, neque ipsa distinctio nesciunt blanditiis quia dolore ut iusto cumque consequatur',
    },
  ];
  return (
    <Swiper className="w-full h-full">
      {slideData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <h2> {item.title}</h2>
            <p>{item.desription}</p>
            <CustomButton containerStyle='w-[200px] h-[60px]' text='Подробнее'/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
