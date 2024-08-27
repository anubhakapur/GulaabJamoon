import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import testimonials from '../assets/data/testimonials';

const TestimonialCard = ({ name, title, comment, rating }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto"
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
      <motion.img
        src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${name}`}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-purple-600"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-2xl sm:text-3xl">{name}</h3>
        <p className="text-gray-400 text-lg">{title}</p>
        <div className="flex justify-center sm:justify-start mt-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" />
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
      <FaQuoteLeft className="text-4xl text-gray-700 absolute top-0 left-0" />
      <p className="text-xl leading-relaxed pl-10 pr-10 italic">{comment}</p>
      <FaQuoteRight className="text-4xl text-gray-700 absolute bottom-0 right-0" />
    </div>
  </motion.div>
);

const CustomSlider = ({ value, onChange, max }) => (
  <div className="relative w-full max-w-xl mx-auto">
    <input
      type="range"
      min="0"
      max={max}
      value={value}
      onChange={onChange}
      className="w-full appearance-none bg-transparent cursor-pointer"
      style={{
        '--range-color': '#4B5563',
      }}
    />
    <div
      className="absolute top-1/2 left-0 right-0 h-2 -mt-1 rounded-full bg-gray-300"
      style={{
        background: `linear-gradient(to right, #4B5563 0%, #4B5563 ${(value / max) * 100}%, #D1D5DB ${(value / max) * 100}%, #D1D5DB 100%)`,
      }}
    ></div>
    <style jsx>{`
      input[type="range"] {
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
      }
      input[type="range"]:focus {
        outline: none;
      }
      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 0;
        width: 0;
      }
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
      }
      input[type="range"]::-moz-range-thumb {
        height: 0;
        width: 0;
        background: transparent;
        cursor: pointer;
        border: none;
      }
      input[type="range"]::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border: none;
        color: transparent;
      }
      input[type="range"]::-ms-fill-lower {
        background: transparent;
      }
      input[type="range"]::-ms-fill-upper {
        background: transparent;
      }
      input[type="range"]::-ms-thumb {
        height: 0;
        width: 0;
        background: transparent;
        cursor: pointer;
        border: none;
      }
    `}</style>
  </div>
);

const StatCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-md text-center"
  >
    {icon}
    <h3 className="mt-4 font-semibold text-lg text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </motion.div>
);

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSliderChange = (event) => {
    setCurrentIndex(Number(event.target.value));
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-tight"
        >
          What Our Clients Say
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard
            icon={<BsPeople className="text-4xl text-blue-500 mx-auto" />}
            title="Happy Clients"
            value="1000+"
          />
          <StatCard
            icon={<FaStar className="text-4xl text-yellow-500 mx-auto" />}
            title="Average Rating"
            value="4.9"
          />
          <StatCard
            icon={<FaQuoteRight className="text-4xl text-green-500 mx-auto" />}
            title="Testimonials"
            value="500+"
          />
        </div>

        <div className="relative mb-8">
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentIndex} {...testimonials[currentIndex]} />
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <CustomSlider
            value={currentIndex}
            onChange={handleSliderChange}
            max={testimonials.length - 1}
          />
          <div className="text-center mt-4 text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Arushi Goyal",
//     location: "Visitor Manali",
//     rating: 5,
//     text: "My stay at Ringen by Mid Orchards was great! I stayed at one of the rooms in the main cottage which had beautiful interiors and a balcony with an amazing mountain view. It also had a common room with a fireplace and great wooden decor. The property is easily accessible and very peaceful. The food was good and staff is very polite. I highly recommend staying at one of the premium luxury rooms of Ringen for the best experience.",
//   },
//   {
//     name: "John Doe",
//     location: "Adventure Seeker",
//     rating: 4,
//     text: "An unforgettable journey through breathtaking landscapes. The guides were knowledgeable and friendly, making every moment count. Highly recommend for nature lovers!",
//   },
//   {
//     name: "Emma Smith",
//     location: "Cultural Explorer",
//     rating: 5,
//     text: "The cultural immersion tours were phenomenal. I learned so much about local traditions and history. The accommodations were comfortable and the food was delicious. A perfect blend of education and relaxation.",
//   },
//   {
//     name: "Alex Johnson",
//     location: "City Traveler",
//     rating: 4,
//     text: "The city tours were well-organized and hit all the major spots. Our guide was funny and informative. The only downside was the packed schedule, but that's expected when trying to see so much in a short time.",
//   },
// ];

// const TestimonialPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleAvatarClick = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 10000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-white text-black min-h-screen flex items-center justify-center overflow-hidden relative">
//       <div className="absolute inset-0 bg-opacity-5 bg-gray-200 pattern-grid-lg"></div>
//       <div className="max-w-4xl w-full px-4 z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
//           className="lg:text-5xl text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black"
//         >
//           What Our Clients Say
//           <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//         </motion.h1>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg p-8 mb-8 shadow-2xl border border-gray-200"
//           >
//             <div className="flex items-center mb-6">
//               <motion.img
//                 src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${testimonials[currentIndex].name}`}
//                 alt={testimonials[currentIndex].name}
//                 className="w-20 h-20 mr-6 rounded-full border-4 border-gray-200"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <div>
//                 <h2 className="text-2xl font-semibold text-gray-800">
//                   {testimonials[currentIndex].name}
//                 </h2>
//                 <p className="text-gray-600 italic">
//                   {testimonials[currentIndex].location}
//                 </p>
//               </div>
//             </div>
//             <div className="mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <span
//                   key={i}
//                   className={`text-2xl ${
//                     i < testimonials[currentIndex].rating
//                       ? "text-yellow-400"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               "{testimonials[currentIndex].text}"
//             </p>
//           </motion.div>
//         </AnimatePresence>
//         <div className="flex justify-center space-x-4">
//           {testimonials.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => handleAvatarClick(index)}
//               className={`w-16 h-16 focus:outline-none transition-all duration-300 rounded-full overflow-hidden ${
//                 index === currentIndex
//                   ? "ring-4 ring-black"
//                   : "ring-2 ring-gray-300"
//               }`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${testimonials[index].name}`}
//                 alt={`Avatar ${index + 1}`}
//                 className="w-full h-full"
//               />
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialPage;





