import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdventurePopup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [expectingCallback, setExpectingCallback] = useState(true); // Default to true

  useEffect(() => {
    // Disable scroll when popup is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scroll when popup is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, phoneNumber, message, expectingCallback });
    onClose();
  };

  // Handle phone number input and restrict to digits only
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="bg-gray-900 rounded-lg p-6 w-full max-w-4xl md:max-w-3xl sm:max-w-md flex flex-col md:flex-row overflow-hidden
                     sm:mx-4 sm:my-8 sm:p-4 sm:rounded-lg" // Adds padding and margin for mobile
        >
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 w-full mb-4 md:mb-0 md:mr-6"
          >
            <img src="/src/assets/images/bg-main.jpg" alt="Adventure collage" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
          <div className="md:w-1/2 w-full relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-3xl z-10" // Ensure close button is on top right
            >
              &times;
            </motion.button>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-4 text-yellow-500"
            >
              Looking for Your Next Adventure?
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-gray-300"
            >
              Connect with our travel experts for exclusive itineraries and best deals tailored to your unique travel experiences.
            </motion.p>
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="flex mb-4 flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full md:w-1/2 p-2 mb-2 md:mb-0 md:mr-2 bg-gray-800 text-white border border-gray-700 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full md:w-1/2 p-2 bg-gray-800 text-white border border-gray-700 rounded"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  pattern="\d{10}"
                />
              </div>
              <textarea
                placeholder="Tell Us More"
                className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="expectCallback"
                  checked={expectingCallback}
                  onChange={(e) => setExpectingCallback(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="expectCallback" className="text-yellow-500">Expecting a Callback</label>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 p-2 rounded font-bold hover:bg-yellow-600 transition-colors"
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdventurePopup;
