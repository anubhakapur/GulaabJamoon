import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, AnimatePresence } from "framer-motion";
import trips from "../assets/data/trips";

const TripCarousel = () => {
  const [activeImage, setActiveImage] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isHovering || isLargeScreen) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isHovering, isLargeScreen]);

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

  const limitedTrips = useMemo(() => trips.slice(0, 3), []);

  const createSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const navigateToTrip = (trip) => {
    // You can define your navigation logic here, using a router for example
  };

  const itemVariants = {
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    tap: { scale: 0.98 },
  };

  const TripCard = React.memo(({ trip, onHover }) => (
    <Link to={`/experiences/${createSlug(trip.name)}`}>
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between"
        style={{
          minHeight: "450px",
          width: "100%",
          maxWidth: "350px",
          margin: "0 auto",
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
        <div className="p-6 flex-1 flex flex-col justify-between  text-slate-700">
          <div>
            <h2 className="text-2xl font-bold mb-2  text-slate-700">
              {trip.name}
            </h2>
            <p
              className="mb-4 line-clamp-2  text-slate-500"
              style={{ minHeight: "48px" }}
            >
              {trip.description}
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black mb-4">${trip.price}</p>
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

  return (
    <div className="w-full min-h-screen py-16 flex flex-col justify-center relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 flex items-center justify-center">
        <motion.span
          className=" text-blue-400 ml-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Most Popular
        </motion.span>
        <motion.span
          className="text-yellow-400 border-t-4 border-b-4 border-yellow-400 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          XPs
        </motion.span>
      </h2>

      <div className="flex justify-between items-center mb-6 px-4 md:px-8 lg:px-16">
        <h2 className=" font-bold mb-2 flex items-center justify-start">
          <motion.span
            className="text-blue-400 ml-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Featured
          </motion.span>
          <motion.span
            className=" text-blue-400 ml-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experiences
          </motion.span>
        </h2>
        <Link
          to="/experiences"
          className="text-black font-semibold relative group transition-colors duration-300 hover:text-gray-700 pb-1 flex items-center"
        >
          <motion.span
            className="text-blue-400 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            View All
          </motion.span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-110 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </div>

      <div className="w-full relative select-none">
        <AnimatePresence>
          {activeImage && (
            <BackgroundImage image={activeImage} key={activeImage} />
          )}
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-8">
          {isLargeScreen ? (
            <div className="flex justify-center items-stretch gap-8">
              {limitedTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} onHover={setActiveImage} />
              ))}
            </div>
          ) : (
            <>
              <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-black"></div>
              <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-black"></div>
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
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                }}
                className="mySwiper"
                ref={swiperRef}
              >
                {limitedTrips.map((trip) => (
                  <SwiperSlide key={trip.id} className="py-8">
                    <TripCard trip={trip} onHover={setActiveImage} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination absolute bottom-4 z-20"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCarousel;
