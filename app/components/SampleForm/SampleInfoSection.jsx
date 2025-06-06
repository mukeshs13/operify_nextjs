import React from 'react';

const SampleInfoSection = ({ formData, onInputChange }) => {
  const handleChange = (field, value) => {
    onInputChange('sample', field, value);
  };

  const sampleTypeOptions = [
    '', 'DNA', 'RNA', 'cfDNA', 'Blood', 'Saliva', 'Swabs', 'Bodily Fluids', 'Feaces', 'Soil', 'Seeds', 'Water', 
    'Fresh/Frozen tissue', 'FFPE block', 'Plant Tissue', 'Animal Tissue', 'Ready to Run Library (RTRL)', 'Others'
  ];

  const sampleSourceOptions = [
    '', 'Plant', 'Human', 'Microbial', 'Animal', 'Environmental', 'Others'
  ];

  return (
    <div className="bg-white mx-6 p-6 rounded-lg">
      <h2 className="text-teal-600 text-lg font-bold mb-6 border-b-2 border-teal-600 pb-1">
        Sample Information
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-bold text-sm">
            Project Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.Project_Title}
            onChange={(e) => handleChange('Project_Title', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-bold text-sm">
            Number of Samples <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.Number_of_Samples}
            onChange={(e) => handleChange('Number_of_Samples', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-bold text-sm">
              Sample Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Sample_Type}
              onChange={(e) => handleChange('Sample_Type', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {sampleTypeOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-bold text-sm">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Sample_Type_Other}
              onChange={(e) => handleChange('Sample_Type_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-bold text-sm">
              Sample Source <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Sample_Source}
              onChange={(e) => handleChange('Sample_Source', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {sampleSourceOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-bold text-sm">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Sample_Source_Other}
              onChange={(e) => handleChange('Sample_Source_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-bold text-sm">
              Pathogenicity <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.Pathogenicity}
              onChange={(e) => handleChange('Pathogenicity', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold text-sm">Remarks</label>
            <input
              type="text"
              value={formData.Sample_Remarks}
              onChange={(e) => handleChange('Sample_Remarks', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleInfoSection;