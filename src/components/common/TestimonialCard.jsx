import React from 'react';

const TestimonialCard = ({ quote, author, company, rating, avatar, avatarRequest, icon }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    switch(icon) {
      case 'chart':
        return (
          <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-400 opacity-30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm0-12H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm14 6h-6a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm0-6h-6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
            </svg>
          </div>
        );
      case 'heart':
        return (
          <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-400 opacity-30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        );
      case 'leaf':
        return (
          <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-400 opacity-30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3a1 1 0 0 0-.5-.87 1 1 0 0 0-1 0C17.83 3.17 13.62 5 10.5 5a9.09 9.09 0 0 1-4.5-1V3a1 1 0 0 0-2 0v16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0A15.9 15.9 0 0 1 10.5 18a16.9 16.9 0 0 1 5 .81 1 1 0 0 0 .5.19 1 1 0 0 0 .5-.19A15.9 15.9 0 0 1 21.5 18 1 1 0 0 0 22 17V4a1 1 0 0 0-1-1Z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
      
      {renderIcon()}
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex">
          {renderStars()}
        </div>
        <div className="text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      
      <div className="testimonial-content flex-grow">
        <blockquote className="text-gray-700 italic mb-6">"{quote}"</blockquote>
      </div>
      
      <div className="testimonial-author flex items-center">
        <div className="author-avatar mr-4">
          <img 
            src={avatar} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
            data-image-request={avatarRequest}
          />
        </div>
        <div>
          <p className="font-bold text-gray-800">{author}</p>
          {company && <p className="text-gray-600 text-sm">{company}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;