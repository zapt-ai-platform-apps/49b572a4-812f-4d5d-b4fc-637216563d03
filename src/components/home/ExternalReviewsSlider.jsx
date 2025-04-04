import React, { useState, useEffect, useRef } from 'react';
import { ExternalReviewCard } from './ExternalReviewCard';
import { useReviews } from '../../hooks/useReviews';

const ExternalReviewsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const { reviews, isLoading, error } = useReviews();

  const resetAutoplayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    if (isAutoPlaying && reviews.length > 0) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % reviews.length);
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
  }, [isAutoPlaying, reviews.length]);

  useEffect(() => {
    resetAutoplayTimer();
  }, [activeSlide]);

  const handleNext = () => {
    if (reviews.length > 0) {
      setActiveSlide(prev => (prev + 1) % reviews.length);
    }
  };

  const handlePrev = () => {
    if (reviews.length > 0) {
      setActiveSlide(prev => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  const handleSlideSelect = (index) => {
    setActiveSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  if (isLoading) {
    return (
      <div className="relative mx-auto max-w-6xl">
        <div className="flex justify-center py-16">
          <div className="animate-pulse space-y-6 w-full">
            <div className="flex space-x-4 justify-center">
              {[1, 2].map(i => (
                <div key={i} className="bg-gray-200 h-64 w-full max-w-md rounded-lg"></div>
              ))}
            </div>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-gray-200 h-3 w-3 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center py-16">
          <div className="bg-red-50 p-4 rounded-lg text-red-500 inline-block">
            <p>Unable to load reviews. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center py-16">
          <p className="text-gray-500">No reviews available yet.</p>
        </div>
      </div>
    );
  }

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
              transform: `translateX(-${activeSlide * (100/reviews.length)}%)`,
              width: `${reviews.length * 100}%`
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={`${review.platform}-${index}`} 
                className="px-2"
                style={{ width: `${100/reviews.length}%` }}
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
            {reviews.map((review, index) => (
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
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideSelect(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === activeSlide ? 'bg-yellow-500' : 'bg-gray-300'
            } focus:outline-none`}
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