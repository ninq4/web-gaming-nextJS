'use client'
import useBenefits from '@/Hooks/useBenefits';
import React from 'react';
import SkeletonCard from '../SkeletonCard/SkeletonCard';

const AboutCards = () => {

    const benefitsList = useBenefits()
  return (
    <>
      {benefitsList.length > 0
        ? benefitsList.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-full border border-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-[110px] h-[110px] flex items-center justify-center border border-white/70 text-accent rounded-full text-4xl font-semibold">
                  {item.attributes?.number}
                </div>
                <h3 className="text-center text-3xl">{item.attributes?.title}</h3>
                <p>{item.attributes?.description}</p>
              </div>
            );
          })
        : [1, 2, 3, 4].map((item) => {
            return <SkeletonCard key={item} />;
          })}
    </>
  );
};

export default AboutCards;
