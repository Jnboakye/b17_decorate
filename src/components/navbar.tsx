import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 right-0 p-6 sm:p-10 lg:p-16 z-50 w-full flex justify-end items-center">
      {/* Phone Number */}
      <a href="tel:+1234567890" className="text-white text-lg sm:text-xl font-semibold mr-4 hover:text-gray-200 transition-colors duration-300">
        +233 (540) 442-449
      </a>
      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition-transform duration-300 transform hover:scale-105"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </>
          ) : (
            // Hamburger icon
            <>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </>
          )}
        </svg>
      </button>

      {/* Hidden Navigation Menu (appears when hamburger is clicked) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-50
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition-transform duration-300 transform hover:scale-105"
            aria-label="Close navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 pt-10">
          <li>
            <a href="#hero" onClick={toggleMenu} className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu} className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
