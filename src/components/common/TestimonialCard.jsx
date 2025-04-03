import React from 'react';

const TestimonialCard = ({ quote, author, company, rating, avatar, avatarRequest }) => {
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

  return (
    <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
      
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