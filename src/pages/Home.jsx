import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSnapshot from '../components/home/AboutSnapshot';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutSnapshot />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;