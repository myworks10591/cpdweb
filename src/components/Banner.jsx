import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../utils/config';

const Banner = ({ banners, isHomePage = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  if (!isHomePage) return null;

  return (
    <div className="relative h-screen overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={getImageUrl(banner.image)}
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
                  {banner.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl animate-fade-in-up">
                  {banner.description}
                </p>
                <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors animate-fade-in-left">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Owl dots - vertical image thumbnails */}
      <div className="absolute right-8 top-0 h-full w-16 flex flex-col items-center justify-center space-y-2">
        {banners.map((banner, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative rounded-full overflow-hidden shadow-lg transition-all duration-500 ${
              index === currentSlide ? 'w-16 h-16' : 'w-12 h-12'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img
              src={getImageUrl(banner.image)}
              alt={banner.alt}
              className="w-full h-full object-cover p-0.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;