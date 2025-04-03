import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import AboutSnapshot from '../components/home/AboutSnapshot';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';
import FeaturedCaseStudies from '../components/home/FeaturedCaseStudies';
import StatisticsSection from '../components/home/StatisticsSection';

const Home = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <StatisticsSection />
      <AboutSnapshot />
      <ServicesSection />
      <ProcessSection />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;