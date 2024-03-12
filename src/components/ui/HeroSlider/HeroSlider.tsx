'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantMotion';

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
            <div className="w-full md:w-1/2">
              <motion.h2
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className=" mb-8 mb:text-8xl">
                {' '}
                {item.title}
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-base md:text-xl mb-12">{`${
                item.desription.length > 189
                  ? item.desription.slice(0, 189) + '...'
                  : item.desription
              }`}</motion.p>
            </div>
            <div className="">
              <CustomButton containerStyle="w-[200px] h-[60px]" text="Подробнее" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
