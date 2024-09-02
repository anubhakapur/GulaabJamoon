import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

const Gallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);
  const [allImages] = useState([
    { src: 'https://static.vecteezy.com/system/resources/previews/017/521/673/large_2x/amazing-summer-beach-background-sunset-landscape-in-square-format-perfect-coast-view-sunny-relaxation-vibes-chairs-and-umbrella-luxury-summer-beach-idyllic-tropical-island-view-photo.jpg', alt: 'Image 1' },
    { src: '/api/placeholder/400/320', alt: 'Image 2' },
    { src: '/api/placeholder/400/320', alt: 'Image 3' },
    { src: '/api/placeholder/400/320', alt: 'Image 4' },
    { src: '/api/placeholder/400/320', alt: 'Image 5' },
    { src: 'https://static.vecteezy.com/system/resources/previews/017/521/673/large_2x/amazing-summer-beach-background-sunset-landscape-in-square-format-perfect-coast-view-sunny-relaxation-vibes-chairs-and-umbrella-luxury-summer-beach-idyllic-tropical-island-view-photo.jpg', alt: 'Image 6' },
    { src: '/api/placeholder/400/320', alt: 'Image 7' },
    { src: '/api/placeholder/400/320', alt: 'Image 8' },
    { src: 'https://static.vecteezy.com/system/resources/previews/017/521/673/large_2x/amazing-summer-beach-background-sunset-landscape-in-square-format-perfect-coast-view-sunny-relaxation-vibes-chairs-and-umbrella-luxury-summer-beach-idyllic-tropical-island-view-photo.jpg', alt: 'Image 9' },
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setVisibleImages(prevVisible => Math.min(prevVisible + 3, allImages.length));
  };

  return (
    <div ref={containerRef} className="font-nunito flex flex-col min-h-screen">
      <div className="flex-grow mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
        <motion.h1 
          className="text-center text-4xl sm:text-6xl font-bold mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>
        <p className="text-center text-gray-500 text-base sm:text-lg max-w-[750px] mx-auto mb-10">
        Experience genuine moments of pure joy, where happiness fills your heart effortlessly. These are the times when life’s simplest pleasures bring the deepest contentment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allImages.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(image)}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                src={image.src} 
                alt={image.alt} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleImages < allImages.length && (
          <div className="text-center mt-10">
            <button 
              className="bg-blue-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-blue-600 transition-colors transform hover:scale-105 active:scale-95"
              onClick={loadMoreImages}
            >
              Load More Images
            </button>
          </div>
        )}
      </div>

      {showOverlay && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={handleCloseOverlay}
          >
            ×
          </button>
          <img
            className="max-w-full max-h-[90vh] object-contain"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;