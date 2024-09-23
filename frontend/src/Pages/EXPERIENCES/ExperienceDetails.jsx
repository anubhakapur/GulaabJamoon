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

  const experience = trips.find(
    (trip) => trip.name.toLowerCase().replace(/\s+/g, "-") === tripName
  );

  if (!experience) {
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
            {experience.name}
          </h1>
          <p className="text-lg text-yellow-400">{experience.location}</p>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12">
          <Gallery gallery={experience.gallery} name={experience.name} />
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
                  location={experience.location}
                  duration={experience.duration}
                />
              </div>
              <div ref={(el) => (sectionRefs.current[1] = el)}>
                <Overview overview={experience.description} />
              </div>
              <div ref={(el) => (sectionRefs.current[2] = el)}>
                <Itinerary itinerary={experience.itinerary} />
              </div>
              <div ref={(el) => (sectionRefs.current[3] = el)}>
                <Highlights highlights={experience.highlights} />
              </div>
              <div ref={(el) => (sectionRefs.current[4] = el)}>
                <Inclusions inclusions={experience.inclusions} />
              </div>
              <div ref={(el) => (sectionRefs.current[5] = el)}>
                <Faq faq={experience.faq} />
              </div>
              <div ref={(el) => (sectionRefs.current[6] = el)}>
                <CancellationPolicy policy={experience.cancellationPolicy} />
              </div>

              {/* <Variants variants={experience.variants} /> */}

              <motion.div
                className="w-full bg-white p-8 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <BoardingLocation location={experience.boardingLocation} />
              </motion.div>

              <motion.div
                className="w-full bg-white p-8 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SimilarExperiences
                  experiences={experience.similarExperiences}
                />
              </motion.div>
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
      </div>

      <Footer />
    </>
  );
}

export default ExperienceDetails;
