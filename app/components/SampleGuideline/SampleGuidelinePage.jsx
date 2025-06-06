import React from 'react';
import PageTitle from './PageTitle';
import IntroSection from './IntroSection';
import ContentSection from './ContentSection';

const SampleGuidelinePage = () => {
  return (
    <div className="page-content">
      <PageTitle />
      <IntroSection />
      <ContentSection />
    </div>
  );
};
export default SampleGuidelinePage;