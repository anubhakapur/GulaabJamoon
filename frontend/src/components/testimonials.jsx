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