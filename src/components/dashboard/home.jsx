import React from "react";
import homeimg from "../../assets/banner.svg";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Aboutus from "../aboutus/aboutus";
import MostPopularTrekking from "../trekspopular/popular";
import WhyChooseTreker from "../whychoose/whychoose";
import WhyChooseGorkhaTreks from "../whychoose/whychoose";
import TrendingDestinations from "../trendingdestination/trendingdesti";
import TopReviews from "../reviews/reviews";

const Dashboard = () => {
  return (
    <>
    <div className="bg-white ">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          {" "}
          {/*Dividing into tow parts one with image right and text in left */}
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900 mb-4 mt-9 md:mt-0 font-heading ">
            Never Stop Exploring
          </h1>
          <p className="text-gray-900 md:mb-24 mb-10 text-xl font-heading">
            Their house is a museum where people come to see 'em. They really
            are a scream the Addams Family. These days are all Happy and Free.
            These days are all share them with me oh baby.
          </p>
          <button className="bg-[#2fd13c] text-white px-6 py-3 rounded-lg hover:bg-[#4eb25a] transition-colors duration-300 font-heading text-xl">
            View All Tours <KeyboardDoubleArrowRightOutlinedIcon />
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={homeimg}
            alt="Explorer"
            className="w-full max-w-md md:max-w-none mt-10 animate-slow-bounce" 
          />{/* animating the image from tailwind css config */}
        </div>
      </div>
    </div>

    <Aboutus/>
    <MostPopularTrekking/>
    <WhyChooseGorkhaTreks/>
    <TrendingDestinations/>
    <TopReviews/>
    </>
  );
};

export default Dashboard;
