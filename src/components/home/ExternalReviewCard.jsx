import React from 'react';

export const ExternalReviewCard = ({ review }) => {
  const { platform, author, rating, date, text, avatar, avatarRequest } = review;
  
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 
            platform === 'trustpilot' ? 'text-green-500' : 'text-yellow-500' 
            : 'text-gray-300'}`}
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

  const renderPlatformBadge = () => {
    if (platform === 'google') {
      return (
        <div className="absolute top-4 right-4 flex items-center">
          <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          <span className="text-xs font-medium text-gray-600">Google Review</span>
        </div>
      );
    } else if (platform === 'trustpilot') {
      return (
        <div className="absolute top-4 right-4 flex items-center">
          <svg className="h-5 w-5 mr-1 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.99 11.5c0-.31-.26-.56-.56-.56h-5.66l-1.75-5.61a.562.562 0 00-1.06 0L10.21 10.94H4.55c-.31 0-.56.25-.56.56 0 .18.09.35.23.45l4.47 3.18-1.75 5.28c-.1.29.15.57.45.57.1 0 .2-.03.29-.9l4.54-3.25 4.54 3.25c.09.06.19.09.29.09.3 0 .56-.28.45-.57l-1.75-5.28 4.47-3.18c.14-.1.23-.27.23-.45z" />
          </svg>
          <span className="text-xs font-medium text-gray-600">Trustpilot Review</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg h-full flex flex-col relative border-l-4 ${
      platform === 'trustpilot' ? 'border-green-500' : 'border-blue-500'
    }`}>
      {renderPlatformBadge()}
      
      <div className="mb-4 flex">
        {renderStars()}
        <span className="ml-2 text-xs text-gray-500">{date}</span>
      </div>
      
      <p className="text-gray-700 italic mb-6 flex-grow">{text}</p>
      
      <div className="flex items-center mt-auto">
        <img 
          src={avatar} 
          alt={author} 
          className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-gray-200"
          data-image-request={avatarRequest}
        />
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-xs text-gray-500">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};