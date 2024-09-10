import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import VideoSection from "./VideoSection"; // Add this import
import TestimonialPage from "../components/TestimonialPage";
import Footer from "../components/Footer";
import AdventurePopup from "../Pages/Popup";
import backgroundImage from "/src/assets/images/bg-main-test2.jpg";
import trips from "../assets/data/trips";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem('popupShown');

    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('popupShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header home={true} />
      <Hero backgroundImage={backgroundImage} />
      <TripCarousel trips={trips} />
      <VideoSection />
      <TestimonialPage id="testimonials-section" />
      <Footer />
      {showPopup && <AdventurePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Homepage;