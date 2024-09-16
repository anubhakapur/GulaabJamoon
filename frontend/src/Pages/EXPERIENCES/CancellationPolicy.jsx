import React from 'react';
import { motion } from 'framer-motion';

function CancellationPolicy({ policy }) {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-between bg-white p-8 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      {/* Heading Section */}
      <div className="w-full mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Cancellation Policy</h2>
      </div>

      {/* Policy content container */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-gray-600 leading-relaxed text-lg">
          {policy}
        </p>
      </div>
    </motion.div>
  );
}

export default CancellationPolicy;
