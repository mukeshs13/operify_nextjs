import React from 'react';
import PageTitle from './PageTitle';
import ProcessSection from './ProcessSection';
import ContactNote from './ContactNote';

const SampleInitiationPage = () => {
  return (
    <div className="page-content">
      <PageTitle />
      <ProcessSection />
      <ContactNote />
    </div>
  );
};

export default SampleInitiationPage;