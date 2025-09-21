import React from 'react';

const FeatureSection = () => {
  const features = [
    { icon: 'fa fa-check', title: 'Quality', subtitle: 'Services' },
    { icon: 'fa fa-user-check', title: 'Expert', subtitle: 'Workers' },
    { icon: 'fa fa-drafting-compass', title: 'Free', subtitle: 'Consultation' },
    { icon: 'fa fa-headphones', title: 'Customer', subtitle: 'Support' }
  ];

  return (
    <div className="bg-light overflow-hidden my-20 px-0">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap mx-0">
          <div className="lg:w-1/2 py-20">
            <div className="p-8 lg:p-20 lg:pl-0">
              <h6 className="text-primary font-semibold mb-2">Why Choose Us!</h6>
              <h1 className="text-4xl font-bold text-dark mb-6">
                Complete Commercial & Residential Solar Systems
              </h1>
              <p className="text-gray-600 mb-8">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className={`${feature.icon} text-white`}></i>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-0">{feature.title}</p>
                      <h5 className="text-dark font-semibold mb-0">{feature.subtitle}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pr-0 min-h-96">
            <div className="relative h-full">
              <img
                className="absolute w-full h-full object-cover"
                src="/img/feature.jpg"
                alt="Features"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;