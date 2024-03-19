import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';

const Hero = () => {
  return (
    <section className="w-full bg-hero bg-cover bg-center bg-no-repeat" id="hero">
      <div className="container mx-auto">
        <div className="w-full py-24">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
