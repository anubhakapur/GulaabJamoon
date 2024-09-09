import React, { useEffect, useRef, useState } from 'react';

const HeroCorporate = ({ backgroundImage, formRef }) => {  // Accept formRef as a prop
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = Math.max(0.5, 1 - scrollPosition / 1000);
  const opacity = Math.max(0, 1 - scrollPosition / 500);
  const brightness = Math.max(0.5, 1 - scrollPosition / 1000);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `brightness(${brightness})`,
          transform: `scale(${1 + scrollPosition / 2000})`,
          transition: 'filter 0.3s ease-out, transform 0.3s ease-out',
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
        style={{
          transform: `scale(${scale}) translateY(${scrollPosition / 10}px)`,
          opacity,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center px-4 mb-4">
          Corporate Retreats & Award-Winning Incentive Trips
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl font-light text-center px-4">
          Creative Company Retreats | Luxury Incentive Trips | Unforgettable Experiences
        </p>
        <button
          className="mt-8 py-2 px-6 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition"
          onClick={scrollToForm}  // Scroll to Form component on click
        >
          Get a Proposal
        </button>
      </div>
    </div>
  );
};

export default HeroCorporate;
