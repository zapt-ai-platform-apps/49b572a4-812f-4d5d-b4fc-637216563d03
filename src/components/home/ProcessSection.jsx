import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your brand, audience, and goals to develop a tailored strategy.'
    },
    {
      number: '02',
      title: 'Creative Development',
      description: 'Our team creates compelling brand elements and marketing materials aligned with your strategy.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all relevant channels, ensuring consistent brand messaging.'
    },
    {
      number: '04',
      title: 'Analysis & Optimization',
      description: 'We measure results, gather insights, and refine the approach to maximize effectiveness.'
    }
  ];

  return (
    <section className="process-section py-20 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ffde5922,_transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
            Our Approach
          </div>
          
          <h2 className="heading-lg mb-6 animate-slideUp">
            How We <span className="text-yellow-400">Create Success</span>
          </h2>
          
          <p className="text-lg text-gray-300 animate-fadeIn">
            Our proven four-step process ensures we deliver consistent results
            for every client we work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-card relative p-8 rounded-xl bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-5 -left-2 text-6xl font-bold text-yellow-400 opacity-25">{step.number}</div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-black rounded-full mb-6 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn">
          <div className="inline-block p-6 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl max-w-3xl">
            <p className="text-xl italic">
              "Our strategic approach ensures that every marketing initiative is purpose-driven, 
              measurable, and aligned with your long-term business goals."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;