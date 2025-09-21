import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ company, contact, social, navigation }) => {
  const location = useLocation();
  return (
    <>
      {/* Topbar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between items-center py-2">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                <span className="text-sm">{contact.address}</span>
              </div>
              <div className="flex items-center">
                <i className="far fa-clock text-primary mr-2"></i>
                <span className="text-sm">{contact.hours}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <i className="fa fa-phone-alt text-primary mr-2"></i>
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex space-x-1">
                {social.map(item => (
                  <a key={item.id} href={item.url} className="w-8 h-8 bg-transparent border border-gray-600 flex items-center justify-center hover:bg-primary transition-colors">
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center border-r border-gray-200 pr-8">
              <h2 className="text-2xl font-bold text-primary py-4">{company.name}</h2>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map(item => {
                const isActive = (item.url === '/' && location.pathname === '/') || 
                                (item.url !== '/' && location.pathname === item.url);
                return (
                  <Link 
                    key={item.id} 
                    to={item.url}
                    className={`py-4 px-2 transition-colors ${isActive ? 'text-primary border-b-2 border-primary' : 'text-dark hover:text-primary'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button className="bg-primary text-white px-6 py-3 rounded-none hover:bg-primary-700 transition-colors">
                Get A Quote <i className="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;