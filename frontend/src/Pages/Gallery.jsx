import React, { useState } from 'react';

const Gallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/400x320', alt: 'Image 6' },
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
    <div className="font-nunito">
      <div className="mx-auto max-w-[1320px] my-20">
        <h2 className="text-center text-3xl font-semibold mb-5">Gallery</h2>
        <p className="text-center text-gray-500 text-lg max-w-[750px] mx-auto mb-10">
          Lorem ipsum dolor sit amet, consect etur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al
        </p>
        <div className="grid grid-cols-3 gap-5 relative h-[720px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`project project${index + 1} w-full h-full`}
              onClick={() => handleImageClick(image)}
            >
              <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
              <div className={`btn-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showOverlay && selectedImage === image ? 'block' : 'hidden'}`}>
                <button className="bg-white px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">View</button>
              </div>
            </div>
          ))}
          {showOverlay && selectedImage && (
            <div className="overlay fixed inset-0 bg-gray-700/70 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg max-w-[700px] w-[90%] p-8 relative">
                <button
                  className="close absolute top-2 right-4 text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-wider"
                  onClick={handleCloseOverlay}
                >
                  Close X
                </button>
                <img
                  className="w-full"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;