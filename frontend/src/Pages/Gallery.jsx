import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY, timestamp: Date.now() }].slice(-20));
    };

    const animateTrail = () => {
      setTrail((prevTrail) => prevTrail.filter((dot) => Date.now() - dot.timestamp < 500));
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {trail.map((dot, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none w-4 h-4 rounded-full bg-gradient-radial from-white to-transparent z-50"
          style={{ left: dot.x - 8, top: dot.y - 8 }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </>
  );
};

const Gallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageContext = import.meta.glob('/src/assets/images/*.(png|jpg|jpeg|JPG)', { eager: true });
      const loadedImages = Object.entries(imageContext).map(([path, module]) => ({
        src: module.default,
        alt: path.split('/').pop().split('.')[0],
        caption: path.split('/').pop().split('.')[0].toUpperCase()
      }));
      setImages(loadedImages);
    };

    importImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedImage(null);
  };

  const renderGalleryGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {images.map((image, index) => (
        <div key={index} className={`
          ${(index % 7 === 0) ? 'sm:col-span-2 sm:row-span-2' : ''}
          ${(index % 7 === 1) ? 'sm:col-span-2 sm:row-span-1' : ''}
          ${(index % 7 === 4) ? 'sm:col-span-2 sm:row-span-1' : ''}
        `}>
          <GalleryImage image={image} onClick={handleImageClick} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <CursorTrail />
      <main className="flex-grow mt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl font-bold text-yellow-400 mb-4 text-center relative cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0], transition: { duration: 0.5 } }}
          >
            Our Moments of Joy
            <motion.div 
              className="h-0.5 bg-yellow-400 mt-2 mx-auto"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.h1>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Embark on a visual journey through our most cherished experiences. Each image captures a unique moment of joy, adventure, and discovery from our travels across breathtaking destinations.
          </p>
          {renderGalleryGrid()}
        </div>
      </main>
      <Footer />
      {showOverlay && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-1 right-1 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={handleCloseOverlay}
          >
            ×
          </button>
          <img
            className="max-w-[98vw] max-h-[98vh] object-contain"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
        </div>
      )}
    </div>
  );
};

const GalleryImage = ({ image, onClick }) => {
  return (
    <div className="relative w-full h-64 sm:h-full overflow-hidden cursor-pointer group">
      <motion.img
        className="w-full h-full object-cover transition-transform duration-200"
        src={image.src}
        alt={image.alt}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => onClick(image)}
      >
        <motion.p 
          className="text-white text-base font-semibold"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {image.caption}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Gallery;