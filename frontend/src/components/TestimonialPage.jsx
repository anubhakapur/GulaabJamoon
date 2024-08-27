import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Kate Rogers',
    title: 'Graphic Designer',
    comment: 'AMAZING CUSTOMER SERVICE\n\nI needed a refund for tickets to an event that was changed last minute. I experienced great customer service and the issue was resolved in a timely manner. Thanks to agent Sandra!',
    rating: 5,
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    comment: 'EXCELLENT SUPPORT\n\nThe team went above and beyond to help me with a complex technical issue. Their expertise and patience were truly appreciated.',
    rating: 5,
  },
  {
    name: 'Alice Smith',
    title: 'Marketing Manager',
    comment: 'OUTSTANDING EXPERIENCE\n\nFrom start to finish, my interaction with this company was seamless. Their attention to detail and commitment to customer satisfaction is unparalleled.',
    rating: 4,
  },
];

const TestimonialCard = ({ name, title, comment, rating }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl">
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"></div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-2xl sm:text-3xl">{name}</h3>
        <p className="text-gray-400 text-lg">{title}</p>
        <div className="flex justify-center sm:justify-start mt-2">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
      <span className="text-6xl text-gray-700 absolute top-0 left-0">"</span>
      <p className="text-xl leading-relaxed pl-8 pr-8 italic">{comment}</p>
      <span className="text-6xl text-gray-700 absolute bottom-0 right-0">"</span>
    </div>
  </div>
);

const TestimonialPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          What Our Clients Say
        </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
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

