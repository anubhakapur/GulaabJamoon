import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 overflow-hidden select-none">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-gray-900 text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mt-4 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Who is Gulaab Jamoon ?
            </h3>
          </div>
        </div>
        <div className="relative">
          <FaQuoteLeft className="text-4xl text-purple-400 absolute top-0 left-0" />
          <p className="text-xl leading-relaxed pl-10 pr-10 italic">
            <p className="text-lg text-gray-400 transition-colors hover:text-white duration-300">
              We are a unique company, born from the vision of a group of
              friends who wanted to bring people together through shared
              experiences. From trips and treks, to movie nights and comedy
              shows, we have got you covered. If you can think of it, we can
              organize it. As a backbencher-turned-entrepreneur, we're not
              afraid to break the mold and try something new!
              <br />
              <br />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Are you tired of just "jamming" through life?
                <br /> Let GJ add some spice to your monotonous routine!
              </span>
            </p>
          </p>
          <FaQuoteRight className="text-4xl text-pink-500 absolute bottom-0 right-0" />
        </div>
      </motion.div>

      <motion.section
        className="py-20 bg-gradient-to-b from-gray-200 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">
          Know Your Hosts
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mt-4 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-20">
          <HostCard
            name="Founder 1"
            location="Travel Street"
            image="/api/placeholder/400/400"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, adipisci. Voluptatum nesciunt repellat, modi, error fuga ab at vitae, necessitatibus dolorem aut dolor itaque asperiores iste quibusdam unde ad minus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, adipisci. Voluptatum nesciunt repellat, modi, error fuga ab at vitae, necessitatibus dolorem aut dolor itaque asperiores iste quibusdam unde ad minus!"
          />
          <HostCard
            name="Founder 2"
            location="Travel Street"
            image="/api/placeholder/400/400"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, adipisci. Voluptatum nesciunt repellat, modi, error fuga ab at vitae, necessitatibus dolorem aut dolor itaque asperiores iste quibusdam unde ad minus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, adipisci. Voluptatum nesciunt repellat, modi, error fuga ab at vitae, necessitatibus dolorem aut dolor itaque asperiores iste quibusdam unde ad minus!"
          />
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

const HostCard = ({ name, location, image, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl w-full transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <motion.img
            src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${name}`}
            alt={name}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex-shrink-0 border-4 border-purple-600 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-8">
          <div className="text-center lg:text-left mb-4 md:mb-6">
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {name}
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl mt-2">{location}</p>
          </div>
          <div className="relative">
            <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-purple-400 absolute top-0 left-0" />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed pl-8 sm:pl-10 md:pl-12 pr-8 sm:pr-10 md:pr-12 italic text-gray-400 transition-colors hover:text-white duration-300">
              {description}
            </p>
            <FaQuoteRight className="text-2xl sm:text-3xl md:text-4xl text-pink-500 absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
