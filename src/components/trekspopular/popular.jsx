import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from "../../assets/anna.jpg";
import img2 from "../../assets/rara.jpg";
import img3 from "../../assets/mana1.jpg";
import img4 from "../../assets/upper.jpg";

const MostPopularTrekking = () => {
  return (
    <div className="bg-white -mt-5">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 font-heading">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Most Popular Trekking</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={img2} alt="Moscow Red City Land" className="w-full h-72 object-cover" />
              <div className="p-4 font-heading">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rara</h3>
                <p className="text-gray-900 mb-4 text-lg ">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold text-lg">3 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300 text-lg">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden font-heading">
              <img src={img3} alt="Yellowstone & Mt Rushm" className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 ">Manaslu</h3>
                <p className="text-gray-900 mb-4 text-lg">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold text-lg">5 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300 text-lg">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={img4} alt="Los Angeles to San Franc" className="w-full h-72 object-cover" />
              <div className="p-4 font-heading">
                <h3 className="text-xl font-bold text-gray-900 mb-2 ">Upper Mustang</h3>
                <p className="text-gray-900 mb-4 text-lg">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold">5 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src= {img1}  alt="Los Angeles to San Franc" className="w-full h-72 object-cover" />
              <div className="p-4 font-heading">
                <h3 className="text-xl font-bold text-gray-900 mb-2 ">Annapurna</h3>
                <p className="text-gray-900 mb-4 text-lg ">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold text-lg">5 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300 text-lg">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={img3} alt="Los Angeles to San Franc" className="w-full h-72 object-cover" />
              <div className="p-4 font-heading">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Everrest</h3>
                <p className="text-gray-900 mb-4 text-lg">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold text-lg">5 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300 text-lg">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={img2} alt="Los Angeles to San Franc" className="w-full h-72 object-cover" />
              <div className="p-4 font-heading">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lantang</h3>
                <p className="text-gray-900 mb-4 text-lg">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#47b72b] font-bold text-lg">5 days | $299/Himalaya Ag</span>
                  <button className="bg-[#47b72b] text-white px-4 py-2 rounded-lg hover:bg-[#11a9a9] transition-colors duration-300 text-lg">View Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MostPopularTrekking;
