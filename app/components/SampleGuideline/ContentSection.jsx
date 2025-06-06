// ContentSection.jsx - Simple with Left Sidebar
'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import GeneralGuidelines from './GeneralGuidelines';
import SearchSampleRequirements from './SearchSampleRequirements';

const ContentSection = () => {
  const [activeSection, setActiveSection] = useState('general-content');

  const renderContent = () => {
    const sections = {
      'general-content': <GeneralGuidelines />,
      'search-content': <SearchSampleRequirements />
    };
    return sections[activeSection] || <GeneralGuidelines />;
  };

  return (
    <section className="pt-4 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid xl:grid-cols-[280px_1fr] gap-8">
          {/* LEFT SIDEBAR */}
          <div className="xl:sticky xl:top-8">
            <Sidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </div>
          
          {/* RIGHT CONTENT */}
          <div className="bg-white rounded-lg">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;