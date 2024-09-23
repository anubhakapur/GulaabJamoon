import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import topImage from '../assets/images/about.jpg'; // Adjust this path as needed

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full">
        <img src={topImage} alt="Group of people" className="w-full h-auto" />
      </div>
      <main className="flex-grow bg-teal-900">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;