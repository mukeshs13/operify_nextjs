// components/PackagingShipping/RNASamples.jsx
import React from 'react';

const RNASamples = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Shipping of RNA Samples</h3>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Bioanalyzer QC report is advised to be shared from the client's end, in the
          absence of which an agarose Gel Electrophoresis and Nanodrop quantification
          to confirm the integrity of RNA must be shared. Samples with A260/280 ratio
          values of ~1.8 are considered "pure" for DNA and will be accepted for
          processing further.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          We require Bioanalyzer traces (or similar) for all customer-submitted
          sequencing libraries and total RNA samples. If traces are not provided, we
          will perform Bioanalyzer QC for an additional fee. If you can supply traces,
          please include them into the shipment in hard copy. Also, ensure that your
          samples meet the specified sample or library requirements [LINK].
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          For large-scale projects, RNA samples can be submitted in strip tubes with
          individually attached RNase-free caps. Pack the strips into racks (e.g.,
          empty pipet tip boxes) and ensure they are secured to prevent movement
          during transport.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            RNA, cells, bacteria, and frozen tissue samples should be stored in liquid
            nitrogen for rapid freezing and then transported with dry ice. For longer
            shipments, RNA samples can also be successfully shipped dry at room
            temperature after LiCl/ethanol precipitation and ethanol washes; make sure
            to mark the pellet's position on the tubes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RNASamples;