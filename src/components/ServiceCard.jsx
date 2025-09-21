import React from 'react';
import { getImageUrl } from '../utils/config';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={getImageUrl(service.image)}
          alt={service.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute -bottom-8 left-6">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
            <i className={service.icon}></i>
          </div>
        </div>
      </div>
      <div className="p-6 pt-12">
        <h4 className="text-xl font-semibold text-dark mb-3">{service.name}</h4>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a 
          href="#" 
          className="text-primary hover:text-primary-700 font-medium text-sm transition-colors"
        >
          Read More <i className="fa fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

const ServicesSection = ({ services }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-semibold mb-2">Our Services</h6>
          <h2 className="text-4xl font-bold text-dark mb-4">
            We Are Pioneers In The World Of Renewable Energy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;