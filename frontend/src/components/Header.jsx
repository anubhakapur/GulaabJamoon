import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GJlogo from "../assets/images/GJlogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "ABOUT",
    "EXPERIENCES",
    "GALLERY",
    "TESTIMONIALS",
    "CONTACT US",
    "LOGIN",
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="bg-black shadow-xl sticky top-0 z-50">
      <div className="container  p-2 flex items-center justify-between relative">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img src={GJlogo} alt="GJ" className="w-[7vh] mx-2" />
          <h1 className="text-white text-xl font-bold">Gulaab Jamoon</h1>
        </motion.div>

        {/* Hamburger menu for medium and small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none w-8 h-8 relative z-50"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-[3px] w-[2rem] rounded-lg bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute h-[3px] w-[2rem] rounded-lg bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute h-[3px] w-[2rem] rounded-lg bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Navigation for large screens */}
        <motion.nav
          className="hidden lg:block"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a
                  href="#"
                  className={`${
                    item === "LOGIN"
                      ? "lg:bg-yellow-400 lg:text-white lg:px-2 lg:py-2 lg:rounded-lg lg:hover:bg-yellow-300 lg:hover:text-black lg:hover: transition-colors duration-300"
                      : "text-white hover:text-yellow-500 transition-colors duration-300"
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Blurred background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Dropdown menu for medium and small screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-16 right-4 w-64 z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  className="border-b border-gray-200 last:border-b-0"
                  variants={itemVariants}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
