import React, { useState } from 'react';
import { getImageUrl } from '../utils/config';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-light overflow-hidden my-20 px-0">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap mx-0">
          <div className="lg:w-1/2 ps-0 min-h-96">
            <div className="relative h-full">
              <img
                className="absolute w-full h-full object-cover"
                src={getImageUrl('img/quote.jpg')}
                alt="Get Quote"
              />
            </div>
          </div>
          <div className="lg:w-1/2 py-20">
            <div className="p-8 lg:p-20 lg:pr-0">
              <h6 className="text-primary font-semibold mb-2">Free Quote</h6>
              <h1 className="text-4xl font-bold text-dark mb-6">Get A Free Quote</h1>
              <p className="text-gray-600 mb-8">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ height: '55px' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ height: '55px' }}
                  />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Your Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ height: '55px' }}
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ height: '55px' }}
                  >
                    <option value="">Select A Service</option>
                    <option value="solar">Solar Panels</option>
                    <option value="wind">Wind Turbines</option>
                    <option value="hydro">Hydropower Plants</option>
                  </select>
                </div>
                <textarea
                  name="note"
                  placeholder="Special Note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-0 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;