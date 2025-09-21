import React from 'react';

const StatsSection = ({ stats }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <h2 className="text-4xl font-bold text-dark">{stat.count.toLocaleString()}</h2>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;