import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AntiSlavery = () => {
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
          ANTI SLAVERY AND HUMAN TRAFFICKING POLICY
        </motion.h1>
        
        <motion.p 
          className="mb-10 text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At GJ Experiences, we are deeply committed to upholding the highest ethical standards in our operations. We stand firmly against all forms of slavery, human trafficking, and exploitation, and we actively work to ensure our practices align with this unwavering commitment.
        </motion.p>
        
        <Section title="OUR CORE VALUES">
          
          <ul className="list-disc pl-8 space-y-2">
            <li>Respect for Human Rights: We believe in the fundamental dignity and rights of every individual, and we condemn any practices that violate these rights. We actively advocate against slavery and human trafficking in all forms, including forced labor, sexual exploitation, and child exploitation.</li>
            <li>Transparency and Accountability: We operate with transparency and hold ourselves accountable to upholding ethical standards. We have clear policies and procedures in place to identify and address any potential risks of slavery or human trafficking within our supply chain and operations.</li>
            <li>Partnership and Collaboration: We believe collaboration is key to combating slavery and human trafficking. We partner with government agencies, NGOs, and other stakeholders to share best practices, raise awareness, and support initiatives aimed at eradicating these evils.</li>
          </ul>
        </Section>
        
        <Section title="OUR COMMITMENTS">
        <ul className="list-disc pl-8 space-y-2">
            <li>Supplier Due Diligence: We conduct comprehensive due diligence on all our suppliers, including travel partners, accommodation providers, and activity organizers, to assess their commitment to ethical practices and ensure they adhere to our standards.</li>
            <li>Employee Training: We provide our employees with regular training on recognizing and reporting potential signs of slavery and human trafficking. This empowers them to be vigilant and contribute to preventing these crimes.</li>
            <li>Guest Awareness: We raise awareness among our guests about the issue of slavery and human trafficking and provide them with resources to make informed choices while traveling.</li>
            <li>Zero Tolerance Policy: We have a zero-tolerance policy towards any form of slavery or human trafficking within our company or its supply chain. We will report any suspected cases to the relevant authorities and take appropriate action.</li>
          </ul>
        </Section>
        
        <Section title="JOINING THE FIGHT">
        <h6 className="font-semibold mb-3">We believe that responsible travel requires a collective effort to combat slavery and human trafficking. By choosing GJ Experiences, you are choosing a company that is committed to making a difference. We invite you to join us in this fight by:</h6>
          <ul className="list-disc pl-8 space-y-2">
            <li>Being aware of the issue: Learn about the signs of slavery and human trafficking and how you can report them.</li>
            <li>Making informed choices: Choose travel companies and providers that demonstrate a commitment to ethical practices.</li>
            <li>Raising your voice: Speak up against slavery and human trafficking whenever you see it, and encourage others to do the same.</li>
          </ul>
          <br />
        <p>Together, we can create a travel industry free from exploitation and uphold the dignity of all individuals.</p>
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

export default AntiSlavery;