import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="bg-light overflow-hidden px-0" style={{ margin: '6rem 0' }}>
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap mx-0">
          <div className="lg:w-1/2 py-20">
            <div className="p-8 lg:p-20 lg:pl-0">
              <h6 className="text-primary font-semibold mb-2">Contact Us</h6>
              <h1 className="text-4xl font-bold text-dark mb-6">Feel Free To Contact Us</h1>
              <p className="text-gray-600 mb-8">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary peer"
                    />
                    <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary peer"
                    />
                    <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary peer"
                  />
                  <label htmlFor="subject" className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary peer resize-none"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 pr-0 min-h-96">
            <div className="relative h-full">
              <iframe
                className="absolute w-full h-full object-cover"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;