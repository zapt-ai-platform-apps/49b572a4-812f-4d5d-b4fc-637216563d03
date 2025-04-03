import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Startup Marketing',
      description: 'We create scalable marketing strategies that build strong brand foundations, setting startups up for long-term success by reaching the right audience and establishing a solid market presence.',
      iconType: 'startup',
      features: [
        'Brand positioning strategy',
        'Marketing roadmap development',
        'Competitor analysis',
        'Growth-focused campaign planning'
      ]
    },
    {
      title: 'Identity Creation & Branding',
      description: 'We design unique and memorable brand identities that capture the essence of your business, helping you stand out and form lasting connections with your audience.',
      iconType: 'identity',
      features: [
        'Logo and visual identity design',
        'Brand voice and messaging',
        'Brand guidelines development',
        'Brand story crafting'
      ]
    },
    {
      title: 'Brand Pulse Checks',
      description: 'Our brand pulse checks offer a thorough evaluation of your brand\'s health, identifying strengths, weaknesses, and areas for improvement to keep you aligned with your audience and market trends.',
      iconType: 'pulse',
      features: [
        'Brand perception analysis',
        'Audience alignment assessment',
        'Competitive positioning review',
        'Quick-win recommendations'
      ]
    },
    {
      title: 'Enhanced Brand Analysis',
      description: 'We conduct deep-dive brand assessments, providing actionable insights to optimize your brand\'s strategy and uncover growth opportunities for sustained success.',
      iconType: 'analysis',
      features: [
        'Comprehensive market analysis',
        'Customer journey mapping',
        'Brand equity measurement',
        'Long-term strategic recommendations'
      ]
    },
    {
      title: 'Impactful Charity Campaigns',
      description: 'We develop awareness-driven marketing strategies for charities, helping you connect with supporters and amplify your message to drive meaningful impact.',
      iconType: 'charity',
      features: [
        'Donor engagement strategies',
        'Cause awareness campaigns',
        'Fundraising campaign development',
        'Impact storytelling'
      ]
    },
    {
      title: 'Content Marketing Strategy',
      description: 'Develop a comprehensive content plan that builds authority, engages your audience, and drives conversions through valuable, relevant content across multiple channels.',
      iconType: 'content',
      features: [
        'Content audit and gap analysis',
        'Editorial calendar development',
        'SEO-optimized content planning',
        'Content performance measurement'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ffde5922,_transparent_70%)]"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-slideUp">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300 animate-fadeIn">
              Strategic solutions tailored to help your brand create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-yellow-400 mb-12">
              <h2 className="heading-md mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700">
                At BuzzArketing, we're your strategic partner in building a brand that creates buzz. Specializing in project marketing, we craft tailored strategies that drive growth and elevate your impact. With a mix of psychology and data-driven insights, we unlock your brand's full potential.
              </p>
            </div>
            
            <p className="text-lg text-gray-700 text-center">
              Below you'll find our core service offerings, each customizable to your specific needs and goals.
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="heading-md mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-12 rounded-lg flex items-center justify-center shadow-inner">
                  <div className="bg-white w-32 h-32 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110">
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
                      {service.iconType === 'content' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 transform translate-x-1/3 translate-y-1/3"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-12 text-center">Our Process</h2>
            
            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-0">
                <div className="relative pl-12 md:pl-0 md:pb-16">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-2 md:text-right md:pr-12">
                      <h3 className="heading-sm mb-2 md:mb-4">1. Discovery</h3>
                      <p className="text-gray-700">
                        We start by understanding your business, goals, and audience through in-depth conversations and research. This foundation ensures our strategies align with your unique vision.
                      </p>
                    </div>
                    <div className="absolute md:static left-0 top-0 md:flex md:justify-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg relative z-10">1</div>
                    </div>
                    <div className="mt-4 md:mt-0 md:col-span-2 md:pl-12">
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Stakeholder interviews</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Market research</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Audience analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0 md:pb-16">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-2 md:text-right md:pr-12">
                      <h3 className="heading-sm mb-2 md:mb-4">2. Strategy Development</h3>
                      <p className="text-gray-700">
                        Based on our discoveries, we create a tailored strategy that leverages your strengths, addresses challenges, and positions your brand for long-term success.
                      </p>
                    </div>
                    <div className="absolute md:static left-0 top-0 md:flex md:justify-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg relative z-10">2</div>
                    </div>
                    <div className="mt-4 md:mt-0 md:col-span-2 md:pl-12">
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Strategic planning workshops</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Campaign structure development</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>KPI definition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0 md:pb-16">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-2 md:text-right md:pr-12">
                      <h3 className="heading-sm mb-2 md:mb-4">3. Implementation</h3>
                      <p className="text-gray-700">
                        We execute with precision, deploying the right mix of marketing tactics to bring your brand strategy to life and connect with your target audience.
                      </p>
                    </div>
                    <div className="absolute md:static left-0 top-0 md:flex md:justify-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg relative z-10">3</div>
                    </div>
                    <div className="mt-4 md:mt-0 md:col-span-2 md:pl-12">
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Campaign launch</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Content creation & distribution</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Channel optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-2 md:text-right md:pr-12">
                      <h3 className="heading-sm mb-2 md:mb-4">4. Measurement & Refinement</h3>
                      <p className="text-gray-700">
                        We continuously monitor performance, gather feedback, and make data-driven adjustments to optimize results and ensure your brand's sustainable growth.
                      </p>
                    </div>
                    <div className="absolute md:static left-0 top-0 md:flex md:justify-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg relative z-10">4</div>
                    </div>
                    <div className="mt-4 md:mt-0 md:col-span-2 md:pl-12">
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Performance analytics</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Strategy adjustment</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>ROI reporting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.03)_20px,rgba(0,0,0,0.03)_40px)]"></div>
        
        <div className="container text-center relative z-10">
          <h2 className="heading-lg mb-6 text-black">Ready for a Free Consultation?</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help elevate your brand and drive meaningful results.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get a Free Consultation
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;