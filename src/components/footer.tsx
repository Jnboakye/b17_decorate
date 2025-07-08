'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A2B4C] py-8 sm:py-10 lg:py-12 text-white">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center text-center">
        {/* Logo/Brand Name in Footer */}
        <div className="flex items-center space-x-2 mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z"/> {/* Simple square icon */}
          </svg>
          <span className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-bold">
            B17
          </span>
          <span className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-light">
            Decorate
          </span>
        </div>

        {/* Copyright Information */}
        <p className="text-sm sm:text-base font-inter mb-4 opacity-80">
          &copy; {new Date().getFullYear()} B17 Decorate. All rights reserved.
        </p>

        {/* Optional: Quick Links or Social Media Icons */}
        <div className="flex space-x-6 text-gray-300">
          <a href="#hero" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
        {/* You could also add social media icons here instead of or in addition to quick links */}
        {/*
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 .25-2h2.25V4h-3.266c-3.243 0-4.734 1.45-4.734 4.5v2H7v4h3v8h4v-8z"></path></svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.771 4.919-4.919 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.858-3.037-1.869 0-2.151 1.444-2.151 2.939v5.667H9.59V9.218h3.413v1.565h.045c.474-.853 1.63-1.75 3.37-1.75 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 012.063-2.065 2.062 2.062 0 012.064 2.065 2.062 2.062 0 01-2.064 2.065zm-.001 13.012H2.288V9.218h3.048v11.227z"></path></svg>
          </a>
        </div>
        */}
      </div>
    </footer>
  );
}
