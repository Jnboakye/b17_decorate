"use client";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-white text-gray-800"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-12 sm:mb-16 text-[#1A2B4C]">
          Contact Us
        </h2>

        {/* Contact Information - Now centered as it's the only main content */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center mx-auto max-w-md">
          {" "}
          {/* Added mx-auto max-w-md for centering and reasonable width */}
          <div>
            <h3 className="text-3xl font-montserrat font-semibold mb-6 text-[#1A2B4C]">
              Reach Out
            </h3>
            <p className="text-gray-700 mb-8 font-inter">
              {" "}
              {/* Increased bottom margin */}
              We&apos;d love to hear from you! Feel free to contact us through the
              details below or connect on social media.
            </p>
            <div className="space-y-6 text-gray-700 font-inter">
              {" "}
              {/* Increased space-y */}
              <div className="flex items-center justify-center">
                {" "}
                {/* Centered content within flex */}
                <svg
                  className="w-6 h-6 mr-3 text-[#1A2B4C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span> +233 (540) 442-449</span>
              </div>
              <div className="flex items-center justify-center">
                {" "}
                {/* Centered content within flex */}
                <svg
                  className="w-6 h-6 mr-3 text-[#1A2B4C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v14z"
                  ></path>
                </svg>
                <span>B17dealss@gmail.com</span>
              </div>
              <div className="flex items-start justify-center">
                {" "}
                {/* Centered content within flex */}
                <svg
                  className="w-6 h-6 mr-3 mt-1 text-[#1A2B4C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="max-w-[200px]">North Kaneshie, Accra</span>{" "}
                {/* Added max-w for address wrapping */}
              </div>
            </div>
          </div>
          {/* Social Media Links - Now directly under contact info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center w-full max-w-xs mx-auto">
            {" "}
            {/* Centered social media block */}
            <p className="text-gray-600 mb-4">
              Connect with us on social media:
            </p>
            <div className="flex justify-center space-x-6">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/233277228853"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A2B4C] hover:text-gray-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-current"
                >
                  <path
                    d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 
                      C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 
                      S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 
                      c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 
                      s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 
                      c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 
                      s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 
                      c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 
                      s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 
                      C37.062,30.587,37.062,31.755,36.57,33.116z"
                  />
                </svg>
              </a>
              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@b17dealz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A2B4C] hover:text-gray-600 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 fill-current"
                >
                  <g fill="currentColor" fillRule="nonzero">
                    <g transform="scale(5.12,5.12)">
                      <path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z" />
                    </g>
                  </g>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/b17decorate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A2B4C] hover:text-gray-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 fill-current"
                >
                  <g fill="currentColor" fillRule="nonzero">
                    <g transform="scale(5.12,5.12)">
                      <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
