import React from 'react';
import whyphoto from "../../assets/hike2.png";
import HikingIcon from '@mui/icons-material/Hiking';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
const WhyChooseGorkhaTreks = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 font-heading">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Gorkha Treks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between">
            <div className="flex items-start mb-8">
              <div className="mr-4">
                <HikingIcon className='text-green-600  ' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Trails</h3>
                <p className="text-gray-900">Explore the rich and varied landscapes of Nepal, from the lowlands to the high Himalayas.</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="mr-4">
       <CurrencyExchangeIcon className='text-green-600' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Adventures</h3>
                <p className="text-gray-900">Experience the beauty of Nepal without breaking the bank, offering great value for money.</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="mr-4">
               <EmojiPeopleIcon className=' text-green-600' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
                <p className="text-gray-900">Our experienced guides ensure your trek is safe, enjoyable, and culturally enriching.</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img src={whyphoto} alt="Hikers" className="w-full h-80 md:w-3/4 lg:w-2/3" />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-start mb-8">
              <div className="mr-4">
              <LightbulbIcon className='text-green-600' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Planning</h3>
                <p className="text-gray-900">Easily plan your trek with our streamlined booking process and personalized itineraries.</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="mr-4">
         <MapIcon className='text-green-600' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stunning Locations</h3>
                <p className="text-gray-900">Trek through some of the most breathtaking locations in Nepal, from Everest to Annapurna.</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="mr-4">
             <ExploreIcon className='text-green-600' fontSize='large'/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Passionate Exploration</h3>
                <p className="text-gray-900">Join fellow trekkers who share a deep passion for exploring the hidden gems of Nepal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseGorkhaTreks;
