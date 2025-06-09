'use client';
import React from 'react';

const SampleDetailsSection = ({ sampleDetails, setSampleDetails }) => {
  const preservativeOptions = [
    '', 'Trizol', 'RNA later', 'Ethanol', 'Formalin', 'FFPE', 'Others'
  ];

  const tempOptions = [
    '', 'Ambient', 'Cool pack', 'Dry ice', 'Others'
  ];

  const handleSampleChange = (index, field, value) => {
    const newSampleDetails = [...sampleDetails];
    newSampleDetails[index] = {
      ...newSampleDetails[index],
      [field]: value
    };
    setSampleDetails(newSampleDetails);
  };

  const addRow = () => {
    setSampleDetails([...sampleDetails, {
      Serial_Number: '',
      Sample_Name: '',
      Storage_Temp: '',
      Preservative_Reagent: '',
      Temp_Information: '',
      Comments: ''
    }]);
  };

  const removeRow = (index) => {
    if (sampleDetails.length > 1) {
      const newSampleDetails = sampleDetails.filter((_, i) => i !== index);
      setSampleDetails(newSampleDetails);
    }
  };

  return (
    <div className="bg-white mx-6 p-6 rounded-lg">
      <h2 className="text-teal-600 text-lg font-bold mb-6 border-b-2 border-teal-600 pb-1">
        Sample Details
      </h2>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left font-bold">Serial Number</th>
              <th className="border border-gray-300 p-2 text-left font-bold">Sample Name</th>
              <th className="border border-gray-300 p-2 text-left font-bold">Storage Temp (in °C)</th>
              <th className="border border-gray-300 p-2 text-left font-bold">Preservative Reagent</th>
              <th className="border border-gray-300 p-2 text-left font-bold">Temp Information</th>
              <th className="border border-gray-300 p-2 text-left font-bold">Comments</th>
              <th className="border border-gray-300 p-2 text-center font-bold w-12"></th>
            </tr>
          </thead>
          <tbody>
            {sampleDetails.map((sample, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={sample.Serial_Number}
                    onChange={(e) => handleSampleChange(index, 'Serial_Number', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={sample.Sample_Name}
                    onChange={(e) => handleSampleChange(index, 'Sample_Name', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={sample.Storage_Temp}
                    onChange={(e) => handleSampleChange(index, 'Storage_Temp', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    value={sample.Preservative_Reagent}
                    onChange={(e) => handleSampleChange(index, 'Preservative_Reagent', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  >
                    {preservativeOptions.map(option => (
                      <option key={option} value={option} style={{ color: '#555555' }}>
                        {option || 'Select'}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    value={sample.Temp_Information}
                    onChange={(e) => handleSampleChange(index, 'Temp_Information', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  >
                    {tempOptions.map(option => (
                      <option key={option} value={option} style={{ color: '#555555' }}>
                        {option || 'Select'}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={sample.Comments}
                    onChange={(e) => handleSampleChange(index, 'Comments', e.target.value)}
                    style={{ color: '#555555' }}
                    className="w-full text-xs h-8 p-1 border-none outline-none"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="text-gray-400 hover:text-red-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    disabled={sampleDetails.length === 1}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {sampleDetails.map((sample, index) => (
          <div key={index} className="border border-gray-300 rounded p-4 bg-white">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Serial Number</label>
                <input
                  type="text"
                  value={sample.Serial_Number}
                  onChange={(e) => handleSampleChange(index, 'Serial_Number', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Sample Name</label>
                <input
                  type="text"
                  value={sample.Sample_Name}
                  onChange={(e) => handleSampleChange(index, 'Sample_Name', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Storage Temp (in °C)</label>
                <input
                  type="text"
                  value={sample.Storage_Temp}
                  onChange={(e) => handleSampleChange(index, 'Storage_Temp', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Preservative Reagent</label>
                <select
                  value={sample.Preservative_Reagent}
                  onChange={(e) => handleSampleChange(index, 'Preservative_Reagent', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                >
                  {preservativeOptions.map(option => (
                    <option key={option} value={option} style={{ color: '#555555' }}>
                      {option || 'Select'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Temp Information</label>
                <select
                  value={sample.Temp_Information}
                  onChange={(e) => handleSampleChange(index, 'Temp_Information', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                >
                  {tempOptions.map(option => (
                    <option key={option} value={option} style={{ color: '#555555' }}>
                      {option || 'Select'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-teal-600 mb-1">Comments</label>
                <input
                  type="text"
                  value={sample.Comments}
                  onChange={(e) => handleSampleChange(index, 'Comments', e.target.value)}
                  style={{ color: '#555555' }}
                  className="w-full p-2 border border-gray-300 rounded text-xs h-8"
                />
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => removeRow(index)}
                  className="text-gray-400 hover:text-red-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors mx-auto"
                  disabled={sampleDetails.length === 1}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Row Button */}
      <button
        type="button"
        onClick={addRow}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-xs transition-colors md:float-right"
      >
        Add Row
      </button>
      <div className="clear-both"></div>
    </div>
  );
};

export default SampleDetailsSection;