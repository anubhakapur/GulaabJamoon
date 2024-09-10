import React from 'react';
import india from '../../assets/images/india.jpg';
import travel from '../../assets/images/travel.jpeg';

const Complimentary = ({ scrollToForm }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            CORPORATE RETREAT PLANNING
          </h2>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Get a Complimentary Proposal
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Stressed about planning a retreat with no extra time? Why don't you
            let us do some of the heavy-lifting first, and put together a complimentary proposal that will provide you with ideal locations, activities, and costs for your upcoming offsite.
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition duration-300 w-full md:w-auto"
            onClick={scrollToForm}
          >
            Get a Complimentary Proposal
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
            <img
              src={travel}
              alt="Proposal Images"
              className="absolute top-0 left-0 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-lg shadow-md transform -rotate-6"
            />
            <img
              src={india}
              alt="More Images"
              className="absolute bottom-0 right-0 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-lg shadow-md transform rotate-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complimentary;
