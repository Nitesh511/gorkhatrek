import React from "react";

const Resuablecard = ({ title, para, img }) => {
  return (
    <div className="py-10">
      <div className="max-w-sm bg-white border border-gray-200 hover:bg-green-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 group overflow-hidden">
        <a href="#">
          <img
            className="w-full h-80 object-cover"
            src={img}
            alt={title}
          />
        </a>
        <div className="p-4 md:p-6 font-heading">
          <a href="#">
            <h5 className="mb-2 text-xl md:text-2xl font-bold  text-black group-hover:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-4 text-lg md:text-lg font-heading font-normal text-black group-hover:text-white">
            {para}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-lg font-heading font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-500"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resuablecard;
