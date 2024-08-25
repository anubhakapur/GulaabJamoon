import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TripCarousel = ({ trips }) => {
  const [activeImage, setActiveImage] = useState('');

  return (
    <div 
      className="w-full relative px-4 md:px-8 lg:px-[3.4rem] select-none min-h-screen"
      style={{
        backgroundImage: `url(${activeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-black">Featured Trips</h2>
          <Link 
            to="/all-trips" 
            className="text-black font-semibold hover:underline"
          >
            View All
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mySwiper"
          touchEventsTarget="container"
        >
          {trips.map((trip) => (
            <SwiperSlide key={trip.id} className="pb-16">
              <div 
                className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 group"
                onMouseEnter={() => setActiveImage(trip.image)}
                onMouseLeave={() => setActiveImage('')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-black group-hover:text-blue-600 transition-colors duration-300">{trip.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{trip.description}</p>
                  <p className="text-black font-bold text-base md:text-lg mb-4">${trip.price}</p>
                  <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black group-hover:bg-blue-600">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next hidden md:flex text-black"></div>
        <div className="swiper-button-prev hidden md:flex text-black"></div>
        <div className="swiper-pagination mt-4"></div>
      </div>
    </div>
  );
};

export default TripCarousel;