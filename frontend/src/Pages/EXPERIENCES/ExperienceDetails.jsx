import React from "react";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import LocationDuration from "./LocationDuration";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Highlights from "./Highlights";
import Inclusions from "./Inclusions";
import Variants from "./Variants";
import BoardingLocation from "./BoardingLocation";
import SimilarExperiences from "./SimilarExperiences";
import Booking from "./Booking";
import Footer from "../../components/Footer";

function ExperienceDetails({ experience, onClose }) {
  if (!experience) {
    return <div className="text-center py-10">Experience not found</div>;
  }

  // Prevent clicks from closing the details component
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Close on clicking the overlay
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative overflow-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={handleContainerClick} // Prevent clicks inside from closing the details component
          style={{ maxHeight: '90vh' }} // Ensure the component fits within the viewport
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <motion.h1
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {experience.name}
          </motion.h1>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-2/3">
              <Gallery gallery={experience.gallery} name={experience.name} />
              <LocationDuration
                location={experience.location}
                duration={experience.duration}
              />
              <Overview overview={experience.description} />
              <Itinerary itinerary={experience.itinerary} />
              <Highlights highlights={experience.highlights} />
              <Inclusions inclusions={experience.inclusions} />
              <Variants variants={experience.variants} />
              <BoardingLocation location={experience.boardingLocation} />
              <SimilarExperiences experiences={experience.similarExperiences} />
            </div>
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <Booking
                price={experience.price || 0}
                taxes={experience.taxes || 0}
                fees={experience.fees || 0}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}

export default ExperienceDetails;
