import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex">
        <div className="w-3/4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="w-1/4 bg-gray-50 flex flex-col justify-center items-center space-y-3 p-4">
          {member.social.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h5 className="text-xl font-semibold text-dark mb-1">{member.name}</h5>
        <span className="text-gray-600">{member.designation}</span>
      </div>
    </div>
  );
};

const TeamSection = ({ team }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-primary font-semibold mb-2">Team Member</h6>
          <h2 className="text-4xl font-bold text-dark mb-4">
            Experienced Team Members
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;