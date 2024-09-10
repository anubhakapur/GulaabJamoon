import React from 'react';
import './WhatHelp.css';
import retreat from '../../assets/images/retreat.webp';
import incentive from '../../assets/images/incentive.jpg';
import skos from '../../assets/images/skos.jpg';

const WhatHelp = ({ scrollToForm }) => {
  const images = [retreat, incentive, skos]; // Array to hold the images in order

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-4">
          CONNECT YOUR TEAM
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-center font-bold mb-6">
          What Can We Help You Plan?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Whether it's a corporate retreat to take your team offsite, or a President's Club type incentive trip to celebrate your Top Performers, we can help your team come together.
        </p>
        <div className="h-1 w-16 bg-yellow-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Corporate Retreats', 'Incentive Trips', 'Company All-Hands & SKOs'].map((title, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group font-['Playfair_Display',_serif]">
              <img 
                src={images[index]}  // Dynamically load the image based on the index
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
                  <button 
                    className="wave-btn relative overflow-hidden border-2 border-white text-white px-6 py-2 rounded-none text-sm font-semibold transition-colors duration-300"
                    onClick={scrollToForm} // Call scrollToForm on button click
                  >
                    <span className="relative z-10">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatHelp;
