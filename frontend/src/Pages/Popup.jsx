import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import testimg from "/src/assets/images/test.jpg";
const AdventurePopup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [expectingCallback, setExpectingCallback] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ name, phoneNumber, message, expectingCallback });
    const response = await axios.post('http://localhost:8080/api/popup',{name,phoneNumber,message,expectingCallback});
    console.log(response.data)

    console.log({ name, email, phoneNumber, message, expectingCallback });
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000); // Close after 2 seconds
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(249, 168, 212, 0.4)" },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="w-full max-w-lg rounded-lg overflow-hidden shadow-xl relative"
          style={{
            backgroundImage: `url(${testimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          
          <div className="relative p-6 z-10">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-2 right-2 text-white bg-gray-900 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {!isSubmitted ? (
              <>
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
                  className="mb-6 text-white text-lg"
                >
                  Connect with our travel experts for exclusive itineraries and best deals.
                </motion.p>
                <motion.form
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <motion.input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-yellow-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  <motion.input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-yellow-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  <motion.input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-yellow-500"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    pattern="\d{10}"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  <motion.textarea
                    placeholder="Tell Us More"
                    className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-yellow-500"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    variants={inputVariants}
                    whileFocus="focus"
                  ></motion.textarea>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <input
                      type="checkbox"
                      id="expectCallback"
                      checked={expectingCallback}
                      onChange={(e) => setExpectingCallback(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="expectCallback" className="text-yellow-500 text-sm">Expecting a Callback</label>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 p-3 rounded-lg font-bold transition-colors"
                  >
                    Send
                  </motion.button>
                </motion.form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-10"
              >
                <motion.h2
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="text-4xl font-bold text-yellow-500 mb-4"
                >
                  Thanks!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-xl"
                >
                  We'll be in touch soon.
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdventurePopup;