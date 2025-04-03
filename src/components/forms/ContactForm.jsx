import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all fields',
        isError: true,
        isSubmitting: false
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address',
        isError: true,
        isSubmitting: false
      });
      return;
    }
    
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true
    });
    
    // Simulating form submission - in a real app, you would send to backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        message: 'Thank you for your message! We\'ll get back to you soon.',
        isError: false,
        isSubmitting: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        message: 'Failed to send message. Please try again later.',
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 box-border focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 box-border focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your email address"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 rounded-md border border-gray-300 box-border focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      
      {formStatus.message && (
        <div className={`p-3 rounded-md ${formStatus.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
          {formStatus.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={formStatus.isSubmitting}
        className="btn-primary w-full flex items-center justify-center"
      >
        {formStatus.isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;