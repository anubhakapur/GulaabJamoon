import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function Highlights({ highlights }) {
  return (
    <motion.div
      className="mb-8 p-6 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Highlights</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <motion.li
            key={index}
            className="flex items-center bg-gray-100 rounded-lg shadow-md p-5 t"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="flex items-center text-yellow-400"
              whileHover={{ rotate: -10, scale: 1.2 }}
            >
              <FaStar className="h-7 w-7 mr-4" />
            </motion.div>
            <span className="text-gray-700 text-lg font-medium">{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Highlights;
