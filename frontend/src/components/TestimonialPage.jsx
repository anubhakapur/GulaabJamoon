import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import testimonials from "../assets/data/testimonials";

const TestimonialCard = ({ name, title, comment, rating }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto"
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
      <motion.img
        src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${name}`}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-purple-600"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-2xl sm:text-3xl">{name}</h3>
        <p className="text-gray-400 text-lg">{title}</p>
        <div className="flex justify-center sm:justify-start mt-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" />
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
      <FaQuoteLeft className="text-4xl text-gray-700 absolute top-0 left-0" />
      <p className="text-xl leading-relaxed pl-10 pr-10 italic">{comment}</p>
      <FaQuoteRight className="text-4xl text-gray-700 absolute bottom-0 right-0" />
    </div>
  </motion.div>
);

const CustomSlider = ({ value, onChange, max }) => (
  <div className="relative w-full max-w-xl mx-auto">
    <input
      type="range"
      min="0"
      max={max}
      value={value}
      onChange={onChange}
      className="w-full appearance-none bg-transparent cursor-pointer"
      style={{
        "--range-color": "#4B5563",
      }}
    />
    <div
      className="absolute top-1/2 left-0 right-0 h-2 -mt-1 rounded-full bg-gray-300"
      style={{
        background: `linear-gradient(to right, #4B5563 0%, #4B5563 ${
          (value / max) * 100
        }%, #D1D5DB ${(value / max) * 100}%, #D1D5DB 100%)`,
      }}
    ></div>
    <style>{`
      input[type="range"] {
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
      }
      input[type="range"]:focus {
        outline: none;
      }
      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 0;
        width: 0;
      }
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
      }
      input[type="range"]::-moz-range-thumb {
        height: 0;
        width: 0;
        background: transparent;
        cursor: pointer;
        border: none;
      }
      input[type="range"]::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
        color: transparent;
      }
      input[type="range"]::-ms-fill-lower {
        background: transparent;
      }
      input[type="range"]::-ms-fill-upper {
        background: transparent;
      }
      input[type="range"]::-ms-thumb {
        height: 0;
        width: 0;
        background: transparent;
        cursor: pointer;
        border: none;
      }
    `}</style>
  </div>
);

const StatCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-md text-center"
  >
    {icon}
    <h3 className="mt-4 font-semibold text-lg text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </motion.div>
);

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSliderChange = (event) => {
    setCurrentIndex(Number(event.target.value));
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-tight"
        >
          What Our Clients Say
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard
            icon={<BsPeople className="text-4xl text-blue-500 mx-auto" />}
            title="Happy Clients"
            value="1000+"
          />
          <StatCard
            icon={<FaStar className="text-4xl text-yellow-500 mx-auto" />}
            title="Average Rating"
            value="4.9"
          />
          <StatCard
            icon={<FaQuoteRight className="text-4xl text-green-500 mx-auto" />}
            title="Testimonials"
            value="500+"
          />
        </div>

        <div className="relative mb-8">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              {...testimonials[currentIndex]}
            />
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <CustomSlider
            value={currentIndex}
            onChange={handleSliderChange}
            max={testimonials.length - 1}
          />
          <div className="text-center mt-4 text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
