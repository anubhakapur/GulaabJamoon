import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsAndConditions = () => {
  const terms = [
    "The travel to and fro entails the risk of body injuries. Participation is voluntary and at the person's own risk and is neither required nor part of his/her/their curriculum requirement.",
    "The person may be liable for bodily injuries. He/She/They understand the risks and hazards, including variations in terrain surface and slippery areas. He/She/They shall always refrain from acting in a manner that may cause or contribute injury to themself or others.",
    "He/She/They will not be involved in any sort of misconduct or indiscipline during the trip.",
    "He/She/they are physically and mentally able to participate in the trip and He/She/They know of no disability that would prevent their participation. And, He/She/They will solely be accountable for any illegal possessions found with me.",
    "Travelers are responsible for their luggage and belongings. Rosanisa Xperiences LLP is not responsible for any damage or missing items.",
    "If substances like alcohol and cigarettes are found by the authorities, He/She/They will be fully responsible for the consequences.",
    "Since alcohol and any illegal substances are strictly prohibited during the package time with Rosanisa Xperiences LLP, He/She/They will not consume any such thing, and else will be liable for any kind of punishment.",
    "Alterations to the itinerary may be necessary due to various factors, such as weather and road conditions, and the physical ability of participants, in the interest of safety, comfort, and general well-being.",
    "He/She/They will happily accommodate whatever the step is.",
    "He/She/They accept all the above Terms & Conditions by Team Gulaab Jamoon and will be liable for punishment for defaulting on any of the above.",
    "GJ Experiences or Team Gulaab Jamoon is a social entity that belongs to ROSANISA XPERIENCES LLP."
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16 sm:mt-24">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms and Conditions
        </motion.h1>
        <ul className="space-y-4 list-disc pl-5">
          {terms.map((term, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <p className="text-gray-800 hover:text-black transition-colors duration-300">{term}</p>
            </motion.li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;