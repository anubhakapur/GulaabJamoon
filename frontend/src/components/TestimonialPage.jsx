import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    title: "Adventure Seeker",
    comment: "Amazing experience! The tour was well-organized and our guide was knowledgeable.",
    rating: 5,
    date: "2024-03-15"
  },
  {
    name: "Jane Smith",
    title: "Nature Lover",
    comment: "Breathtaking views and great company. Highly recommended!",
    rating: 4,
    date: "2024-03-10"
  },
  {
    name: "Mike Johnson",
    title: "Culture Enthusiast",
    comment: "Learned so much about local history and traditions. Unforgettable trip!",
    rating: 5,
    date: "2024-03-05"
  },
  {
    name: "Emily Brown",
    title: "Food Explorer",
    comment: "The culinary experiences were out of this world. A feast for all senses!",
    rating: 5,
    date: "2024-02-28"
  },
  {
    name: "lavid Lee",
    title: "Photography Buff",
    comment: "Captured some of my best shots ever. The locations were picture-perfect.",
    rating: 4,
    date: "2024-02-20"
  }
];

const TestimonialCard = ({ name, title, comment, rating, date }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <img
        src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
      ))}
    </div>
    <p className="text-gray-700 mb-2">{comment}</p>
    <div className="flex items-center text-blue-500">
      <FaGoogle className="mr-2" />
      <span className="text-sm">Posted on Google</span>
    </div>
  </motion.div>
);

const AnimatedNumber = ({ value, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [value, decimals]);

  return <span>{count.toFixed(decimals)}</span>;
};

const StatCard = ({ icon, title, value, decimals = 0 }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-black text-white p-6 rounded-xl shadow-md text-center flex-1"
  >
    {icon}
    <h3 className="mt-4 font-semibold text-lg">{title}</h3>
    <p className="text-3xl font-bold">
      <AnimatedNumber value={parseFloat(value)} decimals={decimals} />
      {typeof value === "string" && value.includes("+") && "+"}
    </p>
  </motion.div>
);

const ProgressBar = ({ currentIndex, total }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
    <div
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
      style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
    ></div>
  </div>
);

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

        <div className="flex flex-wrap justify-between gap-8 mb-12">
          <StatCard
            icon={<BsPeople className="text-4xl text-blue-500 mx-auto" />}
            title="Happy Travellers"
            value="1000+"
          />
          <StatCard
            icon={<FaStar className="text-4xl text-yellow-400 mx-auto" />}
            title="Google Rating"
            value={4.9}
            decimals={1}
          />
          <StatCard
            icon={<FaMapMarkerAlt className="text-4xl text-green-500 mx-auto" />}
            title="Destinations"
            value="500+"
          />
          <StatCard
            icon={<GiCaptainHatProfile className="text-4xl text-purple-500 mx-auto" />}
            title="Tour Captains"
            value={180}
          />
        </div>

        <div className="relative mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              {...reviews[currentIndex]}
            />
          </AnimatePresence>
        </div>

        <ProgressBar currentIndex={currentIndex} total={reviews.length} />
      </div>
    </div>
  );
};

export default TestimonialPage;