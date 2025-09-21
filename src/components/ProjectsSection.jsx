import React, { useState } from 'react';
import { getImageUrl } from '../utils/config';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  
  const filters = [
    { id: '*', name: 'All' },
    { id: 'first', name: 'Solar Panels' },
    { id: 'second', name: 'Wind Turbines' },
    { id: 'third', name: 'Hydropower Plants' }
  ];

  const projects = [
    { id: 1, category: 'first', type: 'Solar Panels', image: 'img/img-600x400-6.jpg' },
    { id: 2, category: 'second', type: 'Wind Turbines', image: 'img/img-600x400-5.jpg' },
    { id: 3, category: 'third', type: 'Hydropower Plants', image: 'img/img-600x400-4.jpg' },
    { id: 4, category: 'first', type: 'Solar Panels', image: 'img/img-600x400-3.jpg' },
    { id: 5, category: 'second', type: 'Wind Turbines', image: 'img/img-600x400-2.jpg' },
    { id: 6, category: 'third', type: 'Hydropower Plants', image: 'img/img-600x400-1.jpg' }
  ];

  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-semibold mb-2">Our Projects</h6>
          <h2 className="text-4xl font-bold text-dark mb-4">
            Visit Our Latest Solar And Renewable Energy Projects
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <ul className="inline-flex space-x-8">
            {filters.map(filter => (
              <li
                key={filter.id}
                className={`cursor-pointer font-medium transition-colors border-b-2 pb-2 ${
                  activeFilter === filter.id 
                    ? 'text-primary border-primary' 
                    : 'text-dark border-transparent hover:text-primary hover:border-primary'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={getImageUrl(project.image)}
                  alt={project.type}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={getImageUrl(project.image)}
                      data-lightbox="portfolio"
                      className="w-12 h-12 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-primary font-medium mb-2">{project.type}</p>
                <hr className="w-1/4 border-primary border-2 mb-3" />
                <h5 className="text-dark font-semibold leading-relaxed">
                  We Are pioneers of solar & renewable energy industry
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;