import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Faq({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="mb-8 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">FAQ</h2>
      <div className="space-y-4">
        {faq?.map((item, index) => (
          <div>
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="flex justify-between w-full px-6 py-4 text-left text-gray-900 font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => toggleIndex(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
            <div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-6 py-4 text-gray-700 border-t border-gray-200 shadow-md"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: "1000px" }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Faq;
