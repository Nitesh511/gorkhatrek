import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 font-heading">
            <h4 className="text-3xl font-semibold text-gray-900">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-900">
              Find us on any of these platforms, we respond within 1-2 business
              days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 font-heading">
            
         
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
              <FacebookIcon  className="text-blue-900"  fontSize="large"/>
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                 <InstagramIcon fontSize="large"/>
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
              <XIcon fontSize="large"/>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto font-heading">
                <span className="block uppercase text-gray-900 text-lg font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-900 hover:text-gray-900  block pb-2 text-lg"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-900 hover:text-gray-900  block pb-2 text-lg"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-900 hover:text-blueGray-800  block pb-2 text-lg"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
               
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-900 text-lg font-semibold mb-2 font-heading">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-900 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-900 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-900 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-900 hover:text-blueGray-800 font-semibold block pb-2 text-lg"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-900" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-lg text-gray-900 font-semibold py-1 font-heading">
              Copyright © {currentYear}{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-gray-900 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Gorkha Trek
              </a>{" "}
              by
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-gray-900 hover:text-blueGray-800"
              >
                {" "}
               NK
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
