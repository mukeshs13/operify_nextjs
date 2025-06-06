// components/PackagingShipping/DNASamples.jsx
import React from 'react';

const DNASamples = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Shipping of DNA Samples</h3>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Picogreen quantification is advised from the client, in absence of which
            an agarose Gel Electrophoresis and Nanodrop quantification must be
            shared. Samples with A260/280 ratio values of ~1.8 are considered "pure"
            for DNA and will be accepted for processing further.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            For large-scale projects, please submit DNA samples in strip tubes or in
            well-sealed 96-well PCR plates with semi- or fully-skirted edges (we
            recommend Eppendorf twin.tec PCR plate 96 LoBind). Arrange samples in a
            column format (e.g., A1, B1, C1, D1, ..., A2, B2, C2, D2, ...) in
            contiguous wells. Avoid skipping wells, rows, or columns.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            DNA samples in 70% ethanol can be transported at room temperature, while
            samples in H2O or TE buffer should be transported with ice packs (e.g.,
            "blue ice").
          </p>
        </div>
        
        <div className="lg:w-96 flex justify-center">
          <div className="text-center">
            <img 
              src="/images/dna.jpg" 
              alt="DNA Sample Order in 96-Well Plates"
              className="w-full max-w-96 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNASamples;