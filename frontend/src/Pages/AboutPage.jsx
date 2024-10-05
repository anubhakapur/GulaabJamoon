import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from '../assets/images/about.jpg';
import responsibleTravelBg from '../assets/images/responsible-travel.webp';
import roshanImage from '../assets/images/roshan.webp';
import sarthakImage from '../assets/images/sarthak.webp';
import sahajImage from '../assets/images/sahaj.webp';
import bhanuImage from '../assets/images/bhanu.webp';
import teamGJLogo from '../assets/images/20.png';
import whoIsGJImage from '../assets/images/19.png';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('responsible');
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const whoIsGJRef = useRef(null);
  const travelStylesRef = useRef(null);
  const teamGJRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const sectionContent = {
    responsible: {
      title: "RESPONSIBLE TRAVEL",
      description: "Responsible travel is part of everything we do at Gulaab Jamoon, from the local tour managers and guides we employ, to the restaurants and other services that we use, we aim to ensure that your money stays in GJ and supports local businesses."
    },
    passion: {
      title: "GJ IS OUR PASSION",
      description: "We are committed to showing GJ to the world in an honest way, to reveal the uniqueness of India's culture, by changing the existing perception of India. This is why we encourage our travellers to Do it the Gulaab Jamoon way!"
    },
    expertise: {
      title: "LOCAL EXPERTISE AND NETWORKS",
      description: "We have been working on GJ for a long time, long enough to make long-lasting friendships with our local partners and vendors. In a country that's constantly transforming, we dedicate a lot of time to nourishing our standing relationships and forging new ones."
    },
    experiences: {
      title: "BEST IN EXPERIENCES",
      description: "We redefine travel through curated experiences that transcend the ordinary. Immerse yourself in a world where every journey is a masterpiece, meticulously crafted to awaken your senses. At GJ, we don't just offer trips, we deliver unparalleled adventures, making us the epitome of the 'Best in Experiences'."
    }
  };

  const teamMembers = [
    { 
      name: "Roshan Jain", 
      role: "Product & Operations", 
      image: roshanImage,
      description: "Roshan brings a wealth of experience in product development and streamlined operations to GJ."
    },
    { 
      name: "Sarthak Bhat", 
      role: "Product & Operations", 
      image: sarthakImage,
      description: "Sarthak's innovative approach to product design and operational efficiency drives GJ forward."
    },
    { 
      name: "Sahaj Chawla", 
      role: "Marketing & Finance", 
      image: sahajImage,
      description: "Sahaj's strategic marketing insights and financial acumen contribute significantly to GJ's growth."
    },
    { 
      name: "Bhanu Potta", 
      role: "Mentor", 
      image: bhanuImage,
      description: "As a mentor, Bhanu provides invaluable guidance and wisdom, shaping GJ's vision and fostering growth across all aspects of the company."
    }
  ];

  return (
    <motion.div 
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.div 
        className="w-full h-screen"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.section 
        id="who-is-gulaab-jamoon"
        ref={whoIsGJRef}
        className="min-h-screen w-full bg-white flex items-center justify-center p-8 md:p-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-4xl">
          <motion.img 
            src={whoIsGJImage} 
            alt="Who is Gulaab Jamoon" 
            className="w-full max-w-md mx-auto mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.p 
            className="mb-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We are a unique company, born from the vision of a group of
            friends who wanted to bring people together through shared
            experiences. From trips and treks, to movie nights and comedy
            shows, we have got you covered. If you can think of it, we can
            organize it. As a backbencher-turned-entrepreneur, we're not
            afraid to break the mold and try something new!
          </motion.p>
          <motion.p 
            className="mb-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Are you tired of just "jamming" through life? Let GJ add some
            spice to your monotonous routine!
          </motion.p>
          <motion.p 
            className="text-orange-500 font-semibold text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Gulaab Jamoon: The Sweetness you were missing!
          </motion.p>
        </div>
      </motion.section>
      <motion.section 
        id="travel-styles"
        ref={travelStylesRef}
        className="relative min-h-screen w-full text-white"
        style={{ 
          backgroundImage: `url(${responsibleTravelBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-16">
          <motion.div 
            className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl mt-32 md:mt-48"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
              <ul className="space-y-8 md:space-y-10 text-2xl md:text-3xl lg:text-4xl">
                {Object.entries(sectionContent).map(([key, { title }]) => (
                  <motion.li 
                    key={key} 
                    className={`cursor-pointer flex items-center transition-all duration-300 ease-in-out ${
                      activeSection === key 
                        ? 'text-yellow-400 transform -translate-x-4 scale-105' 
                        : 'hover:text-yellow-200 hover:-translate-x-2 hover:scale-105'
                    }`}
                    onClick={() => setActiveSection(key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-4">•</span>
                    {title}
                  </motion.li>
                ))}
              </ul>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSection}
                className="md:w-1/2 mt-8 md:mt-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                  {sectionContent[activeSection].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
        id="team-gj"
        ref={teamGJRef}
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.img 
            src={teamGJLogo} 
            alt="TEAM GJ" 
            className="w-full max-w-md mx-auto mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p 
            className="text-2xl text-center mb-12 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            THE REASON BEHIND THE SWEET MEMORIES
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-center">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
};

export default LandingPage;