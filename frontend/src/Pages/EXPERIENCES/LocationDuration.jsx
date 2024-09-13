import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function LocationDuration({ location, duration }) {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-between bg-white p-8 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Heading Section */}
      <div className="w-full mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Location & Duration</h2>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Location Box */}
        <div className="w-full sm:w-1/2 flex items-center mb-6 sm:mb-0 sm:mr-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center bg-black text-white rounded-full p-3 mr-4">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600 text-lg">{location}</p>
          </div>
        </div>

        {/* Duration Box */}
        <div className="w-full sm:w-1/2 flex items-center bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center bg-black text-white rounded-full p-3 mr-4">
            <FaClock className="text-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-600 text-lg">{duration}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LocationDuration;
