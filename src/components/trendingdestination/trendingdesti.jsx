import React from 'react';
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpeg";
import t5 from "../../assets/t5.jpg";
import t6 from "../../assets/t6.jpg";


const TrendingDestinations = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img src={t1} alt="Campfire" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img  src={t2} alt="Mount Fuji" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img  src={t3} alt="Mountain Fog" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img  src={t4}alt="Castle" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img src={t5} alt="Lake Reflection" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition ease-in-out delay-100">
            <img  src={t6} alt="Volcano" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;