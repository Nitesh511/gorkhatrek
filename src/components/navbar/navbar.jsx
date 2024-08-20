import React, { useState } from "react";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Links Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="mr-6">
            <img src={logo} alt="Treker" className="h-24 w-auto scale-150" />
          </Link>

          {/* Hamburger Menu for Mobile View */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={handleOpenMenu}
            >
              {openNav ? (
                <span className="text-red-600 text-4xl ">
                  {" "}
                  <CloseIcon />
                </span>
              ) : (
                <span className="text-green-600 text-4xl  ">
                  {" "}
                  <MenuIcon />
                </span>
              )}
            </button>
          </div>

          {/* Links for Desktop View */}
          <ul className="hidden md:flex space-x-6 text-gray-600 ml-6 text-xl font-heading">
            <li>
              <Link to={"/"} className="hover:text-green-600">
                HOME
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                ABOUT US
              </a>
            </li>
            <li>
              <Link to={"/trending"} className="hover:text-green-600">
                DESTINATIONS
              </Link>
            </li>
            <li>
              <a href="/services" className="hover:text-green-600">
                TREKKING
              </a>
            </li>
            <li>
              <Link to={"/blogs"} className="hover:text-green-600">
                BLOGS
              </Link>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100  px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3fd166] w-60"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
         <SearchIcon className="text-green-600 text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Toggle Visibility Based on State */}
      <div className={`md:hidden ${openNav ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-2 mt-12 px-4 pb-4 text-gray-600 text-xl font-heading h-[440px] ">
        <li>
              <Link to={"/"} className="hover:text-green-600">
                HOME
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                ABOUT US
              </a>
            </li>
            <li>
              <Link to={"/trending"} className="hover:text-green-600">
                DESTINATIONS
              </Link>
            </li>
            <li>
              <a href="/services" className="hover:text-green-600">
                TREKKING
              </a>
            </li>
            <li>
              <Link to={"/blogs"} className="hover:text-green-600">
                BLOGS
              </Link>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600">
                CONTACT
              </a>
            </li>
          <li className="pt-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3fd166] w-full"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
