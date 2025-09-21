import React from 'react';
import { getImageUrl } from '../utils/config';

const AboutSection = () => {
  return (
    <div className="bg-light overflow-hidden my-20 px-0">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap mx-0">
          <div className="lg:w-1/2 ps-0 min-h-96">
            <div className="relative h-full">
              <img
                className="absolute w-full h-full object-cover"
                src={getImageUrl('img/about.jpg')}
                alt="About Us"
              />
            </div>
          </div>
          <div className="lg:w-1/2 py-20">
            <div className="p-8 lg:p-20 lg:pr-0">
              <h6 className="text-primary font-semibold mb-2">About Us</h6>
              <h1 className="text-4xl font-bold text-dark mb-6">
                25+ Years Experience In Solar & Renewable Energy Industry
              </h1>
              <p className="text-gray-600 mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="space-y-2 mb-6">
                <p className="flex items-center">
                  <i className="fa fa-check-circle text-primary mr-3"></i>
                  Diam dolor diam ipsum
                </p>
                <p className="flex items-center">
                  <i className="fa fa-check-circle text-primary mr-3"></i>
                  Aliqu diam amet diam et eos
                </p>
                <p className="flex items-center">
                  <i className="fa fa-check-circle text-primary mr-3"></i>
                  Tempor erat elitr rebum at clita
                </p>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;