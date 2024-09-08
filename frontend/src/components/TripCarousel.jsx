import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceDetails from "../Pages/EXPERIENCES/ExperienceDetails";

const TripCarousel = ({ trips }) => {
  const [activeImage, setActiveImage] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (activeImage !== prevImage) {
      setPrevImage(activeImage);
    }
  }, [activeImage, prevImage]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isHovering) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isHovering]);

  const BackgroundImage = ({ image, isActive }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
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

  const limitedTrips = trips.slice(0, 6);

  const openTripCard = (trip) => setSelectedTrip(trip);

  const closeTripCard = () => setSelectedTrip(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen py-16 flex flex-col justify-center relative overflow-hidden"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-black"
      >
        Discover Our Trips
      </motion.h1>

      <div className="flex justify-between items-center mb-6 px-4 md:px-8 lg:px-16">
        <h2 className="text-lg md:text-2xl font-bold text-black">
          Featured Trips
        </h2>
        <Link
          to="/experiences"
          className="text-black font-semibold relative group transition-colors duration-300 hover:text-gray-700 pb-1"
        >
          View All
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-110 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </div>

      <div className="w-full relative select-none">
        <AnimatePresence>
          <BackgroundImage
            image={prevImage}
            isActive={!activeImage}
            key="prev"
          />
          <BackgroundImage
            image={activeImage}
            isActive={!!activeImage}
            key="active"
          />
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-black -ml-12"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-black -mr-12"></div>

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="mySwiper"
            ref={swiperRef}
          >
            {limitedTrips.map((trip) => (
              <SwiperSlide key={trip.id} className="py-8">
                <motion.div
                  className="flex flex-col bg-white rounded-lg overflow-hidden group relative h-full min-h-[450px] max-h-[500px] shadow-md hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => {
                    setActiveImage(trip.image);
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setActiveImage("");
                    setIsHovering(false);
                  }}
                  whileHover={{ scale: 1.05, zIndex: 1 }}
                >
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-black transition-colors duration-300">
                      {trip.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base overflow-hidden text-ellipsis flex-grow line-clamp-3">
                      {trip.description}
                    </p>
                    <p className="text-black font-bold text-base md:text-lg mb-4">
                      ${trip.price}
                    </p>
                    <button
                      className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      onClick={() => openTripCard(trip)}
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-4"></div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTrip && (
          <ExperienceDetails
            experience={selectedTrip}
            onClose={closeTripCard}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TripCarousel;