import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ backgroundImage }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(0.5, 1 - scrollPosition / 1000);
  const opacity = Math.max(0, 1 - scrollPosition / 500);
  const brightness = Math.max(0.5, 1 - scrollPosition / 1000);

  // Sidebar animation: slide in on load, slide out on scroll past threshold
  const sidebarVariants = {
    hidden: { opacity: 0, x: "-100%", transition: { duration: 0.5 } }, // Hidden state (off-screen)
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    slideOutLeft: { opacity: 0, x: "-150%", transition: { duration: 0.5 } },
    slideOutRight: { opacity: 0, x: "150%", transition: { duration: 0.5 } },
  };

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `brightness(${brightness})`,
          transform: `scale(${1 + scrollPosition / 2000})`,
          transition: "filter 0.3s ease-out, transform 0.3s ease-out",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          transform: `scale(${scale}) translateY(${scrollPosition / 10}px)`,
          opacity,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4 mb-8">
          <span className="block font-serif tracking-wide">Do it the</span>
          <span className="block font-sans uppercase tracking-widest text-yellow-400 mt-4">
            GULAAB JAMOON
          </span>
          <span className="block font-serif tracking-wide">way</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-white tracking-widest font-light mt-8 text-center px-4">
          Changing the way the world experiences the world
        </p>
      </div>

      {/* Updated Sidebars with adjusted sizes */}
      <motion.div
        className={`absolute left-0 top-[35vh] transform -translate-y-1/2 hidden md:flex`}
        initial="hidden"
        animate={scrollPosition > 200 ? "slideOutLeft" : "visible"}
        variants={sidebarVariants}
      >
        <Link
          to="corporatexps"
          className={`bg-white/75 hover:bg-white hover:text-black text-black font-bold rounded-full rounded-l-none
          shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
          style={{
            padding: "1rem", // Consistent padding
            paddingTop: "2rem",
            paddingBottom: "2rem",
            writingMode: "vertical-rl",
            textOrientation: "sideways",
          }}
        >
          <span className="text-sm leading-none tracking-wide text-center">
            CORPORATE XPs
          </span>
        </Link>
      </motion.div>
      <motion.div
        className={`absolute right-0 top-[35vh] transform -translate-y-1/2 hidden md:flex`}
        initial="hidden"
        animate={scrollPosition > 200 ? "slideOutRight" : "visible"}
        variants={sidebarVariants}
      >
        <Link
          to="hostexperience"
          className={`bg-white/75 hover:bg-white hover:text-black text-black font-bold rounded-r-none rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
          style={{
            padding: "1rem", // Consistent padding
            paddingTop: "2rem",
            paddingBottom: "2rem",
            writingMode: "vertical-rl",
            textOrientation: "sideways",
          }}
        >
          <span className="text-sm leading-none tracking-wide text-center py-4">
            LIST WITH US
          </span>
        </Link>
      </motion.div>

      {/* Media query to hide sidebars on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
        `}</style>
    </div>
  );
};

export default Hero;
