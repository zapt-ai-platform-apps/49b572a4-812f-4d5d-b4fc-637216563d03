import React from 'react';
import ExternalReviewsSlider from './ExternalReviewsSlider';

const TestimonialsSection = () => {
  // External review platforms
  return (
    <section className="testimonials-section py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
            Testimonials & Trust Signals
          </div>
          
          <h2 className="heading-lg mb-6 animate-slideUp">
            What Our Clients <span className="text-yellow-500">Say About Us</span>
          </h2>
        </div>
        
        {/* External reviews slider component */}
        <ExternalReviewsSlider />
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 animate-fadeIn">
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
  );
};

export default TestimonialsSection;