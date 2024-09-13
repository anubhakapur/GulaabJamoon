import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TripCarousel from "../components/TripCarousel";
import VideoSection from "./VideoSection";
import TestimonialPage from "../components/TestimonialPage";
import Footer from "../components/Footer";
import AdventurePopup from "../Pages/Popup";
import backgroundImage from "/src/assets/images/bg-main-test2.jpg";
import trips from "../assets/data/trips";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("popupShown");
    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => setShowPopup(false);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header home={true} scrollToFooter={scrollToFooter} />
      <Hero backgroundImage={backgroundImage} />
      <TripCarousel trips={trips} />
      <VideoSection />
      <div id="testimonials-section">
        <TestimonialPage />
      </div>
      <Footer ref={footerRef} />
      {showPopup && <AdventurePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Homepage;
