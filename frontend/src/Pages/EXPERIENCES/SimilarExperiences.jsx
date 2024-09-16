import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import trips from '../../assets/data/trips';

const SimilarExperiences = ({ experiences }) => {
  const navigate = useNavigate();

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const handleCardClick = (trip) => {
    const tripNameSlug = createSlug(trip.name);
    navigate(`/experiences/${tripNameSlug}`);
  };

  const itemVariants = {
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    tap: { scale: 0.98 },
  };

  // Find the matching trip details from the trips array
  const getTripDetails = (name) => {
    return trips.find((trip) => createSlug(trip.name) === createSlug(name));
  };

  if (experiences.length === 0) return null;

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Similar Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => {
          const trip = getTripDetails(exp.name);
          if (!trip) return null; // Skip if no matching trip found

          return (
            <motion.div
              key={trip.id}
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
              style={{ minHeight: "450px" }}
              variants={itemVariants}
              layout
              whileHover={itemVariants.hover}
              whileTap={itemVariants.tap}
            >
              <div onClick={() => handleCardClick(trip)} className="cursor-pointer">
                <motion.img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-56 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div className="p-6 flex-1 flex flex-col justify-between">
                  <motion.div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-800 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {trip.name}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 mb-4 line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{ minHeight: "48px" }}
                    >
                      {trip.description}
                    </motion.p>
                  </motion.div>
                  <div>
                    <motion.p
                      className="text-2xl font-bold text-black mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      ${trip.price}
                    </motion.p>
                    <motion.button
                      className="w-full bg-black text-white py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCardClick(trip)}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SimilarExperiences;
