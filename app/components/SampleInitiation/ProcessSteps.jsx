import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Review Sample Requirements:",
      items: [
        <>Before submitting forms and samples, check the <a href="/sample-submission-guideline" className="text-gray-500 underline">sample submission guidelines</a> page and plan your project accordingly.</>,
        <>Read the <a href="/packaging-and-shipping-guideline" className="text-gray-500 underline">packaging and shipping</a> guidelines and fill out the appropriate sample Initiation form.</>,
        "Please note that samples will be processed in the order of date received physically in the lab along with duly filled Sample Submission Form. Submitting an online form without sample shipment will not reserve a space in the queue."
      ]
    },
    {
      number: 2,
      title: "Match Sample Names",
      items: [
        "Ensure sample names match what is written on your tubes. Sample names must be between 4-6 characters, using uppercase letters, numbers, and underscores only."
      ]
    },
    {
      number: 3,
      title: "Ship or Drop-Off Samples:",
      items: [
        <>Ship or drop off your samples at the lab with a printed copy of the submission form. We can also pick up the sample from your institution(additional logistic charges will be applicable). Check the <a href="/packaging-and-shipping-guideline#schedule-content" className="text-gray-500 underline">shipping schedule</a> for more details.</>
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start space-x-4">
          {/* Step Number */}
          <div 
            className="flex-shrink-0 w-8 h-8 text-white rounded-md flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: '#faae31' }}
          >
            {step.number}
          </div>
          
          {/* Step Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ color: '#2a6564' }}>
              {step.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
              {step.items.map((item, index) => (
                <li key={index} className="text-justify">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;