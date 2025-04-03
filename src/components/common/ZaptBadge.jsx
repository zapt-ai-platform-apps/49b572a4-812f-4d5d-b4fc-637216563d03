import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 left-4 z-10">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs bg-gray-900 text-white px-2 py-1 rounded-md flex items-center shadow-md hover:bg-gray-800 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
};

export default ZaptBadge;