import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import trips from "../assets/data/trips";
import axios from "axios";
import { BASE_URL } from "../constants";

const AllTripsPage = () => {
  const [visibleTrips, setVisibleTrips] = useState(8);
  const [allTrips, setAllTrips] = useState(trips);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadMore = () => {
    setVisibleTrips(allTrips.length);
  };

  const filteredTrips = allTrips.filter((trip) =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const clearSearch = () => setSearchTerm("");

  const navigateToTrip = (trip, event) => {
    // Prevent the event from bubbling up to the card
    event.stopPropagation();
    const formattedTripName = trip.name.replace(/\s+/g, "-").toLowerCase();
    navigate(`/experiences/${formattedTripName}`);
  };

  return (
    <>
      <Header home={false} />
      <div className="bg-gray-100 select-none py-[5rem]">
        <motion.div
          className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="lg:text-6xl md:text-6xl sm:text-4xl font-extrabold text-center text-blue-400 mb-[2.5rem]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <span className="text-blue-400 px-2">
              Discover
              </span>
              <span className="text-yellow-400 border-yellow-400 border-t-4 border-b-4 px-2">
              XPs
              </span>
               

            </motion.h1>

            <motion.div
              className="flex justify-center mb-10 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="relative w-full sm:w-3/5 md:w-2/3 lg:w-[60%] transform transition-transform duration-300 ease-in-out focus-within:scale-105">
                <input
                  type="text"
                  placeholder="Search for a trip..."
                  className="w-full px-4 py-3 text-lg text-slate-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 shadow-md "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black focus:outline-none"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </motion.svg>
                  </button>
                )}
              </div>
            </motion.div>

            {filteredTrips.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {filteredTrips.slice(0, visibleTrips).map((trip) => (
                    <motion.div
                      key={trip.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between cursor-pointer"
                      style={{ minHeight: "450px" }}
                      variants={itemVariants}
                      layout
                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          "0 20px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => navigateToTrip(trip, e)}
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
                            className="text-2xl font-bold text-slate-700 mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {trip.name}
                          </motion.h2>
                          <motion.p
                            className="text-slate-500 mb-4 line-clamp-2"
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
                            className="w-full bg-blue-400 text-white py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all hover:bg-yellow-400 duration-300"
                            whileHover={{
                              scale: 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => navigateToTrip(trip, e)}
                          >
                            Book Now
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                className="flex justify-center mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-gray-500">No experiences found.</p>
              </motion.div>
            )}

            {visibleTrips < filteredTrips.length && (
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={loadMore}
                  className="bg-yellow-400 text-white py-3 px-8 rounded-full text-xl font-bold active:outline-none active:ring-2 active:ring-offset-2 active:ring-yellow-400"
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default AllTripsPage;