import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsPeople } from "react-icons/bs";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { GiCaptainHatProfile } from "react-icons/gi";

const AnimatedNumber = ({ value, decimals = 0, shouldAnimate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(decimals)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, decimals, shouldAnimate]);

  return <span>{shouldAnimate ? count.toFixed(decimals) : '0'}</span>;
};

const StatCard = ({ icon, title, value, decimals = 0, shouldAnimate }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    }}
    className="bg-white/80 backdrop-blur-sm text-black p-4 rounded-xl shadow-md text-center flex-1 min-w-[150px] max-w-[200px]"
  >
    <motion.div
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="mt-2 font-semibold text-sm">{title}</h3>
    <p className="text-lg font-bold">
      <AnimatedNumber value={parseFloat(value)} decimals={decimals} shouldAnimate={shouldAnimate} />
      {typeof value === "string" && value.includes("+") && "+"}
    </p>
  </motion.div>
);

const Hero = ({ backgroundImage }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      if (statsRef.current && window.innerWidth < 768) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setShouldAnimateStats(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(0.5, 1 - scrollPosition / 1000);
  const opacity = Math.max(0, 1 - scrollPosition / 500);
  const brightness = Math.max(0.5, 1 - scrollPosition / 1000);

  const sidebarVariants = {
    hidden: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
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
    <>
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
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4">
            <span className="block font-serif tracking-wide">Do it the</span>
            <span className="block font-sans uppercase tracking-widest text-yellow-400 mt-4">
              GULAAB JAMOON
            </span>
            <span className="block font-serif tracking-wide">way</span>
          </h1>
        </div>

        <AnimatePresence>
          {scrollPosition < 200 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-4 hidden md:block"
              style={{
                opacity: Math.max(0, 1 - scrollPosition / 200),
              }}
            >
              <div className="container mx-auto flex justify-center gap-6">
                <StatCard
                  icon={<BsPeople className="text-3xl text-blue-500 mx-auto" />}
                  title="Happy Travellers"
                  value="1000+"
                  shouldAnimate={true}
                />
                <StatCard
                  icon={<FaStar className="text-3xl text-yellow-400 mx-auto" />}
                  title="Google Rating"
                  value={4.9}
                  decimals={1}
                  shouldAnimate={true}
                />
                <StatCard
                  icon={<FaMapMarkerAlt className="text-3xl text-green-500 mx-auto" />}
                  title="Destinations"
                  value="500+"
                  shouldAnimate={true}
                />
                <StatCard
                  icon={<GiCaptainHatProfile className="text-3xl text-purple-500 mx-auto" />}
                  title="Tour Captains"
                  value={180}
                  shouldAnimate={true}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute left-0 top-[35%] transform -translate-y-1/2 hidden md:flex"
          initial="hidden"
          animate={scrollPosition > 200 ? "slideOutLeft" : "visible"}
          variants={sidebarVariants}
        >
          <Link
            to="corporate"
            className="bg-white/75 hover:bg-white hover:text-black text-black font-bold rounded-full rounded-l-none
            shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            style={{
              padding: "1rem",
              height: "200px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            <span className="text-sm leading-none tracking-wide text-center">
              CORPORATE XPs
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="absolute right-0 top-[35%] transform -translate-y-1/2 hidden md:flex"
          initial="hidden"
          animate={scrollPosition > 200 ? "slideOutRight" : "visible"}
          variants={sidebarVariants}
        >
          <Link
            to="hostexperience"
            className="bg-white/75 hover:bg-white hover:text-black text-black font-bold rounded-r-none rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            style={{
              padding: "1rem",
              height: "200px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            <span className="text-sm leading-none tracking-wide text-center">
              LIST WITH US
            </span>
          </Link>
        </motion.div>
      </div>
      <div ref={statsRef} className="md:hidden bg-gray-100 py-4">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4">
          <StatCard
            icon={<BsPeople className="text-3xl text-blue-500 mx-auto" />}
            title="Happy Travellers"
            value="1000+"
            shouldAnimate={shouldAnimateStats}
          />
          <StatCard
            icon={<FaStar className="text-3xl text-yellow-400 mx-auto" />}
            title="Google Rating"
            value={4.9}
            decimals={1}
            shouldAnimate={shouldAnimateStats}
          />
          <StatCard
            icon={<FaMapMarkerAlt className="text-3xl text-green-500 mx-auto" />}
            title="Destinations"
            value="500+"
            shouldAnimate={shouldAnimateStats}
          />
          <StatCard
            icon={<GiCaptainHatProfile className="text-3xl text-purple-500 mx-auto" />}
            title="Tour Captains"
            value={180}
            shouldAnimate={shouldAnimateStats}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;