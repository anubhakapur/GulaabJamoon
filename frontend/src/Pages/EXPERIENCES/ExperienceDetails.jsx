import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import trips from "../../assets/data/trips";

function ExperienceDetails() {
  const { tripName } = useParams(); // Extract tripName from the URL
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Search for the trip by matching the tripName from the URL to the trips
  const experience = trips.find(
    (trip) => trip.name.toLowerCase().replace(/\s+/g, "-") === tripName
  );

  if (!experience) {
    return (
      <div className="text-center py-10">
        <p>Experience not found</p>
        <button
          className="bg-black text-white py-2 px-4 rounded-full mt-4"
          onClick={() => navigate(-1)} // Go back if the trip is not found
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          {experience.name}
        </h1>
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
      </div>
      <Footer />
    </>
  );
}

export default ExperienceDetails;
