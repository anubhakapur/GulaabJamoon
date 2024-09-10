import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </motion.h1>
        
        <motion.p 
          className="mb-10 text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At GJ Experiences, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and manage your personal information when you use our website, mobile applications, or services.
        </motion.p>
        
        <Section title="INFORMATION WE COLLECT">
          <h6 className="font-semibold mb-3">We may collect the following personal information from you:</h6>
          <ul className="list-disc pl-8 space-y-2">
            <li>Contact Information: Name, email address, phone number, mailing address.</li>
            <li>Demographic Information: Age, gender, occupation, interests.</li>
            <li>Usage Data: Information about how you use our website and services, such as browsing history, search queries, booking information, and preferences.</li>
            <li>Device Information: IP address, device type, operating system, browser type.</li>
          </ul>
        </Section>
        
        <Section title="HOW WE USE YOUR INFORMATION">
          <h6 className="font-semibold mb-3">We use your personal information for the following purposes:</h6>
          <ul className="list-disc pl-8 space-y-2">
            <li>To process your bookings and provide you with the services you request.</li>
            <li>To personalize your experience on our website and services.</li>
            <li>To communicate with you about our services, including promotions and offers.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>
        </Section>
        
        <Section title="SHARING YOUR INFORMATION">
          <h6 className="font-semibold mb-3">We may share your personal information with the following third parties:</h6>
          <ul className="list-disc pl-8 space-y-2">
            <li>Service providers who help us operate our website and services, such as payment processors and marketing agencies.</li>
            <li>Law enforcement or government agencies when required by law.</li>
            <li>Third parties with your consent.</li>
          </ul>
        </Section>

        <Section title="DATA SECURITY">
          <p>We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure, so we cannot guarantee the absolute security of your information.</p>
        </Section>

        <Section title="YOUR RIGHTS">
          <p>You have the right to access, correct, update, or delete your personal information. You also have the right to object to the processing of your information. For more information about your rights, please contact us.</p>
        </Section>

        <Section title="COOKIES AND TRACKING TECHNOLOGIES">
          <p>We may use cookies and other tracking technologies to collect information about your use of our website and services. You can control the use of cookies in your browser settings.</p>
        </Section>

        <Section title="CHANGES TO THIS POLICY">
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
        </Section>

        <Section title="CONTACT US">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none pl-0 mt-3 space-y-2">
            <li>
              <a href="mailto:business@gulaabjamoon.com" className="underline hover:text-blue-600">
                business@gulaabjamoon.com
              </a>
            </li>
            <li>
              <a href="tel:+917007162269" className=" underline hover:text-blue-600">
                +91 7007162269
              </a>
            </li>
          </ul>
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

export default PrivacyPolicy;