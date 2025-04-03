import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting contact form:', formData);
      const response = await fetch('/api/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'There was an error sending your message');
      }
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Sentry.captureException(error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="contact-form-container bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      {submitStatus ? (
        <div className={`text-center p-8 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
          <div className="mb-4">
            {submitStatus.success ? (
              <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            ) : (
              <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{submitStatus.success ? 'Message Sent!' : 'Error'}</h3>
          <p>{submitStatus.message}</p>
          {!submitStatus.success && (
            <button 
              onClick={() => setSubmitStatus(null)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer"
            >
              Try Again
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-300 box-border"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-300 box-border"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company / Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-300 box-border"
              placeholder="Your Company"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors duration-300 box-border"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary flex justify-center items-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''} cursor-pointer`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;