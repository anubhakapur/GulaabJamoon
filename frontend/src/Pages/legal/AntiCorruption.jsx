import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AntiCorruption = () => {
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
          ANTI CORRUPTION AND BRIBERY POLICY
        </motion.h1>
        
        <motion.p 
          className="mb-10 text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At GJ Experiences, we are dedicated to conducting business with the highest ethical standards. We believe in transparent practices, fair competition, and building trust with our partners, clients, and communities. This policy outlines our unwavering commitment to preventing and combating corruption and bribery in all forms.
        </motion.p>
        
        <Section title="OUR CORE VALUES">
          
          <ul className="list-disc pl-8 space-y-2">
            <li>Integrity and Transparency: We operate with honesty and transparency in all our business dealings. We avoid any activities that could be perceived as unethical or compromising our integrity.</li>
            <li>Compliance with Laws and Regulations: We adhere to all applicable laws and regulations regarding anti-corruption and bribery, both locally and internationally. We expect our employees, partners, and suppliers to do the same.</li>
            <li>Zero Tolerance for Corruption: We have a zero-tolerance policy for any form of corruption or bribery within our company or its supply chain. We will investigate any suspected cases thoroughly and take appropriate action, including disciplinary measures and reporting to the relevant authorities.</li>
          </ul>
        </Section>
        
        <Section title="OUR COMMITMENTS">
        <ul className="list-disc pl-8 space-y-2">
            <li>Gift and Hospitality Policy: We have a clear and documented policy regarding gifts, entertainment, and hospitality, ensuring they are offered and received appropriately and within legal boundaries.</li>
            <li>Due Diligence on Partners: We conduct thorough due diligence on all potential and existing partners, assessing their commitment to ethical practices and compliance with anti-corruption laws.</li>
            <li>Anti-Corruption Training: We provide regular training to our employees on recognizing and preventing corruption and bribery, equipping them with the knowledge and tools to act ethically in all situations.</li>
            <li>Reporting Mechanisms: We have established clear and accessible reporting mechanisms for employees and external stakeholders to report any suspected cases of corruption or bribery. We guarantee anonymity and protection for whistleblowers.</li>
          </ul>
        </Section>
        
        <Section title="BUILDING A CULTURE OF INTEGRITY">
        <p>We believe that ethical conduct is not just a policy, but a core value that shapes our everyday operations. We strive to foster a culture of integrity and transparency throughout our organization, where everyone feels empowered to speak up and report any potential wrongdoing.</p>
        <br />
        <p>By choosing GJ Experiences, you are choosing a company committed to ethical travel. We are confident that our commitment to anti-corruption and bribery practices contributes to building a more responsible and sustainable tourism industry.</p>
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

export default AntiCorruption;