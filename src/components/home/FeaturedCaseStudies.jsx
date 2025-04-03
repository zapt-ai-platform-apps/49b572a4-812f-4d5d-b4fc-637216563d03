import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      title: 'Brand Transformation',
      subtitle: 'Tech Startup',
      description: 'How we helped a tech startup rebrand and achieve 150% increase in user acquisition.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      imageRequest: 'modern tech office with yellow branding elements, high quality',
      color: 'bg-blue-500'
    },
    {
      title: 'Charity Campaign',
      subtitle: 'Hope Foundation',
      description: 'Creating an impactful campaign that raised over $200,000 for a local charity.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      imageRequest: 'charity fundraising event with diverse people, high quality',
      color: 'bg-green-500'
    },
    {
      title: 'Market Expansion',
      subtitle: 'Sustainable Products',
      description: 'Strategic marketing plan that helped an eco-friendly brand enter three new markets.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
      imageRequest: 'sustainable product line with eco-friendly packaging, high quality',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="case-studies-section py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#ffde5922,_transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
            Success Stories
          </div>
          
          <h2 className="heading-lg mb-6 animate-slideUp">
            Featured <span className="text-yellow-500">Case Studies</span>
          </h2>
          
          <p className="text-lg text-gray-700 animate-fadeIn">
            Explore how we've helped businesses and organizations transform their brands
            and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="case-study-card group relative rounded-xl overflow-hidden shadow-xl h-96 transform transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  data-image-request={study.imageRequest}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${study.color}`}>
                  {study.subtitle}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {study.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;