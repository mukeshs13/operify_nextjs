import React from 'react';
import CareerForm from './CareerForm';
import CareerInfo from './CareerInfo';

const CareerSection = () => {
  return (
    <section className="py-10 md:py-16 lg:py-6">
      <div className="container mx-auto max-w-none px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <CareerInfo />
          <CareerForm />
        </div>
      </div>
    </section>
  );
};

export default CareerSection;