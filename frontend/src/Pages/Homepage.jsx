import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import trips from "../assets/data/trips";
import TestimonialPage from "../components/TestimonialPage";
import Footer from "../components/Footer";
import AdventurePopup from "../Pages/Popup";
import backgroundImage from "/src/assets/images/bg-main-test2.jpg";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header home={true} />
      <Hero backgroundImage={backgroundImage} />
      <TripCarousel trips={trips} />
      <TestimonialPage id="testimonials-section" />
      <Footer />
      {showPopup && <AdventurePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Homepage;