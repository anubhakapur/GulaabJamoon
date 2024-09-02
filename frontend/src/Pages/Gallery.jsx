import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TripGallery = ({ images, logo }) => {
  const handleLogo = () => {
    // Add any desired functionality for the logo click
  };

  return (
    <div className="bg-gray-100 h-screen relative">
      <header className="bg-black flex justify-between items-center py-6 px-8">
        <img
          src="/src/assets/images/GJlogo.svg"
          alt="Logo"
          className="w-20 sm:w-24 lg:w-28 transition-transform duration-300 transform hover:scale-110"
          onClick={handleLogo}
        />
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl">Experience our moments of joy</h1>
      </header>

      <div className="mt-16">
        <Swiper
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 64,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper h-full"
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="rounded-lg overflow-hidden">
              <div className="relative group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  {image.alt}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TripGallery;