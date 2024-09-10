import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ResponsibleTravel = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 mt-16 sm:mt-24">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-yellow-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RESPONSIBLE TRAVEL POLICY
        </motion.h1>
        
        <motion.p 
          className="mb-10 text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At GJ Experiences, we believe in creating unforgettable travel experiences that not only enrich our guests' lives but also minimize our impact on the environments and communities we visit. Through responsible travel practices, we aim to leave a positive footprint and ensure the long-term sustainability of tourism destinations.
        </motion.p>
        <Section title="OUR GUIDING PRINCIPLES">
          <ul className="list-disc pl-8 space-y-2">
            <li>Respecting the Environment:
              <ul className="list-[circle] pl-8 space-y-2">
                <li>We actively promote eco-friendly travel practices, choosing transportation with minimal emissions, supporting sustainable accommodation options, and encouraging responsible waste management.</li>
                <li>We educate our guests on environmental awareness, encouraging responsible behavior like minimizing water and energy consumption, respecting local flora and fauna, and avoiding harmful activities.</li>
                <li>We partner with local conservation organizations and support initiatives that protect the environment and promote biodiversity.</li>
              </ul>
            </li>
            <li>Empowering Local Communities:
              <ul className="list-[circle] pl-8 space-y-2">
                <li>We strive to create economic opportunities for local communities by employing local guides, partnering with local businesses, and sourcing products and services responsibly.</li>
                <li>We promote cultural understanding and respect through immersive experiences that involve local communities and traditions.</li>
                <li>We support initiatives that enhance local livelihoods and infrastructure, ensuring tourism benefits the community as a whole.</li>
              </ul>
            </li>
            <li>Preserving Cultural Heritage:
              <ul className="list-[circle] pl-8 space-y-2">
                <li>We ensure our itineraries are sensitive to local customs and traditions, promoting respectful interactions with communities.</li>
                <li>We support the preservation of cultural heritage sites and encourage responsible tourism practices that protect these valuable resources.</li>
                <li>We educate our guests on the importance of cultural sensitivity and encourage them to be responsible ambassadors when exploring local communities.</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="TRANSPARENCY AND COLLABORATION">
          <p>We are committed to transparency in our practices and collaborate with stakeholders, including local communities, NGOs, and tourism authorities, to ensure responsible travel development. We continuously evaluate our impact and strive to improve our responsible travel practices.</p>
        </Section>
        
        <Section title="JOIN US ON THE JOURNEY">
        <p>By choosing GJ Experiences, you are choosing to travel responsibly. We invite you to join us in creating a positive impact on the world and contributing to a more sustainable future for tourism. Together, let's explore responsibly and leave a legacy of respect and care for the destinations we cherish.</p>
        </Section>
        
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }) => (
  <motion.div 
    className="mb-10 bg-white p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
  >
    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">{title}</h2>
    {children}
  </motion.div>
);

export default ResponsibleTravel;