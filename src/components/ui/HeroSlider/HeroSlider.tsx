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
  const SlideData = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat incidunt? Facere ad, animi quas recusandae fuga commodi iusto officiis consequatur, sed quisquam atque?',
    },
  ];

  return (
    <Swiper className="w-full h-full">
      {SlideData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="w-full md:w-1/2">
              <motion.h2
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="mb-8 md:text-8xl">
                {item.title}
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="text-base md:text-xl mb-12">{`${
                item.description.length > 189
                  ? item.description.slice(0, 189) + '...'
                  : item.description
              }`}</motion.p>
              <motion.div
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}>
                <CustomButton containerStyle={'w-[170px] h-[50px]'} text="Подробнее" />
              </motion.div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
