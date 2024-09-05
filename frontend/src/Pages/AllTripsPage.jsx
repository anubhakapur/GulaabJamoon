import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import ExperienceDetails from "./EXPERIENCES/ExperienceDetails";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for back functionality
import GJlogo from "../assets/images/GJlogo.svg";

const AllTripsPage = ({ trips: allTrips }) => {
  const [visibleTrips, setVisibleTrips] = useState(8);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const navigate = useNavigate(); // Hook to handle back navigation

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const loadMore = () => {
    setVisibleTrips((prevCount) => Math.min(prevCount + 8, allTrips.length));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const openTripCard = (trip) => setSelectedTrip(trip);
  const closeTripCard = () => setSelectedTrip(null);

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100">
      {/* <div className="container mx-auto flex items-center justify-between relative py-4 px-4 bg-gray-100">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link to="/">
            <motion.img
              src={GJlogo}
              alt="GJ"
              className="w-[7vh] mr-2 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>
          <Link
            to="/"
            className="text-black text-xl font-semibold relative group transition-colors duration-300 hover:text-gray-700 pb-1"
          >
            Gulaab Jamoon
          </Link>
        </motion.div>
      </div> */}

      <div className="container mx-auto flex items-center justify-between relative py-4  bg-gray-100">
        <Link
          to="/"
          className="flex items-center cursor-pointer group transition-transform"
        >
          {/* Icon or Back Arrow */}
          <motion.div
            className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </motion.svg>
          </motion.div>

          {/* Text */}
          <motion.div
            className="ml-3 text-gray-700 text-lg font-medium transition-colors duration-200 group-hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Back
          </motion.div>
        </Link>
      </div>

      <motion.div
        className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-center text-black mb-[2.5rem]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            Discover Our Trips
            <motion.div
              className="h-1 bg-black mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "45%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {allTrips.slice(0, visibleTrips).map((trip) => (
                <motion.div
                  key={trip.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
                  style={{ minHeight: "450px" }} // Fixed height for uniformity
                  variants={itemVariants}
                  layout
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
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
                      <motion.h2
                        className="text-2xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {trip.name}
                      </motion.h2>
                      <motion.p
                        className="text-gray-600 mb-4 line-clamp-2" // Limiting to 2 lines and ellipsis
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ minHeight: "48px" }} // Ensuring consistent height for descriptions
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
                        onClick={() => openTripCard(trip)}
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {visibleTrips < allTrips.length && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={loadMore}
                className="bg-black text-white py-3 px-8 rounded-full text-xl font-bold active:outline-none active:ring-2 active:ring-offset-2 active:ring-black"
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Expanded Trip Card */}
        <AnimatePresence>
          {selectedTrip && (
            <ExperienceDetails
              experience={selectedTrip}
              onClose={closeTripCard}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </div>
  );
};

export default AllTripsPage;
