import React from 'react';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Ready to build a brand that creates buzz? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-lg mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have a question about our services? Ready to start your brand journey? Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Email Us Directly</h3>
                  <a 
                    href="mailto:hello@buzzarketing.com" 
                    className="text-yellow-600 hover:text-yellow-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@buzzarketing.com
                  </a>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Reviews</h3>
                  <div className="flex flex-col space-y-4">
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
                      href="https://maps.app.goo.gl/DJvYbnpdMHt2orB56" 
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
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Contact Form</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Find Us</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.593508942175!2d-0.1270243!3d51.5371528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4a8a1adab7%3A0xb4be07e530884d54!2sKings%20Cross%2C%20London!5e0!3m2!1sen!2suk!4v1627385387619!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;