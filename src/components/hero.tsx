"use client";
import React from "react";
import Navbar from "./navbar";

export default function Hero() {
  const phrases = ["REFINING", "INTERIOR", "ARTISTRY"];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden font-inter"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/img1.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4C] via-transparent to-[#D3D3C9] opacity-80"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Top Section: Logo and Navbar */}
        <header className="flex justify-between items-center p-6 sm:p-10 lg:p-16 w-full">
          <img
            src="/images/logo.png" // Path to your uploaded logo
            alt="B17 Decorate Logo"
            className="h-50 sm:h-52 lg:h-54 rounded-full " // Adjusted size for top-left
          />
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col justify-center items-start px-6 sm:px-10 lg:px-16 text-left">
          <div className="max-w-4xl">
            <p className="text-white text-lg sm:text-xl font-light mb-2 drop-shadow-md">
              #YourVisionOurCraft
            </p>
            {phrases.map((phrase, index) => (
              <h1
                key={index}
                className="text-white text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold leading-tight drop-shadow-lg mb-2"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
              >
                {phrase}
              </h1>
            ))}
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light mt-4 drop-shadow-md">
              Innovative designs for luxurious living.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
