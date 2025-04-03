import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';

const Home = () => {
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

  const testimonials = [
    {
      quote: "BuzzArketing transformed our approach to branding. Their strategic insights helped us establish a cohesive identity that resonates with our audience.",
      author: "Sarah Johnson",
      company: "Tech Innovators Ltd",
      rating: 5
    },
    {
      quote: "Working with the BuzzArketing team was a game-changer for our charity. They helped us communicate our mission more effectively and reach more donors.",
      author: "Michael Chen",
      company: "Hope Foundation",
      rating: 5
    },
    {
      quote: "The brand analysis we received provided actionable insights that have had a real impact on our business growth. Highly recommended!",
      author: "Emma Roberts",
      company: "Sustainable Solutions",
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Building Brands That Create <span className="text-yellow-400">Buzz</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We help businesses and charities build authentic, sustainable brands that leave a lasting impression.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">About Us</h2>
            <p className="text-lg text-gray-700">
              At BuzzArketing, we believe a strong, authentic identity is the key to long-term success. We help businesses and charities build this foundation, transforming them into sustainable brands that last.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Strategic, project-based marketing solutions tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                iconType={service.iconType}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-block">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. See what our clients have to say about working with BuzzArketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <a 
              href="https://uk.trustpilot.com/review/buzzarketing.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.99 11.5c0-.31-.26-.56-.56-.56h-5.66l-1.75-5.61a.562.562 0 00-1.06 0L10.21 10.94H4.55c-.31 0-.56.25-.56.56 0 .18.09.35.23.45l4.47 3.18-1.75 5.28c-.1.29.15.57.45.57.1 0 .2-.03.29-.9l4.54-3.25 4.54 3.25c.09.06.19.09.29.09.3 0 .56-.28.45-.57l-1.75-5.28 4.47-3.18c.14-.1.23-.27.23-.45z" />
              </svg>
              Trustpilot Reviews
            </a>
            <a 
              href="https://maps.app.goo.gl/XqAut5SwwSDLRJrBA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 11.5a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5zm0-9c3.6 0 6.5 2.9 6.5 6.5 0 3.9-4.5 9.5-6.5 12-2-2.5-6.5-8.1-6.5-12a6.5 6.5 0 016.5-6.5m0-2.5a9 9 0 00-9 9c0 5.3 7 14.3 9 16.5 2-2.3 9-11.3 9-16.5a9 9 0 00-9-9z" />
              </svg>
              Google Maps Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yellow-400">
        <div className="container text-center">
          <h2 className="heading-lg mb-6 text-black">Ready to Create a Brand That Stands Out?</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
            Let's work together to build an authentic, impactful brand identity that drives lasting growth.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;