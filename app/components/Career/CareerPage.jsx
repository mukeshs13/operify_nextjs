import React from 'react';
import CareerHero from './CareerHero'
import CareerSection from './CareerSection';

const CareerPage = () => {
  return (
    <div className="page-content contact-us">
        <CareerHero />
      <div className="h-9"></div>
      <CareerSection />
    </div>
  );
};

export default CareerPage;