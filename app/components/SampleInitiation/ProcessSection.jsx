import React from 'react';
import ProcessSteps from './ProcessSteps';
import SubmissionOptions from './SubmissionOptions';

const ProcessSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-none px-4">
        <div className="bg-white p-4 md:p-6">
          {/* Main Title */}
          <div className="text-left mb-4">
            <h2 className="text-2xl md:text-4xl text-gray-600 font-normal">
              Welcome to Our Online Submission Portal!
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
            {/* Left Column - Process Steps */}
            <div className="flex-1 min-w-0">
              <ProcessSteps />
            </div>

            {/* Right Column - Submission Options */}
            <div className="flex-1 min-w-0">
              <SubmissionOptions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;