import React, { useState, useRef } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img 
        src="/src/assets/images/bg-main.jpg" 
        alt="Group of people on a trek" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 z-10"></div>

      {/* Content overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="text-5xl font-bold mb-8 text-white text-center">Tripcat - Trekking & Fun</h2>
        <button 
          onClick={handlePlay}
          className="bg-white text-purple-600 rounded-full p-4 w-16 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Video */}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}
        controls
      >
        <source src="/src/assets/images/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;