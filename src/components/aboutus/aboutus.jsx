import React from "react";
import about1 from "../../assets/about2.png";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const Aboutus = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="order-2 md:order-1 md:w-1/3">
          <img
            src={about1}
            alt="Tent"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
        <div className="order-1 md:order-2 md:w-1/2 mb-8 md:mb-0 font-heading">
          <h2 className="text-4xl font-bold text-gray-900 mb-1">
            Discover Nepal
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Ultimate Trekking Adventure
          </h2>
          <p className="text-gray-900 text-lg mb-6">
            Since 2014, we have guided thousands of adventurers through the
            stunning landscapes of Nepal. Whether you're seeking a thrilling
            trek through the Himalayas or a serene journey in the foothills, our
            expert team ensures a memorable experience. From challenging
            high-altitude trails to scenic mountain paths, we offer treks for
            all levels and interests.
          </p>
          <ul className="text-gray-900 mb-6 text-lg">
            <li className="flex items-center mb-2">
            <FileDownloadDoneIcon className="text-green-600  " />
          
              Authentic Himalayan Trekking Experiences.
            </li>
            <li className="flex items-center mb-2">
            <FileDownloadDoneIcon className="text-green-600  " />
              Expert Guides with Local Knowledge.
            </li>
            <li className="flex items-center">
            <FileDownloadDoneIcon className="text-green-600  " />
              Breathtaking Scenery and Cultural Immersion.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
