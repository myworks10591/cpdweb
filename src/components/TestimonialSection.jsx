import React, { useState } from 'react';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute'}`}>
      <div className="relative mb-8">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <i className="fa fa-quote-left text-white"></i>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.message}</p>
        <h5 className="text-xl font-semibold text-dark mb-1">{testimonial.name}</h5>
        <span className="text-gray-500 italic">{testimonial.profession}</span>
      </div>
    </div>
  );
};

const TestimonialSection = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-semibold mb-2">Testimonial</h6>
          <h2 className="text-4xl font-bold text-dark mb-4">
            What Our Clients Say!
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Next testimonial"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;