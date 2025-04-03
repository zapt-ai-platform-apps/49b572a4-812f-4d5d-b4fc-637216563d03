import React from 'react';
import { Link } from 'react-router-dom';

const AboutSnapshot = () => {
  return (
    <section className="about-snapshot py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-snapshot-image relative animate-fadeIn">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1631089667980-7fe55b2abb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtYXJrZXRpbmclMjB0ZWFtJTIwaW4lMjBtb2Rlcm4lMjBvZmZpY2UlMkMlMjBkaXZlcnNlJTIwdGVhbSUyQyUyMHllbGxvdyUyMGFjY2VudHMlMkMlMjBoaWdoJTIwcXVhbGl0eXxlbnwwfHx8fDE3NDM3MTk4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="BuzzArketing Team"
                className="w-full h-auto"
                data-image-request="professional marketing team in modern office, diverse team, yellow accents, high quality"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-yellow-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -left-12 -top-12 w-56 h-56 border-4 border-yellow-400 rounded-full opacity-20 z-0"></div>
          </div>
          
          <div className="about-snapshot-content">
            <div className="section-badge inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
              About BuzzArketing
            </div>
            
            <h2 className="heading-lg mb-6 animate-slideUp">
              We're A Strategic <span className="text-yellow-500">Brand Marketing</span> Agency
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 animate-fadeIn">
              At BuzzArketing, we believe a strong, authentic identity is the key to long-term success. 
              We help businesses and charities build this foundation, transforming them into sustainable brands that last.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
              Our approach is strategic, data-driven, and tailored to your unique needs. We don't just create 
              marketing campaigns – we build comprehensive brand strategies that deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
              <Link to="/about" className="btn-secondary text-center">
                Our Story
              </Link>
              <Link to="/services" className="btn-outline-black text-center">
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;