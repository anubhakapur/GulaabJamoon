import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ListWithUs from "./ListWithUs";

const HostExperience = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header home={true} />
      <div className="relative h-screen">
        {/* Background Image */}
        <motion.img
          src='https://img.freepik.com/premium-photo/landscape-view-fields-manali-mountains-india_926199-2085493.jpg'
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Simple and streamlined booking management technology.
          </motion.h1>
          <motion.p
            className="text-white text-lg mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Optimize your experiences and events.
          </motion.p>
          {/* Button */}
          <motion.button
            onClick={() => setShowModal(true)}
            className="bg-black hover:bg-gray-900 active:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            List With Us!
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      {showModal && <ListWithUs setShowModal={setShowModal} />}
    </>
  );
};

export default HostExperience;
