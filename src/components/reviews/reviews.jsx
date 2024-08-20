import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import re1 from "../../assets/re1.png";
import re2 from "../../assets/r2.jpg";
import re3 from "../../assets/r3.png";
import re4 from "../../assets/r4.jpg";

const TopReviews = () => {
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Reviews For Gorkha Trek</h2>
        
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-full h-auto" // Ensures consistent size
          >
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re1} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re2} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re3} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re4} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re1} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg font-heading">
                <div className="flex items-center mb-4">
                  <img src={re2} alt="Randall Schwartz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Randall Schwartz</h3>
                    <p className="text-lg text-gray-600">Trek Enthusiast</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">Gorkha Trek was an unforgettable experience. The landscapes were stunning, and the guides were knowledgeable and friendly.</p>
                <div className="flex items-center text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>

          <div className="md:block hidden">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg text-gray-900 hover:bg-gray-100 transition duration-300"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg text-gray-900 hover:bg-gray-100 transition duration-300"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopReviews;
