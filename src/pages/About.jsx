import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Get to know the team behind BuzzArketing and our approach to building impactful brands.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2020, BuzzArketing is a strategic, project marketing agency dedicated to helping businesses and charities build powerful, lasting brand identities. We combine data-driven insights with an understanding of human psychology to create marketing strategies that go beyond the ordinary.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Rather than offering one-off campaigns, we specialize in long-term partnerships, tailoring our approach to unlock each client's unique potential. Our goal is to drive lasting growth through a deep understanding of both your brand and audience.
              </p>
              <div className="my-12 bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
                <p className="text-xl font-medium italic text-gray-800">
                  "We don't just create marketing; we build sustainable brand foundations that drive long-term success."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-12 text-center">Our Philosophy</h2>
            
            <p className="text-lg text-gray-700 mb-10 text-center">
              At BuzzArketing, we believe marketing is about more than just promotions, it's about understanding your brand's essence and building authentic connections with your audience. Our philosophy is centered on three core principles:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
                <p className="text-gray-700">
                  We craft strategies that reflect your brand's true values, ensuring every campaign feels genuine.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-700">
                  We design long-term strategies that deliver ongoing success and evolve with your business.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategic Insight</h3>
                <p className="text-gray-700">
                  We fuse data-driven marketing with a deep understanding of consumer behavior to create campaigns that resonate and deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yellow-400">
        <div className="container text-center">
          <h2 className="heading-lg mb-6 text-black">Ready to Build Your Brand?</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
            Let's work together to create a brand identity that authentically represents your values and resonates with your audience.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;