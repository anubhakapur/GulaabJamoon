import React from 'react';
import { motion } from 'framer-motion';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa'; 

function Inclusions({ inclusions=[], exclusions=[
    "Non-refundable deposit",
    "Travel insurance",
    "Meals not mentioned",
    "Personal expenses",
  ] }) {
  // Dummy data for exclusions if not provided
  

  return (
    <motion.div
      className="mb-8 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Inclusions & Exclusions</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Inclusions Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700 pl-4">Inclusions</h3>
          <ul className="list-disc list-inside pl-5">
            {inclusions.map((inclusion, index) => (
              <li key={index} className="flex items-center mb-2">
                <AiFillCheckCircle className="text-green-500 h-5 w-5 mr-3" />
                <span className="text-gray-700 text-lg font-medium">{inclusion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Exclusions</h3>
          <ul className="list-disc list-inside pl-5">
            {exclusions.map((exclusion, index) => (
              <li key={index} className="flex items-center mb-2">
                <FaTimesCircle className="text-red-500 h-5 w-5 mr-3" />
                <span className="text-gray-700 text-lg font-medium">{exclusion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Inclusions;
