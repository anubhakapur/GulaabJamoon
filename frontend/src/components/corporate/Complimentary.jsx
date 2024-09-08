import React from 'react';

const Complimentary = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-xl">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">CORPORATE RETREAT PLANNING</h2>
          <h1 className="text-4xl font-serif font-bold mb-4">Get a Complimentary Proposal</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Stressed about planning a retreat with no extra time? Why don't you let us do some of the heavy-lifting first, and put together a complimentary proposal that will provide you with ideal locations, activities and costs for your upcoming offsite.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md transition duration-300 w-full md:w-auto">
            Get a Complimentary Proposal
          </button>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="relative w-64 h-64 mx-auto">
            <img 
              src="/api/placeholder/300/300?text=Proposal+Images" 
              alt="Proposal Images" 
              className="absolute top-0 left-0 w-56 h-56 object-cover rounded-lg shadow-md transform -rotate-6"
            />
            <img 
              src="/api/placeholder/300/300?text=More+Images" 
              alt="More Images" 
              className="absolute bottom-0 right-0 w-56 h-56 object-cover rounded-lg shadow-md transform rotate-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complimentary;