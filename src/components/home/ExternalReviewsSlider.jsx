import React, { useState, useEffect, useRef } from 'react';
import { ExternalReviewCard } from './ExternalReviewCard';

const ExternalReviewsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Sample Google Maps reviews
  const googleReviews = [
    {
      platform: 'google',
      author: 'David Thompson',
      rating: 5,
      date: '2 months ago',
      text: "BuzzArketing completely transformed our brand identity. Their strategic approach to marketing helped us stand out in a competitive industry. The team's creativity and attention to detail exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      avatarRequest: "professional looking business man with beard"
    },
    {
      platform: 'google',
      author: 'Jennifer Williams',
      rating: 5,
      date: '1 month ago',
      text: "Working with BuzzArketing was a game-changer for our business. They understood our needs perfectly and delivered a marketing strategy that generated real results. Highly recommend their services!",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      avatarRequest: "professional woman with blonde hair smiling"
    },
  ];

  // Sample Trustpilot reviews
  const trustpilotReviews = [
    {
      platform: 'trustpilot',
      author: 'Alex Richardson',
      rating: 5,
      date: '3 weeks ago',
      text: "The team at BuzzArketing provided exceptional service. They were responsive, creative, and delivered a comprehensive marketing strategy that perfectly aligned with our brand values. The results speak for themselves!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      avatarRequest: "middle aged man with glasses professional"
    },
    {
      platform: 'trustpilot',
      author: 'Samantha Lee',
      rating: 4,
      date: '1 month ago',
      text: "BuzzArketing helped us redefine our brand strategy. They have a talented team that really understands the digital marketing landscape. Great communication throughout the project and strong results.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      avatarRequest: "asian woman professional headshot"
    },
  ];

  // Combine reviews
  const allReviews = [...googleReviews, ...trustpilotReviews];

  const resetAutoplayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % allReviews.length);
      }, 5000);
    }
  };

  useEffect(() => {
    resetAutoplayTimer();
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, allReviews.length]);

  useEffect(() => {
    resetAutoplayTimer();
  }, [activeSlide]);

  const handleNext = () => {
    setActiveSlide(prev => (prev + 1) % allReviews.length);
  };

  const handlePrev = () => {
    setActiveSlide(prev => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const handleSlideSelect = (index) => {
    setActiveSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Desktop view - show multiple cards */}
      <div className="hidden md:block">
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          ref={sliderRef}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${activeSlide * (100/allReviews.length)}%)`,
              width: `${allReviews.length * 100}%`
            }}
          >
            {allReviews.map((review, index) => (
              <div 
                key={`${review.platform}-${index}`} 
                className="px-2"
                style={{ width: `${100/allReviews.length}%` }}
              >
                <ExternalReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view - show one card at a time */}
      <div className="md:hidden">
        <div className="relative overflow-hidden h-[280px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {allReviews.map((review, index) => (
              <div 
                key={`${review.platform}-${index}`} 
                className="w-full flex-shrink-0"
              >
                <ExternalReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none -ml-4 z-10 cursor-pointer"
        aria-label="Previous review"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none -mr-4 z-10 cursor-pointer"
        aria-label="Next review"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {allReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideSelect(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeSlide ? 'bg-yellow-500' : 'bg-gray-300'
            } focus:outline-none cursor-pointer`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay toggle */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={toggleAutoPlay} 
          className="text-sm text-gray-600 flex items-center gap-2 hover:text-yellow-600 transition-colors focus:outline-none cursor-pointer"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Pause Slideshow
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Play Slideshow
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ExternalReviewsSlider;