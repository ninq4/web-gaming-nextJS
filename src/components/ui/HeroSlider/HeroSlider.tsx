'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantMotion';

//style for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from '../CustomButton/CustomButton';
import useSlider from '@/Hooks/useSliders';

const HeroSlider = () => {


  const getSlider = useSlider()

  return (
    <Swiper className="w-full h-full">
      {getSlider.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="w-full md:w-1/2">
              {item.attributes?.title.length > 0 ? (<motion.h2
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="mb-8 md:text-8xl">
                {item.attributes?.title}
              </motion.h2>) : (<div className='rounded-xl mb-8 w-[100px] h-[250px] bg-zinc-300 animate-pulse' />)}
              {item.attributes?.description.length > 0 ? (<motion.p
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="text-base md:text-xl mb-12">{`${item.attributes?.description.length > 189
                  ? item.attributes?.description.slice(0, 189) + '...'
                  : item.attributes?.description
                  }`}</motion.p>) : (<div className='rounded-xl mb-12 w-full h-[250px] bg-zinc-500 animate-pulse' />)}
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
