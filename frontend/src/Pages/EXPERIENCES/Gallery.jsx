import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery({ gallery, name }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const toggleShowAllPhotos = () => setShowAllPhotos(!showAllPhotos);

  return (
    <motion.div
      className="w-[100%] bg-white  sm:px-8 py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gallery container */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Main large image */}
        <div className="w-full sm:w-2/3 h-[300px] lg:h-[520px] relative">
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={gallery[0]}
              alt={`${name} - Main`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Grid of smaller images */}
        <div className="w-full sm:w-1/3 grid grid-cols-2 gap-4">
          {gallery.slice(1, 5).map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg relative w-full pb-[100%]" // Maintain aspect ratio
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              style={{ display: image ? "block" : "none" }}
            >
              <img
                src={image}
                alt={`${name} - ${index + 2}`}
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover" // Ensures image covers entire div
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show all photos button */}
      <motion.button
        className="mt-4 bg-blue-400 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleShowAllPhotos}
      >
        {showAllPhotos ? "Hide photos" : `Show all ${gallery.length} photos`}
      </motion.button>

      {/* Full gallery modal */}
      <AnimatePresence>
        {showAllPhotos && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <motion.button
                className="mb-4 bg-blue-400 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleShowAllPhotos}
              >
                Close Gallery
              </motion.button>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative pb-[66.66%]">
                      <img
                        src={image}
                        alt={`${name} - ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Gallery;
