import React from 'react';

const TeamMemberContent = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="prose prose-lg max-w-none">
        {content.map((paragraph, index) => (
          <div key={index}>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {paragraph}
            </p>
            {index < content.length - 1 && <div className="h-5"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberContent;