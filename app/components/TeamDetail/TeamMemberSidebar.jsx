import React from 'react';

const TeamMemberSidebar = ({ memberData }) => {
  return (
    <div className="lg:sticky lg:top-8">
      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#f2fcfc' }}>
        {/* Profile Image */}
        <div className="relative">
          <img 
            src={memberData.image} 
            alt={memberData.name} 
            className="w-full h-80 object-cover"
          />
        </div>
        
        {/* Member Info */}
        <div className="p-6">
          <div className="text-left">
            <h2 className="text-3xl font-normal mb-2" style={{ color: '#555555' }}>
              {memberData.name}
            </h2>
            <h4 className="text-base text-teal-600 mb-6 font-normal">
              {memberData.position}
            </h4>
            
            {/* LinkedIn Button */}
            {memberData.linkedinUrl && (
              <a 
                href={memberData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSidebar;