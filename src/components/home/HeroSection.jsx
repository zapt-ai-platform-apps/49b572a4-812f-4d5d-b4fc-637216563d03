import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0.2);
      const transform = `translateY(${scrollY * 0.5}px)`;
      
      heroRef.current.style.setProperty('--scroll-opacity', opacity);
      heroRef.current.style.setProperty('--scroll-transform', transform);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center overflow-hidden" 
      style={{
        backgroundImage: 'url("PLACEHOLDER")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-image-request="modern marketing agency workspace with yellow accents, dark lighting, high quality"
    >
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-80"></div>
      
      <div className="absolute inset-0 hero-pattern"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="hero-content max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Building Brands That <br/>
            Create <span className="text-yellow-400 relative inline-block animate-pulse">
              Buzz
              <svg className="absolute -right-8 -top-8 w-16 h-16 text-yellow-400 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 8.5L21 9.5L16.5 13.5L18 20L12 17L6 20L7.5 13.5L3 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </h1>
          
          <div className="hero-actions animate-fadeIn">
            <Link to="/contact" className="btn-primary text-center text-lg">
              Let's Talk
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20 md:h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;