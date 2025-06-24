import React from 'react';
import { teamMembers } from '../constants';

const MeetOurTeam = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-center text-[#E2AC0D]">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-64 h-96 rounded-xl overflow-hidden shadow-lg border border-[#E2AC0D] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-white px-4 py-3 backdrop-blur-sm">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="text-sm opacity-80">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
