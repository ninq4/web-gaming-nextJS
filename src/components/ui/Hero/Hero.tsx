import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';

const Hero = () => {
  return (
    <section id="Hero" className="w-full bg-hero bg-center bg-no-repeat">
      <div className="container mx-auto">
        <div className="w-full py-16">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
