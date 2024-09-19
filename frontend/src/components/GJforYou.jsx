

import React from 'react';
import { motion } from 'framer-motion';

const GJforYou = () => {
  const categories = [
    { title: 'TRIPS & TREKS', image: 'https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2020/01/Trekking-Walking-Destinations-in-India_Blog.jpg' },
    { title: 'EVENTS', image: 'https://www.eventfaqs.com/Uploads/News/Content/whatsapp-image-2022-03-17-at-7.09.42-pm.jpg' },
    { title: 'IN-CITY XPERIENCES', image: 'https://media1.thrillophilia.com/filestore/qluc9sfwtjy3wirh51vy385tulpp_1594019885_cubbon.png?w=400&dpr=2' },
    { title: 'COMMUNITY', image: 'https://gaadiwaadi.com/wp-content/uploads/2017/08/Hayabusa-Creed-1.jpg' },
  ];


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-span background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://windows10spotlight.com/wp-content/uploads/2023/10/4890878bfac5a33feb22075317d939dd.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Left side: Title section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 flex items-center justify-start">
              <motion.span 
                className="text-yellow-400 border-t-4 border-b-4 border-yellow-400 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                GJ
              </motion.span>
              <motion.span 
                className="text-blue-400 ml-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                FOR YOU
              </motion.span>
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-200 uppercase mt-2">
              Choose your style:
            </p>
          </div>

          {/* Right side: Grid of categories */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                className="relative overflow-hidden rounded-lg h-64 md:h-80 group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Image */}
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with Text */}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70"
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide group-hover:text-yellow-400 text-center px-4">
                    {category.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GJforYou;