import React, { useEffect, useState, useRef } from 'react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { value: 150, suffix: '+', label: 'Brands Transformed' },
    { value: 97, suffix: '%', label: 'Client Satisfaction' },
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 30, suffix: 'M+', label: 'Campaign Reach' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="statistics-section py-12 bg-white relative overflow-hidden border-t border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item text-center animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-value text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {isVisible ? (
                  <Counter end={stat.value} duration={2000} />
                ) : (
                  '0'
                )}
                {stat.suffix}
              </div>
              <div className="stat-label text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTime = useRef(null);
  
  useEffect(() => {
    if (end <= 0) return;
    
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      
      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(percentage * end);
      
      if (countRef.current !== value) {
        countRef.current = value;
        setCount(value);
      }
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTime.current = null;
    };
  }, [end, duration]);
  
  return count;
};

export default StatisticsSection;