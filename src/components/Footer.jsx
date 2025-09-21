import React from 'react';

const Footer = ({ contact, social }) => {
  const quickLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Contact Us', url: '#' },
    { name: 'Our Services', url: '#' },
    { name: 'Terms & Condition', url: '#' },
    { name: 'Support', url: '#' }
  ];

  const galleryImages = [
    '/img/gallery-1.jpg',
    '/img/gallery-2.jpg',
    '/img/gallery-3.jpg',
    '/img/gallery-4.jpg',
    '/img/gallery-5.jpg',
    '/img/gallery-6.jpg'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h5 className="text-white text-xl font-semibold mb-6">Address</h5>
            <div className="space-y-3">
              <p className="flex items-center">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>
                {contact.address}
              </p>
              <p className="flex items-center">
                <i className="fa fa-phone-alt text-primary mr-3"></i>
                {contact.phone}
              </p>
              <p className="flex items-center">
                <i className="fa fa-envelope text-primary mr-3"></i>
                {contact.email}
              </p>
            </div>
            <div className="flex space-x-2 mt-6">
              {social.map(item => (
                <a
                  key={item.id}
                  href={item.url}
                  className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-xl font-semibold mb-6">Quick Links</h5>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block text-gray-300 hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          <div>
            <h5 className="text-white text-xl font-semibold mb-6">Project Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white text-xl font-semibold mb-6">Newsletter</h5>
            <p className="text-gray-400 mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 pr-24 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 top-2 bg-primary text-white px-4 py-1 rounded hover:bg-primary-700 transition-colors">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-3 md:mb-0">
              © <a href="#" className="text-primary hover:text-primary-600">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="text-center md:text-right">
              Designed By <a href="https://htmlcodex.com" className="text-primary hover:text-primary-600">HTML Codex</a>
              <br />
              Distributed By: <a href="https://themewagon.com" className="text-primary hover:text-primary-600">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;