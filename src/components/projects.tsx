'use client';
import React from 'react';

export default function Projects() {
  // Array of project images with properties for grid spanning
  // You will replace these with the actual paths to your 10 images
  // and adjust the 'span' classes to control their size in the grid.
  const projectImages = [
    { src: '/images/img8.jpg', alt: '', span: 'col-span-2 row-span-2' }, // Large square
    { src: '/images/img7.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
    { src: '/images/img10.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
    { src: '/images/img9.jpg', alt: '', span: 'col-span-2 row-span-1' }, // Wide rectangle
    { src: '/images/img5.jpg', alt: '', span: 'col-span-1 row-span-2' }, // Tall rectangle
    { src: '/images/img4.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
    { src: '/images/img11.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
    { src: '/images/img2.jpg', alt: '', span: 'col-span-2 row-span-2' }, // Large square
    { src: '/images/img6.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
    { src: '/images/img3.jpg', alt: '', span: 'col-span-1 row-span-1' }, // Small square
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Gradient Overlay for the section - consistent with Hero page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4C] via-transparent to-[#D3D3C9] opacity-70"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-12 sm:mb-16 text-white drop-shadow-lg">
          Our Projects
        </h2>

        {/* Dynamic Image Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/E0E0E0/666666?text=Image+Not+Found';
                }}
              />
              {/* Optional: Overlay for title on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-end p-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold font-montserrat drop-shadow">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
