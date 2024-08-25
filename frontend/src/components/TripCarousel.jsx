import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TripCarousel = ({ trips }) => {
  return (
    <div className="w-full  bg-white relative px-[3.4rem] select-none">
      <div className="flex justify-between items-center mb-6 px-2">
        <h2 className="text-2xl font-bold text-black">Featured Trips</h2>
        <Link 
          to="/all-trips" 
          className="text-black font-semibold hover:underline"
        >
          View All
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {trips.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="bg-white my-[1.7rem] shadow-md rounded-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105">
              <img
                src={trip.image}
                alt={trip.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{trip.name}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <p className="text-black font-bold text-lg mb-4">${trip.price}</p>
                <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default TripCarousel;