import React from 'react';
import localExpertImage from '../assets/images/img1.webp';
import sustainableImage from '../assets/images/img2.webp';
import uniqueCurationsImage from '../assets/images/img3.webp';
import communityServiceImage from '../assets/images/img4.webp';

const WhyGJExperiences = () => {
  const features = [
    {
      title: 'LOCAL TRAVEL EXPERTS',
      description: 'GJ is a government-acknowledged company registered with Karnataka EcoTourism, and with more than 20+ govt. registered travel experts accompanying GJ.',
      imageUrl: localExpertImage,
    },
    {
      title: 'SUSTAINABLE EXPERIENCES',
      description: 'Every next step, every next gear, and at our every next experience, GJ makes sure to keep the travel, accommodation, and journey as sustainable as possible.',
      imageUrl: sustainableImage,
    },
    {
      title: 'UNIQUE CURATIONS',
      description: 'Gulaab Jamoon XP is known for curating the most unique and creative events and experiences. More than 10+ corporate companies have already been partnered with us.',
      imageUrl: uniqueCurationsImage,
    },
    {
      title: 'COMMUNITY SERVICE',
      description: 'Taking the journey of a customer from more than an experience towards a neverending bond at the GJ community space to interact, help, and enjoy with more like-minded people.',
      imageUrl: communityServiceImage,
    },
  ];

  return (
    <div className="bg-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          WHY <span className="text-yellow-400 border-t-2 border-b-2 border-yellow-400 px-2 hover:text-white hover:border-white transition-colors duration-300">GJ</span> EXPERIENCES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 overflow-hidden">
                <img 
                  src={feature.imageUrl} 
                  alt={feature.title} 
                  className="w-24 h-24 rounded-full mx-auto object-cover transform transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-white text-sm group-hover:text-yellow-100 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyGJExperiences;