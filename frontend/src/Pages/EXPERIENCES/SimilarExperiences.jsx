import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import trips from '../../assets/data/trips';

const SimilarExperiences = ({ experiences }) => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState('');

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const navigateToTrip = (trip) => {
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

  const getTripDetails = (name) => {
    return trips.find((trip) => createSlug(trip.name) === createSlug(name));
  };

  const BackgroundImage = ({ image }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>
    </motion.div>
  );

  const TripCard = React.memo(({ trip, onHover }) => (
    <Link to={`/experiences/${createSlug(trip.name)}`}>
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between"
        style={{
          minHeight: "450px",
          width: "100%",
          maxWidth: "350px",
          margin: "0 auto",
          background: "#0284c7",
        }}
        variants={itemVariants}
        whileHover={itemVariants.hover}
        whileTap={itemVariants.tap}
        onMouseEnter={() => onHover(trip.image)}
        onMouseLeave={() => onHover("")}
      >
        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-6 flex-1 flex flex-col justify-between text-slate-700">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">
              {trip.name}
            </h2>
            <p className="text-yellow-300 text-sm mb-2">
              {trip.location} | {trip.date}
            </p>
            <p
              className="mb-4 line-clamp-2 text-yellow-300"
              style={{ minHeight: "48px" }}
            >
              {trip.description}
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400 mb-4">${trip.price}</p>
            <motion.button
              className="w-full bg-blue-400 text-white py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all hover:bg-yellow-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToTrip(trip)}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  ));

  if (experiences.length === 0) return null;

  return (
    <div className="w-full py-16 flex flex-col justify-center relative overflow-hidden">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Similar Experiences</h2>
        <div className="relative z-10">
          {activeImage && <BackgroundImage image={activeImage} />}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => {
              const trip = getTripDetails(exp.name);
              if (!trip) return null;

              return (
                <TripCard key={trip.id} trip={trip} onHover={setActiveImage} />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SimilarExperiences;