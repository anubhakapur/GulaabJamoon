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
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="bg-black shadow-xl sticky top-0 z-50 p-2">
      <div className="container mx-auto flex items-center justify-between relative">
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
          <ul className="flex gap-6 justify-end mr-0">
            {menuItems.map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a
                  href="#"
                  className={`text-white relative group ${
                    item === "LOGIN"
                      ? "lg:border lg:border-white lg:rounded-full lg:px-4 lg:py-2 lg:hover:bg-white lg:hover:text-black lg:transition-colors lg:duration-300"
                      : "group"
                  }`}
                >
                  {item}
                  {item !== "LOGIN" && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Full-screen menu for medium and small screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-40 lg:hidden flex items-center justify-center"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="text-center">
              {menuItems.map((item) => (
                <motion.li key={item} className="mb-6" variants={itemVariants}>
                  <a
                    href="#"
                    className="text-white text-2xl relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    {item !== "LOGIN" && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    )}
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
