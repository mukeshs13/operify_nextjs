// components/PackagingShipping/ContentSection.jsx
'use client';
import React, { useState } from 'react';
import SidebarNavigation from './SidebarNavigation';
import GeneralGuidelines from './GeneralGuidelines';
import PackagingGuideline from './PackagingGuideline';
import DNASamples from './DNASamples';
import RNASamples from './RNASamples';
import ShippingTemperatureTable from './ShippingTemperatureTable';
import ShippingSchedule from './ShippingSchedule';

const ContentSection = () => {
  const [activeSection, setActiveSection] = useState('general-content');

  const renderContent = () => {
    const sections = {
      'general-content': <GeneralGuidelines />,
      'packaging-content': <PackagingGuideline />,
      'dna-content': <DNASamples />,
      'rna-content': <RNASamples />,
      'temperature-content': <ShippingTemperatureTable />,
      'schedule-content': <ShippingSchedule />
    };
    return sections[activeSection] || <GeneralGuidelines />;
  };

  return (
    <section className="bg-white py-5">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="bg-white p-4 md:p-6">
          <div className="grid xl:grid-cols-[280px_1fr] gap-8">
            {/* LEFT SIDEBAR */}
            <div className="xl:sticky xl:top-8">
              <SidebarNavigation 
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>
            
            {/* RIGHT CONTENT */}
            <div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;