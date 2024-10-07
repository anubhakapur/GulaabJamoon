import React from "react";
import { motion } from "framer-motion";

function Itinerary({ itinerary=[]}) {
  let index=0;
  return (
    <motion.div
      className="mb-8   p-6 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-4xl font-semibold mb-8 text-gray-900">Itinerary</h2>
      <ol className="space-y-6">
        {
          itinerary.map((item) => (
            <li key={index++} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-semibold text-gray-800">
                  {index}.
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </li>
          ))
        }
      </ol>
    </motion.div>
  );
}

export default Itinerary;
