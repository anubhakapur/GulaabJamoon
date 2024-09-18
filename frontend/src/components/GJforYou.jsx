import React from 'react';

const GJforYou = () => {
  const categories = [
    { title: 'TRIPS & TREKS', image: '/api/placeholder/400/300' },
    { title: 'EVENTS', image: '/api/placeholder/400/300' },
    { title: 'IN-CITY XPERIENCES', image: '/api/placeholder/400/300' },
    { title: 'COMMUNITY', image: '/api/placeholder/400/300' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-1">
          <span className="text-yellow-400 border-t-2 border-b-2 border-yellow-400 py-1">GJ</span>
          <span className="text-blue-400 ml-2">FOR YOU</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 uppercase mt-1">Choose your style:</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {categories.map((category, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg h-48 md:h-64">
            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start p-4">
              <h3 className="text-white text-xl md:text-2xl font-bold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/4 overflow-hidden z-[-1]">
        <img src="/api/placeholder/1200/300" alt="Palm Trees" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
};

export default GJforYou;