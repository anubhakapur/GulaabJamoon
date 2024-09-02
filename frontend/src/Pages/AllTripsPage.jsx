import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const AllTripsPage = ({ trips: allTrips }) => {
  const [visibleTrips, setVisibleTrips] = useState(8);

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top when the component mounts
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <motion.div
        className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
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
              animate={{ width: "50%" }}
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
                  className="bg-white rounded-xl overflow-hidden shadow-md"
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
                  <motion.div className="p-6">
                    <motion.h2
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {trip.name}
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {trip.description}
                    </motion.p>
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
                    >
                      Book Now
                    </motion.button>
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
      </motion.div>
      <Footer />
    </>
  );
};

export default AllTripsPage;
