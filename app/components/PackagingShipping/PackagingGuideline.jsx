// components/PackagingShipping/PackagingGuideline.jsx
import React from 'react';

const PackagingGuideline = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Packaging Guideline</h3>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Seal the tubes with parafilm for transportation. To prevent the tubes from
          being crushed and broken during transit (leading to sample loss), insert
          sample tubes into 50 ml centrifuge tubes (or other rigid supports), which
          can also be packed with cotton, foam, etc.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          To prevent sample loss and/or cross-contamination, tightly seal all wells of
          the plate with an adhesive sheet or foil. Protect the plates or strip tubes
          in a sturdy box with plenty of cushioning. Sample shipments of plates should
          be carried out on frozen blue ice or dry ice to ensure that the samples
          remain frozen during shipment.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          To prevent sample loss and cross-contamination, we recommend securely
          sealing all wells of the plate with an adhesive sheet or foil. Place the
          plates or strip tubes in a sturdy box with ample cushioning. Ship the
          samples with a surplus of frozen blue ice blocks or dry ice to ensure they
          remain frozen throughout shipment.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            For leak prevention and to avoid cross-contamination, use one of the
            following sealing methods:<br />
            <span className="font-medium">(a)</span> Cap the wells with matching 8-strip
            caps, ensuring a tight seal. These caps are typically ordered separately
            from the plates.<br />
            <span className="font-medium">(b)</span> For foil seals, use a heat seal (preferred method)
            like "Thermo Scientific Easy Peel Heat Sealing Foil" that allows for
            resealing, or adhesive aluminum foil seals such as "AlumaSeal CS Film."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagingGuideline;