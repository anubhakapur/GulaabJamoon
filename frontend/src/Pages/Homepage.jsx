import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import trips from "../assets/data/trips";

const Homepage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <TripCarousel trips={trips} />
    </div>
  );
};

export default Homepage;
