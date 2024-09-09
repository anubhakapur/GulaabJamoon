import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiSmile, FiHeart, FiStar, FiSun } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative overflow-hidden">
        <BackgroundVideo />
        <BackgroundElements />
        <div className="relative z-10">
          <Header home={false} />
          <AnimatedTitle />
          <AnimatedAboutUs />
          <AnimatedTeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const AnimatedTitle = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      className="text-6xl md:text-8xl font-extrabold text-white text-center pt-[9rem] pb-[5rem] relative z-10"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        About Us
      </motion.span>
      <motion.div
        className="h-1 bg-gradient-to-r from-gray-400 to-white mt-4 mx-auto"
        variants={{
          hidden: { width: 0 },
          visible: { width: "50%", transition: { duration: 1.5, delay: 0.5 } },
        }}
      />
    </motion.h1>
  );
};

const AnimatedAboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
      className="bg-black text-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300 relative z-10 mb-20"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col sm:flex-row items-center sm:items-start mb-6"
      >
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
            Who is Gulaab Jamoon?
          </h3>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative"
      >
        <FaQuoteLeft className="text-4xl text-gray-400 absolute top-0 left-0" />
        <p className="text-xl leading-relaxed pl-10 pr-10 italic">
          <p className="text-lg text-gray-300 transition-colors hover:text-white duration-300">
            We are a vibrant company, born from the passion of four visionary friends who wanted to spread joy and create unforgettable moments. From exhilarating adventures to heartwarming gatherings, we curate experiences that bring smiles to faces and warmth to hearts. Our mission is simple: if you can dream it, we can turn it into a celebration of life! As innovative joy-makers, we're committed to turning every day into an opportunity for happiness and connection.
            <br />
            <br />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Ready to infuse your life with moments of pure joy?
              <br /> Let Gulaab Jamoon sprinkle happiness into your world!
            </span>
          </p>
        </p>
        <FaQuoteRight className="text-4xl text-gray-400 absolute bottom-0 right-0" />
      </motion.div>
    </motion.div>
  );
};

const AnimatedTeamSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative z-10 mb-20"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
      >
        Meet Our Joy Ambassadors
        <motion.div
          className="h-1 bg-gradient-to-r from-gray-400 to-white mt-4 mx-auto"
          variants={{
            hidden: { width: 0 },
            visible: { width: "40%", transition: { duration: 1.5, delay: 0.5 } },
          }}
        />
      </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-20">
        <HostCard
          name="Aarav Sharma"
          role="Adventure Architect"
          image="/images/founder1.jpg"
          description="Aarav is the mastermind behind our thrilling expeditions. With a background in extreme sports and a passion for pushing boundaries, he ensures that every Gulaab Jamoon adventure is nothing short of extraordinary."
        />
        <HostCard
          name="Zara Patel"
          role="Happiness Curator"
          image="/images/founder2.jpg"
          description="Zara brings a touch of magic to our experiences. Her expertise in positive psychology and event planning ensures that every Gulaab Jamoon gathering is filled with laughter, warmth, and unforgettable moments."
        />
        <HostCard
          name="Rohan Kapoor"
          role="Tech Optimist"
          image="/images/founder3.jpg"
          description="Rohan is our tech wizard, constantly finding new ways to enhance our experiences through innovative technology. His creations in virtual and augmented reality are opening up new realms of joy and connection for our community."
        />
        <HostCard
          name="Priya Malhotra"
          role="Community Cheerleader"
          image="/images/founder4.jpg"
          description="Priya is the heart of Gulaab Jamoon, fostering connections and building communities. Her infectious enthusiasm and talent for bringing people together ensure that every event leaves participants with new friends and cherished memories."
        />
      </div>
    </motion.section>
  );
};

const HostCard = ({ name, role, image, description }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
      className="bg-gray-800 text-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl w-full transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0"
        >
          <motion.img
            src={image}
            alt={name}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex-shrink-0 border-4 border-white shadow-lg object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <div className="w-full lg:w-2/3 lg:pl-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center lg:text-left mb-4 md:mb-6"
          >
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
              {name}
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl mt-2">{role}</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative"
          >
            <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-gray-400 absolute top-0 left-0" />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed pl-8 sm:pl-10 md:pl-12 pr-8 sm:pr-10 md:pr-12 italic text-gray-300 transition-colors hover:text-white duration-300">
              {description}
            </p>
            <FaQuoteRight className="text-2xl sm:text-3xl md:text-4xl text-gray-400 absolute bottom-0 right-0" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute text-gray-200 text-6xl"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <FiSmile />
      </motion.div>
      <motion.div
        className="absolute text-gray-200 text-6xl right-10 top-1/4"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      >
        <FiHeart />
      </motion.div>
      <motion.div
        className="absolute text-gray-200 text-6xl left-1/4 bottom-1/4"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      >
        <FiStar />
      </motion.div>
      <motion.div
        className="absolute text-gray-200 text-6xl right-1/4 bottom-10"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
      >
        <FiSun />
      </motion.div>
    </div>
  );
};

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/src/assets/images/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default AboutPage;