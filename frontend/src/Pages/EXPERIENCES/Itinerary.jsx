import React from "react";
import { motion } from "framer-motion";

function Itinerary({ itinerary }) {
  return (
    <motion.div
      className="mb-8   p-6 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Itinerary</h2>
      <ol className="space-y-6">
        {itinerary.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded-lg shadow-md p-5 hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center">
              <span className="text-gray-900 text-2xl font-extrabold mr-6">
                DAY {index}
              </span>
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
            <motion.div
              className="text-gray-500 hover:text-black"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}

export default Itinerary;
