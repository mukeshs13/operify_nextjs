// components/PackagingShipping/GeneralGuidelines.jsx
import React from 'react';

const GeneralGuidelines = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">General Guidelines</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h6 className="text-lg font-medium text-gray-800 mb-3">Sample Submission Form</h6>
          <p className="text-gray-600 leading-relaxed">
            When sending samples, please include the standard sample submission form
            filled out through our company website or sent through mail (landscape
            orientation, all on one page). We can only process samples if we receive a
            hard copy of your submission form along with them. Ensure that the sample
            names and quantities on the information sheet exactly match the sample names
            and quantities actually sent.
          </p>
        </div>
        
        <div>
          <h6 className="text-lg font-medium text-gray-800 mb-3">Sample Naming</h6>
          <p className="text-gray-600 leading-relaxed">
            Please use unique sample names consisting of 4-6 characters, using uppercase
            letters, numbers, and underscores only. Do not write the sample name and
            other information directly on the tube wall or tube cover with an oil pen.
            Instead, use a black permanent marker to write sample names on the top and
            side of each tube.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralGuidelines;