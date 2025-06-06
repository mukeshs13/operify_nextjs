import React from 'react';
import TooltipIcon from './TooltipIcon';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Search Result</h2>
        <div className="text-center py-8 text-gray-600 bg-gray-50 rounded-lg">
          Please Select Valid Information
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Search Result</h2>
      
      {results.map((item, index) => (
        <div key={index} className="bg-teal-50 p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResultItem
              title="Recommended Quantity"
              value={item.recommendedQuantity}
              tooltip="Indicates the suggested amount of sample for optimal results."
            />
            <ResultItem
              title="Minimum Quantity"
              value={item.minimumQuantity}
              tooltip="Specifies the minimum amount of sample that can be processed."
            />
            <ResultItem
              title="Minimum Concentration"
              value={item.minimumConcentration}
              tooltip="States the lowest concentration of nucleic acid required for processing."
            />
            <ResultItem
              title="Platform"
              value={item.platform}
              tooltip="Identifies the sequencing or analysis platform. This category is applicable only for Ready To Run Library (RTRL)."
            />
            <ResultItem
              title="Data Amount"
              value={item.dataAmount}
              tooltip="Provides an estimate of the data output. This category is applicable only for Ready To Run Library (RTRL)."
            />
            <ResultItem
              title="Volume Requirement"
              value={item.volumeRequirement}
              tooltip="Specifies the necessary volume of the sample for submission. This category is applicable only for Ready To Run Library (RTRL)."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const ResultItem = ({ title, value, tooltip }) => (
  <div className="space-y-2">
    <div className="flex items-center text-gray-600 text-sm">
      {title}
      <TooltipIcon text={tooltip} />
    </div>
    <div className="font-semibold text-gray-900 text-base">
      {value || 'N/A'}
    </div>
  </div>
);

export default SearchResults;