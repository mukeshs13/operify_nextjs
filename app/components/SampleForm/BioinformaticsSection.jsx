import React from 'react';

const BioinformaticsSection = ({ formData, onInputChange }) => {
  const handleChange = (field, value) => {
    onInputChange('bioinformatics', field, value);
  };

  const analysisOptions = [
    '', 'Variant Calling', 'Differential Expression', 'De Novo Assembly', 'Others'
  ];

  const genomeOptions = [
    '', 'Yes', 'No', 'Others'
  ];

  return (
    <div className="bg-white mx-6 p-6 rounded-lg">
      <h2 className="text-teal-600 text-lg font-bold mb-6 border-b-2 border-teal-600 pb-1">
        Bioinformatics Information
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Analysis Requested <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Analysis_Requested}
              onChange={(e) => handleChange('Analysis_Requested', e.target.value)}
              style={{ color: '#555555' }}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {analysisOptions.map(option => (
                <option key={option} value={option} style={{ color: '#555555' }}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify Details</label>
            <input
              type="text"
              value={formData.Analysis_Details}
              onChange={(e) => handleChange('Analysis_Details', e.target.value)}
              style={{ color: '#555555' }}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Reference Genome Available <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Reference_Genome_Available}
              onChange={(e) => handleChange('Reference_Genome_Available', e.target.value)}
              style={{ color: '#555555' }}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {genomeOptions.map(option => (
                <option key={option} value={option} style={{ color: '#555555' }}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">If Yes, Please Mention Genome Size</label>
            <input
              type="text"
              value={formData.Genome_Size}
              onChange={(e) => handleChange('Genome_Size', e.target.value)}
              style={{ color: '#555555' }}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-sm text-gray-600">
            Special Consideration <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.Special_Consideration}
            onChange={(e) => handleChange('Special_Consideration', e.target.value)}
            style={{ color: '#555555' }}
            className="w-full p-2 border border-gray-300 rounded text-sm font-arial box-border"
            rows={4}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BioinformaticsSection;