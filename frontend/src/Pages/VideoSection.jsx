import React, { useState, useRef, useEffect } from 'react';
import bgmain from "/src/assets/images/bg-main.jpg"
import bgvid from "/src/assets/images/bgvid.mp4"
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      {/* Background image with zoom effect */}
      <img 
        src={bgmain} 
        alt="Group of people on a trek" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 ease-in-out transform group-hover:scale-110"
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 z-10 animate-gradient-x"></div>

      {/* Content overlay with fade-in animation */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white text-center px-4 animate-text-glow">
          Gulaab Jamoon - Trekking & Fun
        </h2>
        <button 
          onClick={handlePlay}
          className="bg-white text-orange-600 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-180 active:scale-95 focus:outline-none hover:bg-orange-600 hover:text-white"
          aria-label="Play video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Video with fade-in effect */}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}
        muted
        playsInline
      >
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.8); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VideoSection;