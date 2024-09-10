import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RefundPolicy = () => {
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
          Refund Policy
        </motion.h1>
        
        <motion.p 
          className="mb-10 text-center max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At GJ Experiences, we're committed to making your adventure unforgettable. However, we understand that sometimes plans change. This policy outlines the conditions under which you may receive a refund for your GJ Experiences trip.
        </motion.p>
        
        <Section title="CANCELLATION BY YOU (GUEST)">
          
          <ul className="list-disc pl-8 space-y-2">
            <li>Cancellations made more than 15 days before your trip departure date will receive 95% of the amount as a refund, after deducting the processing fee.</li>
            <li>Cancellations made within 5 to 14 days of your trip departure date will receive 70% of the amount as a refund.</li>
            <li>Cancellations made within 1 to 4 days of your trip departure date will receive 25% of the amount as a refund.</li>
            <li>Cancellations made within 24 hours of your trip departure date are non-refundable.</li>
          </ul>
          <br></br>
          <h6 className="font-semibold mb-3">Please note: If your trip includes non-refundable components like flights or specific activities, these may have their own cancellation policies. We will inform you of these details at the time of booking.</h6>
        </Section>
        
        <Section title="CANCELLATION BY GJ EXPERIENCES">
          <p>In the unlikely event that GJ Experiences needs to cancel your trip, we will provide you with a full refund of the amount you paid us. We will also make every effort to rebook you on a comparable trip or offer you a credit towards a future adventure.</p>
        </Section>
        
        <Section title="CHANGES TO YOUR BOOKING">
          <p>We understand that adjustments may be necessary. If you need to change your booking details (e.g., departure date, number of participants), we will do our best to accommodate your request. However, changes made within 5-7 days of your trip departure date may be subject to a change fee or may not be possible.</p>
        </Section>

        <Section title="OBTAINING A REFUND">
          <p>To request a refund, please contact us in writing via email at</p><a href="mailto:business@gulaabjamoon.com" className="underline hover:text-blue-600">
                business@gulaabjamoon.com</a>
          <p> as soon as possible. Please include your booking confirmation number, the reason for your cancellation, and any other relevant details.</p>
        </Section>

        <Section title="ADDITIONAL INFORMATION">
        <ul className="list-disc pl-8 space-y-2">
            <li>No refunds will be issued for unused portions of the trip, including early departures, missed activities, or changes in itinerary due to weather or other unforeseen circumstances.</li>
            <li>We highly recommend purchasing travel insurance to protect yourself in case of unforeseen circumstances that prevent you from taking your trip.</li>
          </ul>
        </Section>

        <Section title="Contact Us">
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

export default RefundPolicy;