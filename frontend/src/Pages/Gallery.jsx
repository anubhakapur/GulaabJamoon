import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/src/assets/images/bg-main.jpg', alt: 'WAYANAD', caption: 'WAYANAD' },
    { src: '/src/assets/images/about2.jpg', alt: 'GOKARNA', caption: 'GOKARNA' },
    { src: '/src/assets/images/bg-main-test.jpg', alt: 'KODAIKANAL', caption: 'KODAIKANAL' },
    { src: '/src/assets/images/bg-main-test-3.png', alt: 'MUNNAR', caption: 'MUNNAR' },
    { src: '/src/assets/images/bg-main-test2.jpg', alt: 'SRINAGAR', caption: 'SRINAGAR' },
    { src: '/src/assets/images/bg-main-test4.jpg', alt: 'CHIKMAGALUR', caption: 'CHIKMAGALUR' },
    { src: '/src/assets/images/test.jpg', alt: 'NEW DESTINATION', caption: 'NEW DESTINATION' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 h-full">
        <div className="col-span-2 row-span-2">
          <GalleryImage image={images[0]} onClick={handleImageClick} />
        </div>
        <div className="col-span-2 row-span-1">
          <GalleryImage image={images[1]} onClick={handleImageClick} />
        </div>
        <div className="col-span-1 row-span-1">
          <GalleryImage image={images[2]} onClick={handleImageClick} />
        </div>
        <div className="col-span-1 row-span-1">
          <GalleryImage image={images[3]} onClick={handleImageClick} />
        </div>
        <div className="col-span-2 row-span-1">
          <GalleryImage image={images[4]} onClick={handleImageClick} />
        </div>
        <div className="col-span-1 row-span-1">
          <GalleryImage image={images[5]} onClick={handleImageClick} />
        </div>
        <div className="col-span-1 row-span-1">
          <GalleryImage image={images[6]} onClick={handleImageClick} />
        </div>
      </div>
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
    <motion.div
      className="relative w-full h-full overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(image)}
    >
      <img
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        src={image.src}
        alt={image.alt}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <p className="text-white text-base font-semibold">{image.caption}</p>
      </div>
    </motion.div>
  );
};

export default Gallery;