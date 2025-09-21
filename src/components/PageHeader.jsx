import React from 'react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/img/carousel-1.jpg)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <nav className="flex justify-center">
          <ol className="flex items-center space-x-2 text-light">
            <li>
              <a href="/" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li className="text-light">/</li>
            <li className="text-light">{breadcrumb}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;