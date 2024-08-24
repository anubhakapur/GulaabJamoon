import React, { useEffect, useRef, useState } from 'react';
import sample from '../assets/images/Samplevideo.mp4';

const Hero = () => {
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

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          filter: `brightness(${0.7 + scrollPosition / 1000})`,
          transform: `scale(${1 + scrollPosition / 2000})`,
          transition: 'filter 0.3s ease-out, transform 0.3s ease-out'
        }}
      >
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          transform: `scale(${scale}) translateY(${scrollPosition / 10}px)`,
          opacity,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4 mb-8">
          <span className="block font-serif tracking-wide">Do it the</span>
          <span className="block font-sans uppercase tracking-widest text-yellow-400 mt-2">GULAAB JAMOON</span>
          <span className="block font-serif tracking-wide mt-2">way</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white uppercase tracking-widest font-light mt-8 text-center px-4">
          Changing the way the world experiences the world
        </p>
      </div>
    </div>
  );
};

export default Hero;
