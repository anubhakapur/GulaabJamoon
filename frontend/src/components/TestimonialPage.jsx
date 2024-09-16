import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rashi Raj",
    location: "Pondicherry Trip",
    avatar:
      "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/girl1_lfcrqy.png",
    rating: 5,
    text: "During my trip to Pondicherry, I had a truly memorable experience. The itinerary was customized perfectly to my interests, the accommodations were spot-on, and I discovered hidden gems in the city. The whole trip was seamless and unforgettable.",
  },
  {
    id: 2,
    name: "Shashwat Verma",
    location: "Ranipuram Retreat",
    avatar:
      "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/boy1_ikp0p7.png",
    rating: 5,
    text: "Perfect getaway! This was the perfect getaway for me. I loved the water rafting, houseboat, trek and the last day beach evening",
  },
  {
    id: 3,
    name: "Siddharth Dinesh",
    location: "",
    avatar:
      "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/boy2_exqfe5.png",
    rating: 5,
    text: "If you wanna go for a fun trip and meet some new people without any of the trip planning hassle, Gulaab Jamoon are the best ones to do it",
  },
  {
    id: 4,
    name: "Kui Gyadi",
    location: "",
    avatar:
      "https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720079377/girl2_z0d2ym.png",
    rating: 5,
    text: "It was a wonderful experience, seeing new people and specially that I got to spent time with my friends which is and will be precious and yea. Thankyou to the organisers. Good day🎀",
  },
];

const Testimonial = ({ id }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentTestimonial((prev) => {
          const nextIndex =
            (testimonials.findIndex((t) => t.id === prev.id) + 1) %
            testimonials.length;
          return testimonials[nextIndex];
        });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      e.target.alt
    )}&background=random`;
  };

  return (
    <section id={id}>
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#f8f8f8]">
        <div className="max-w-4xl w-full">
          <h1
            className="text-gray-800 text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 relative inline-block
                       hover:text-[#eab308] transition-colors duration-300"
          >
            Testimonials
            <span
              className="absolute -bottom-2 left-0 w-full h-1 sm:h-2 bg-[#eab308]
                           transition-all duration-300 hover:w-0"
            ></span>
          </h1>

          <div className="relative pb-20">
            <div
              className="bg-white bg-opacity-95 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg 
                          transition-all duration-300 hover:shadow-2xl hover:bg-opacity-100
                          transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0 border-2 sm:border-4 border-[#eab308] shadow-md
                           transition-transform duration-300 hover:scale-110"
                  onError={handleImageError}
                />
                <div className="flex-grow text-center sm:text-left">
                  <h2
                    className="font-semibold text-xl sm:text-2xl text-gray-800 mb-1
                               hover:text-[#eab308] transition-colors duration-300"
                  >
                    {currentTestimonial.name}
                  </h2>
                  <p
                    className="text-sm sm:text-base text-gray-600 mb-2
                              hover:text-gray-800 transition-colors duration-300"
                  >
                    {currentTestimonial.location}
                  </p>
                  <div
                    className="flex justify-center sm:justify-start text-[#eab308] mt-1 sm:mt-2 text-lg sm:text-xl
                                hover:text-yellow-500 transition-colors duration-300"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < currentTestimonial.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p
                    className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700
                              hover:text-gray-900 transition-colors duration-300"
                  >
                    {currentTestimonial.text}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start mt-4">
                    <img
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                      alt="Google Logo"
                      className="h-5 mr-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 right-0 flex justify-end space-x-2 sm:space-x-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`w-16 h-24 sm:w-20 sm:h-28 bg-gray-300 rounded-lg relative overflow-hidden cursor-pointer 
                            transition-all duration-300 hover:shadow-md hover:scale-105
                            ${
                              currentTestimonial.id === testimonial.id
                                ? "ring-2 ring-[#eab308]"
                                : ""
                            }`}
                  onClick={() => setCurrentTestimonial(testimonial)}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
