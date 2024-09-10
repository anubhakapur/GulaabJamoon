import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const teamMembers = [
    { name: "Mohin", linkedIn: "https://www.linkedin.com/in/johndoe" },
    { name: "Simran", linkedIn: "https://www.linkedin.com/in/janesmith" },
    { name: "Anubha", linkedIn: "https://www.linkedin.com/in/anubha-kapur-378b7a24b/" },
    { name: "Madhav", linkedIn: "https://www.linkedin.com/in/emilybrown" },
    { name: "Navish", linkedIn: "https://www.linkedin.com/in/chrislee" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 to-black text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info and Logos */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <img src="/src/assets/images/rosanisa.jpg" alt="Rosanisa Xperiences LLP" className="h-24 mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="text-sm text-gray-300 leading-relaxed">
              GJ Experiences is a subsidiary registered under ROSANISA XPERIENCES LLP (Bangalore, India)
            </p>
            <div className="flex flex-wrap gap-2 mt-2 lg:hidden">
              <img src="/src/assets/images/tourism.jpg" alt="Ministry of Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
              <img src="/src/assets/images/karnataka.jpg" alt="Karnataka Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
            </div>
            <img src="/src/assets/images/kstdc.png" alt="KSTDC" className="h-16 mt-2 lg:hidden transition-transform duration-300 hover:scale-110" />
          </motion.div>

          {/* Contacts, Timings, and Address */}
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

          {/* About Us and Company Policy */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-xl font-bold text-yellow-400">About Us</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Who is Gulaab Jamoon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Travel Styles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Team GJ</a></li>
            </ul>

            <h3 className="text-xl font-bold text-yellow-400 mt-4">GJ Company Policy</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Terms & Conditions</a></li>
              <li><a href="/refund-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Refund Policy</a></li>
              <li><a href="/responsible-travel-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Responsible Travel Policy</a></li>
              <li><a href="/anti-slavery-and-human-trafficking-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Anti-Slavery and Human Trafficking Policy</a></li>
              <li><a href="/anti-corruption-and-bribery-policy" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Anti-Corruption and Bribery Policy</a></li>
            </ul>
          </motion.div>

          {/* Follow Us */}
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
                <img src="/src/assets/images/tourism.jpg" alt="Ministry of Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
                <img src="/src/assets/images/karnataka.jpg" alt="Karnataka Tourism" className="h-16 transition-transform duration-300 hover:scale-110" />
                <img src="/src/assets/images/kstdc.png" alt="KSTDC" className="h-16 transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* GJ Helpline & Support */}
        <motion.div className="mt-8 pt-6 border-t border-gray-700" variants={fadeInUp}>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GJ Helpline & Support</h3>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917869926687" className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:underline">+91-7869926687</a>
            <a href="tel:+919972368454" className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:underline">+91-9972368454</a>
          </div>
        </motion.div>

        {/* Copyright and Website by */}
        <motion.div className="mt-6 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-xs" variants={fadeInUp}>
          <div className="text-gray-400 mb-2 sm:mb-0">© 2024 ROSANISA XPERIENCES LLP</div>
          <div className="flex flex-wrap justify-center items-center">
            <span className="text-gray-400 mr-1">Website by:</span>
            {teamMembers.map((member, index) => (
              <React.Fragment key={member.name}>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {member.name}
                </a>
                {index < teamMembers.length - 1 && <span className="mx-1 text-gray-400">|</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;