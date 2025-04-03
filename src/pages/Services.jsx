import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Startup Marketing',
      description: 'We create scalable marketing strategies that build strong brand foundations, setting startups up for long-term success by reaching the right audience and establishing a solid market presence.',
      iconType: 'startup'
    },
    {
      title: 'Identity Creation & Branding',
      description: 'We design unique and memorable brand identities that capture the essence of your business, helping you stand out and form lasting connections with your audience.',
      iconType: 'identity'
    },
    {
      title: 'Brand Pulse Checks',
      description: 'Our brand pulse checks offer a thorough evaluation of your brand\'s health, identifying strengths, weaknesses, and areas for improvement to keep you aligned with your audience and market trends.',
      iconType: 'pulse'
    },
    {
      title: 'Enhanced Brand Analysis',
      description: 'We conduct deep-dive brand assessments, providing actionable insights to optimize your brand\'s strategy and uncover growth opportunities for sustained success.',
      iconType: 'analysis'
    },
    {
      title: 'Impactful Charity Campaigns',
      description: 'We develop awareness-driven marketing strategies for charities, helping you connect with supporters and amplify your message to drive meaningful impact.',
      iconType: 'charity'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Strategic solutions tailored to help your brand create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700">
              At BuzzArketing, we're your strategic partner in building a brand that creates buzz. Specializing in project marketing, we craft tailored strategies that drive growth and elevate your impact. With a mix of psychology and data-driven insights, we unlock your brand's full potential. Here's how we can help:
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`bg-gray-50 p-12 rounded-lg flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
                    {service.iconType === 'startup' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {service.iconType === 'identity' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {service.iconType === 'pulse' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {service.iconType === 'analysis' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {service.iconType === 'charity' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="heading-md mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-12 text-center">Our Process</h2>
            
            <div className="space-y-12">
              <div className="relative pl-12 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-6">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">1</div>
                  </div>
                  <div className="mt-4 md:mt-0 md:col-span-3">
                    <h3 className="heading-sm mb-2">Discovery</h3>
                    <p className="text-gray-700">
                      We start by understanding your business, goals, and audience through in-depth conversations and research. This foundation ensures our strategies align with your unique vision.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-12 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-6">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">2</div>
                  </div>
                  <div className="mt-4 md:mt-0 md:col-span-3">
                    <h3 className="heading-sm mb-2">Strategy Development</h3>
                    <p className="text-gray-700">
                      Based on our discoveries, we create a tailored strategy that leverages your strengths, addresses challenges, and positions your brand for long-term success.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-12 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-6">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">3</div>
                  </div>
                  <div className="mt-4 md:mt-0 md:col-span-3">
                    <h3 className="heading-sm mb-2">Implementation</h3>
                    <p className="text-gray-700">
                      We execute with precision, deploying the right mix of marketing tactics to bring your brand strategy to life and connect with your target audience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-12 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-6">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">4</div>
                  </div>
                  <div className="mt-4 md:mt-0 md:col-span-3">
                    <h3 className="heading-sm mb-2">Measurement & Refinement</h3>
                    <p className="text-gray-700">
                      We continuously monitor performance, gather feedback, and make data-driven adjustments to optimize results and ensure your brand's sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yellow-400">
        <div className="container text-center">
          <h2 className="heading-lg mb-6 text-black">Ready for a Free Consultation?</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help elevate your brand and drive meaningful results.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;