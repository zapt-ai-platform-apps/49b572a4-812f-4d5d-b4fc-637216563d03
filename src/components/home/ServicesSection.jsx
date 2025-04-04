import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../common/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Startup Marketing',
      description: 'Helping startups build scalable strategies and strong brand foundations.',
      iconType: 'startup'
    },
    {
      title: 'Identity Creation & Branding',
      description: 'Crafting memorable brand identities that set you apart.',
      iconType: 'identity'
    },
    {
      title: 'Brand Pulse Checks',
      description: 'Evaluating your brand\'s health and identifying opportunities for improvement.',
      iconType: 'pulse'
    },
    {
      title: 'Enhanced Brand Analysis',
      description: 'Assessing your brand\'s current state and providing actionable insights for growth.',
      iconType: 'analysis'
    },
    {
      title: 'Impactful Charity Campaigns',
      description: 'Producing effective charity campaigns to raise awareness and drive engagement.',
      iconType: 'charity'
    }
  ];

  return (
    <section className="services-section py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute left-0 bottom-1/3 w-80 h-80 bg-yellow-400 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
            Core Services Overview
          </div>
          
          <h2 className="heading-lg mb-6 animate-slideUp">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fadeUp" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                iconType={service.iconType}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeIn">
          <Link to="/services" className="btn-secondary inline-block">
            Explore All Services
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;