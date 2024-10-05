import React from 'react';
import { motion } from 'framer-motion';

function Overview({ overview }) {
  return (
    <motion.div 
      className="w-full bg-white p-8 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 ">Overview</h2>

      {/* Overview Content */}
      <div className="text-gray-600 leading-relaxed text-lg">
        {overview}
      </div>
    </motion.div>
  );
}

export default Overview;
