import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import rs from "/src/assets/images/rosanisa.jpg";
import tourism from "/src/assets/images/tourism.jpg"
import kstdc from "/src/assets/images/kstdc.png"
import kn from "/src/assets/images/karnataka.jpg"

const Footer = forwardRef((props, ref) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      ref={ref}
      className="bg-cyan-950 to-black text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <img src={rs} alt="Rosanisa Xperiences LLP" className="h-24 mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="text-sm text-gray-300 leading-relaxed">
              GJ Experiences is a subsidiary registered under ROSANISA XPERIENCES LLP (Bangalore, India)
            </p>
            <div className="flex flex-wrap gap-2 mt-2 lg:hidden">
              <img src={tourism} alt="Ministry of Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
              <img src={kn} alt="Karnataka Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
            </div>
            <img src={kstdc} alt="KSTDC" className="h-16 mt-2 lg:hidden transition-transform duration-300 hover:scale-110" />
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-xl font-bold text-yellow-400">Contacts and Timings</h3>
            <p className="text-sm">
              Office Hours: 10 AM to 08 PM (IST)<br />
              Mondays to Saturdays
            </p>
            <p className="text-sm">
              Telephone: <a href="tel:+917007162269" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">+917007162269</a>
            </p>
            <p className="text-sm">
              Email: <a href="mailto:business@gulaabjamoon.com" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">business@gulaabjamoon.com</a>
            </p>
            
            <h3 className="text-xl font-bold text-yellow-400 mt-4">India Registered Address</h3>
            <p className="text-sm">
              NO 3 K NO 620 Begur Hobli, Akshay Nagar<br />
              Bangalore Karnataka, India 574212
            </p>
            <p className="text-sm">
              LLP Identification No.: ACE-2203<br />
              GSTIN: AA290124094020M
            </p>
          </motion.div>

          {/* About Us Links */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-xl font-bold text-yellow-400">About Us</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/about#who-is-gulaab-jamoon" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Who is Gulaab Jamoon
                </Link>
              </li>
              <li>
                <Link to="/about#travel-styles" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Travel Styles
                </Link>
              </li>
              <li>
                <Link to="/about#team-gj" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Team GJ
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">GJ Company Policy</h3>
            <ul className="text-sm space-y-1">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Refund Policy</Link></li>
              <li><Link to="/responsible-travel-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Responsible Travel Policy</Link></li>
              <li><Link to="/anti-slavery-and-human-trafficking-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Anti-Slavery and Human Trafficking Policy</Link></li>
              <li><Link to="/anti-corruption-and-bribery-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Anti-Corruption and Bribery Policy</Link></li>
            </ul>
          </motion.div>

          {/* Social Media and Partners */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-xl font-bold text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/gulaabjamoonexperiences/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/gulaab-jamoon-experiences/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@Gulaab.Jamoon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={28} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/gulaabjamoonexperiences" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={28} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/gulaab_ja_moon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={28} />
              </motion.a>
            </div>
            <div className="hidden lg:flex flex-col mt-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Our Partners</h3>
              <div className="flex flex-wrap gap-4">
                <img src={tourism} alt="Ministry of Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
                <img src={kn} alt="Karnataka Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
                <img src={kstdc} alt="KSTDC" className="h-16 transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Helpline & Support */}
        <motion.div className="mt-8 pt-6 border-t border-gray-700" variants={fadeInUp}>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GJ Helpline & Support</h3>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917869926687" className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:underline">+91-7869926687</a>
            <a href="tel:+919972368454" className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:underline">+91-9972368454</a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div className="mt-6 pt-6 border-t border-gray-700 flex justify-center items-center text-xs" variants={fadeInUp}>
          <div className="text-gray-400">© 2024 ROSANISA XPERIENCES LLP</div>
        </motion.div>
      </div>
    </motion.footer>
  );
});

export default Footer;