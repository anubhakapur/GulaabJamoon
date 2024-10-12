import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import LocationDuration from "./LocationDuration";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Highlights from "./Highlights";
import Inclusions from "./Inclusions";
import BoardingLocation from "./BoardingLocation";
import SimilarExperiences from "./SimilarExperiences";
import Booking from "./Booking";
import Footer from "../../components/Footer";
import Faq from "./Faq";
import CancellationPolicy from "./CancellationPolicy";
import trips from "../../assets/data/trips";
import axios from "axios";
import { BASE_URL } from "../../constants";

function ExperienceDetails() {
  const { tripName } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const navbarRef = useRef(null);
  const sectionRefs = useRef([]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tripName]); // Depend on tripName so it runs when the trip changes

  const navItems = [
    { name: "Location & Duration", ref: useRef(null) },
    { name: "Overview", ref: useRef(null) },
    { name: "Itinerary", ref: useRef(null) },
    { name: "Highlights", ref: useRef(null) },
    { name: "Inclusions", ref: useRef(null) },
    { name: "FAQ", ref: useRef(null) },
    { name: "Cancellation Policy", ref: useRef(null) },
  ];

  const navbarHeight = 64; // Adjust based on your navbar height
  const padding = 20; // Adjust based on how much padding you want

  // Handle section highlighting when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topMostVisibleSection = null;
        let minDistance = Infinity;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const distance = Math.abs(entry.boundingClientRect.top);
            if (distance < minDistance) {
              minDistance = distance;
              topMostVisibleSection = entry.target;
            }
          }
        });

        if (topMostVisibleSection) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === topMostVisibleSection
          );
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Triggers when section reaches upper 20% of the screen
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSectionWithOffset = (index) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      const targetTop =
        targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetTop - navbarHeight - padding,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSection = (index) => {
    scrollToSectionWithOffset(index);
    setActiveSection(index);
  };

  // Smooth scrolling for the active section in the navbar
  useEffect(() => {
    if (navbarRef.current) {
      const navbarWidth = navbarRef.current.offsetWidth;
      const itemWidth = navbarWidth / 2; // 2 items visible at a time
      const scrollPosition = Math.max(
        0,
        activeSection * itemWidth - itemWidth / 2
      );
      navbarRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeSection]);
  const [tripdata, setTripData] = useState({});
  useEffect(() => {
    async function helo() {
      const testing = await axios.get(
        `${BASE_URL}/api/experiences/` + tripName
      );
      console.log("testing", testing.data.data[0]);
      setTripData(testing.data.data[0]);
      console.log("tripdata", tripdata);
      // .then((response)=>{return response.data;
      // })
      // .then((resp)=>{console.log("Hello",resp.data[0]);setTripData(resp.data[0]);})
      // // .then((data)=>{setTripData(data);})
      // .catch((err)=>{console.log(err)})
    }

    helo();

    console.log("data after axios", tripdata);
  }, [tripName]);
  useEffect(() => {
    console.log("tripname", tripdata);
  }, [tripdata]);
  const experience = trips.find(
    (trip) => trip.name.toLowerCase().replace(/\s+/g, "-") === tripName
  );

  if (!tripdata) {
    return (
      <div className="text-center py-10">
        <p>Experience not found</p>
        <button
          className="bg-black text-white py-2 px-4 rounded-full mt-4"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">
            {tripdata.name}
          </h1>
          <p className="text-lg text-yellow-400">{tripdata.location}</p>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12">
          <Gallery gallery={tripdata.images} name={tripdata.name} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-2/3">
              <nav
                ref={navbarRef}
                className="sticky top-0 bg-gray-100 z-10 border-b border-gray-200 shadow-xl overflow-x-auto scrollbar-hide"
              >
                <div className="flex whitespace-nowrap">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 text-center transition-colors duration-300 ${
                        index === activeSection
                          ? "text-black font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleScrollToSection(index)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>

              <div ref={(el) => (sectionRefs.current[0] = el)}>
                <LocationDuration
                  location={tripdata.city + "," + tripdata.state}
                  duration={tripdata.duration}
                />
              </div>
              <div ref={(el) => (sectionRefs.current[1] = el)}>
                <Overview overview={tripdata?.description} />
              </div>
              <div ref={(el) => (sectionRefs.current[2] = el)}>
                <Itinerary itinerary={tripdata.itinerary} />
              </div>
              <div ref={(el) => (sectionRefs.current[3] = el)}>
                <Highlights highlights={tripdata.highlights} />
              </div>
              <div ref={(el) => (sectionRefs.current[4] = el)}>
                <Inclusions
                  inclusions={tripdata.inclusions}
                  exclusions={tripdata.exclusions}
                />
              </div>
              <div ref={(el) => (sectionRefs.current[5] = el)}>
                <Faq faq={tripdata.faqs} />
              </div>
              <div ref={(el) => (sectionRefs.current[6] = el)}>
                <CancellationPolicy policy={tripdata.cancellationPolicy} />
              </div>

              {/* <Variants variants={experience.variants} /> */}

              <motion.div
                className="w-full bg-white p-8 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <BoardingLocation location={tripdata.boardingLocation} />
              </motion.div>

              <motion.div
                className="w-full bg-white p-8 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* <SimilarExperiences
                  experiences={tripdata.similarExperiences}
                /> */}
              </motion.div>
            </div>

            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <Booking
                price={tripdata.price || 0}
                taxes={tripdata.taxes || 0}
                fees={tripdata.fees || 0}
                startDate={tripdata.startDate}
                endDate={tripdata.endDate}
                experienceId={tripdata._id}
                tripName={tripdata.name}
                startTime={tripdata.startTime}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExperienceDetails;
