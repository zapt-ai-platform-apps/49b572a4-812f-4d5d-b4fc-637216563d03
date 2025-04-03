import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section py-20 md:py-32 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.03)_20px,rgba(0,0,0,0.03)_40px)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6 text-black animate-slideUp">
            Ready to Create a Brand That <span className="relative">
              Stands Out?
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 128 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 4C38.6 4 12.6 1.5 0 0H128C115.4 1.5 89.3 4 64 4Z" className="fill-black opacity-20"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 mb-8 animate-fadeIn">
            Let's work together to build an authentic, impactful brand identity 
            that drives lasting growth and creates a genuine connection with your audience.
          </p>
          
          <div className="cta-actions flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
            <Link to="/contact" className="btn-black text-center">
              Get in Touch
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link to="/services" className="btn-outline-black text-center">
              Explore Services
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

export default CTASection;