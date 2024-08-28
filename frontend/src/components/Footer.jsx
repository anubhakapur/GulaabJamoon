import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <motion.footer
      className="bg-black text-white py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['About Us', 'Support', 'Contact'].map((title, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 relative">
                {title}
                <motion.span
                  className="absolute bottom-0 left-0 w-12 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.span>
              </h3>
              <ul className="space-y-2">
                {index === 0 && (
                  <>
                    <motion.li variants={linkVariants} whileHover="hover">
                      <a href="#" className="inline-block hover:text-gray-300 transition-colors duration-300">
                        ► Our Story
                      </a>
                    </motion.li>
                    <motion.li variants={linkVariants} whileHover="hover">
                      <a href="#" className="inline-block hover:text-gray-300 transition-colors duration-300">
                        ► Team
                      </a>
                    </motion.li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <motion.li variants={linkVariants} whileHover="hover">
                      <a href="#" className="inline-block hover:text-gray-300 transition-colors duration-300">
                        ► Help Center
                      </a>
                    </motion.li>
                    <motion.li variants={linkVariants} whileHover="hover">
                      <a href="#" className="inline-block hover:text-gray-300 transition-colors duration-300">
                        ► Safety Information
                      </a>
                    </motion.li>
                    <motion.li variants={linkVariants} whileHover="hover">
                      <a href="#" className="inline-block hover:text-gray-300 transition-colors duration-300">
                        ► Cancellation Options
                      </a>
                    </motion.li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <motion.li className="flex items-center" variants={linkVariants} whileHover="hover">
                      <span className="mr-2">✉</span>
                      <a 
                        href="mailto:gulaabjamoon@gmail.com"
                        className="hover:text-gray-300 transition-colors duration-300"
                      >
                        gulaabjamoon@gmail.com
                      </a>
                    </motion.li>
                    <motion.li className="flex items-center" variants={linkVariants} whileHover="hover">
                      <span className="mr-2">☏</span>
                      +1 (123) 456-7890
                    </motion.li>
                    <motion.li className="flex items-center" variants={linkVariants} whileHover="hover">
                      <span className="mr-2">📍</span>
                      123 Travel Street, Adventure City
                    </motion.li>
                  </>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          variants={itemVariants}
        >
          <p className="text-sm">
            © 2024 Gulaab Jamoon. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-sm hover:text-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {policy}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;