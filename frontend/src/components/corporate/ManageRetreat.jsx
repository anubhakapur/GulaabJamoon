import React from 'react';

const ManageRetreat = () => {
  return (
    <div className="bg-white py-12 font-['Poppins',_sans-serif]">
      <div className="container mx-auto text-center px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 font-serif">
          Managing a retreat by yourself can be overwhelming.
          <br /> Gulaab Jamoon makes it simple.
        </h2>
        <div className="w-16 h-1 bg-yellow-600 mx-auto mb-10"></div>
        
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="bg-yellow-200 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-yellow-400 py-4">
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-900">
                Retreat Planning By Yourself
              </h3>
            </div>
            <ul className="p-6 space-y-4 text-left h-[500px] sm:h-[450px] overflow-y-auto">
              <li className="flex items-center"><span className="mr-2">📋</span> What's the plan?</li>
              <li className="flex items-center"><span className="mr-2">🏨</span> Where are we staying?</li>
              <li className="flex items-center"><span className="mr-2">✈️</span> Who's booking flights?</li>
              <li className="flex items-center"><span className="mr-2">📝</span> How do we operate the meetings?</li>
              <li className="flex items-center"><span className="mr-2">📄</span> What's a BEO?</li>
              <li className="flex items-center"><span className="mr-2">🎉</span> What activities are we doing?</li>
              <li className="flex items-center"><span className="mr-2">💸</span> How are we tracking expenses?</li>
              <li className="flex items-center"><span className="mr-2">😅</span> Will I even get to enjoy the retreat?</li>
              <li className="flex items-center"><span className="mr-2">🎯</span> How do we ensure it runs perfectly?</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-green-200 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-green-700 py-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Retreat Planning with Gulaab Jamoon
              </h3>
            </div>
            <ul className="p-6 space-y-4 text-left h-[500px] sm:h-[450px] overflow-y-auto">
              <li className="flex items-center"><span className="mr-2">📋</span> Moniker's Proven Expert Processes</li>
              <li className="flex items-center"><span className="mr-2">🌍</span> Specialized Location Sourcing Team</li>
              <li className="flex items-center"><span className="mr-2">✈️</span> Flight Booking Specialists</li>
              <li className="flex items-center"><span className="mr-2">📽️</span> A/V & Meeting Production</li>
              <li className="flex items-center"><span className="mr-2">🎨</span> Event Concept & Execution</li>
              <li className="flex items-center"><span className="mr-2">🎉</span> Activity Recommendation & Booking</li>
              <li className="flex items-center"><span className="mr-2">💼</span> Transparent Budgeting & Invoicing</li>
              <li className="flex items-center"><span className="mr-2">👥</span> 24/7 On-Site Staff</li>
              <li className="flex items-center"><span className="mr-2">🎯</span> Absolutely Flawless Execution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRetreat;
