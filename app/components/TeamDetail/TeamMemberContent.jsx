import React from 'react';

const TeamMemberContent = ({ content }) => {
  return (
    <div className="">
      <div className="prose prose-lg max-w-none">
        {content.map((paragraph, index) => (
          <div key={index}>
            <p className="leading-relaxed text-base mb-6" style={{ color: '#555555' }}>
              {paragraph}
            </p>
            {index < content.length - 1 && <div className="h-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberContent;