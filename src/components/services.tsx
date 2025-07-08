'use client';
import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Curtains Installation",
      description: "Enhance privacy and style with our bespoke curtain solutions, perfectly fitted for your space and aesthetic.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ), // Curtain/Drapery icon
    },
    {
      title: "Window Blinds Installation",
      description: "Modern and elegant window blinds for optimal light control, privacy, and sophisticated interior aesthetics.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6" />
        </svg>
      ), // Window with blinds icon
    },
    {
      title: "TV Sets & Kitchen Installation",
      description: "Seamless integration of entertainment systems and bespoke kitchen solutions for a truly modern and functional home.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zm12-7h.01M9 17v-4h6v4m-6 0h6m-6 0H6a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-2m-6 0h6" />
        </svg>
      ), // TV screen and kitchen counter icon
    },
    {
      title: "Smart Home Technology Installation",
      description: "Transform your living space into an intuitive, connected sanctuary with cutting-edge smart home automation systems.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.353 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ), // Gear/Settings icon
    },
    {
      title: "Security & CCTV Installation",
      description: "Comprehensive security solutions and advanced CCTV systems for ultimate peace of mind and property protection.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.83 5.768 4.58 7.25C10.743 21.072 12 22 12 22s1.257-1.072 4.499-2.75c2.75-1.482 4.58-4.178 4.58-7.25a12.001 12.001 0 00-3.382-8.016z" />
        </svg>
      ), // Shield with checkmark icon
    },
    {
      title: "Interior Styling & Decor",
      description: "From furniture placement to decorative accents, we curate every detail to reflect your unique style and enhance your home's ambiance.",
      icon: (
        <svg className="w-12 h-12 text-[#1A2B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        </svg>
      ), // A window with blinds, symbolizing decor and styling
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-12 sm:mb-16 text-[#1A2B4C]">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-montserrat font-semibold mb-3 text-[#1A2B4C]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
