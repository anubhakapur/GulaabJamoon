import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../assets/images/bgChoose.jpg';
import headerImage from '../assets/images/chooseyourstyle.png'; // Import the new header image

const GJforYou = () => {
  const categories = [
    { title: 'TRIPS & TREKS', image: 'https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2020/01/Trekking-Walking-Destinations-in-India_Blog.jpg' },
    { title: 'EVENTS', image: 'https://www.eventfaqs.com/Uploads/News/Content/whatsapp-image-2022-03-17-at-7.09.42-pm.jpg' },
    { title: 'IN-CITY XPERIENCES', image: 'https://media1.thrillophilia.com/filestore/qluc9sfwtjy3wirh51vy385tulpp_1594019885_cubbon.png?w=400&dpr=2' },
    { title: 'COMMUNITY', image: 'https://gaadiwaadi.com/wp-content/uploads/2017/08/Hayabusa-Creed-1.jpg' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-20">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ml-8">
            <motion.img
              src={headerImage}
              alt="GJ for You"
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          <motion.div 
            ref={ref}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                className="relative overflow-hidden rounded-lg h-64 md:h-80"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center px-4">
                    {category.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GJforYou;