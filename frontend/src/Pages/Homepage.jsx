import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import trips from "../assets/data/trips";
import TestimonialPage from "../components/TestimonialPage";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-black"
        >
          Discover Our Trips
        </motion.h1>
        <TripCarousel trips={trips} />
        <TestimonialPage />
      </motion.div>
    </div>
  );
};

export default Homepage;
