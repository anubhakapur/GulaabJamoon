import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import trips from "../assets/data/trips";
import TestimonialPage from "../components/TestimonialPage";
import Footer from "../components/Footer";
import backgroundImage from "/src/assets/images/bg-main-test2.jpg";
// import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero backgroundImage={backgroundImage} />
      <TripCarousel trips={trips} />
      <TestimonialPage />
      <Footer />
    </div>
  );
};

export default Homepage;
