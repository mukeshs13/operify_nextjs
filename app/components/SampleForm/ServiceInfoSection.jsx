import React from 'react';

const ServiceInfoSection = ({ formData, onInputChange }) => {
  const handleChange = (field, value) => {
    onInputChange('service', field, value);
  };

  const serviceOptions = [
    '', 'DNA Sequencing - Whole Genome', 'DNA Sequencing - Whole Exome DNA Sequencing',
    'DNA Sequencing - Amplicon Sequencing (16S/18S/ITS)', 'DNA Sequencing - Targeted Sequencing',
    'DNA Sequencing - Single Cell DNA', 'DNA Sequencing - Microbiome and Metagenomics',
    'DNA Sequencing - Whole Genome Bisulphite', 'DNA Sequencing - ChIP Sequencing',
    'DNA Sequencing - ATAC Sequencing', 'DNA Sequencing - HiC Sequencing',
    'DNA Sequencing - Optical Mapping', 'DNA Sequencing - Long Read Sequencing by Pacbio',
    'DNA Sequencing - Long Read Sequencing by Nanopore', 'DNA Sequencing - Hybrid',
    'RNA Sequencing- Total RNA', 'RNA Sequencing- mRNA', 'RNA Sequencing- Small RNA',
    'RNA Sequencing- Long Non-Coding', 'RNA Sequencing- lncRNA', 'RNA Sequencing- Metatranscriptomics',
    'RNA Sequencing- Degradome', 'RNA Sequencing- Iso Sequencing', 'RNA Sequencing- Circular RNA',
    'RNA Sequencing- Single Cell RNA', 'Genotyping- ddRAD', 'Genotyping- SNP',
    'Genotyping- Microsatellites/ STR/SSR/FLA', 'Genotyping- Sequencing based',
    'Genotyping- GWAS', 'Genotyping- DNA Fingerprinting', 'Others'
  ];

  const libraryTypeOptions = [
    '', 'Single-End Sequencing', 'Paired-End Sequencing', 'Mate-Pair Sequencing',
    'Continuous Long Read (CLR)', 'High-Fidelity (HiFi)',
    'High-throughput Chromosome Conformation Capture (HiC)', 'Optical Mapping', 'Others'
  ];

  const librarySizeOptions = [
    '', '250 bp (Illumina)', '300 bp (Illumina)', '450 bp (Illumina)', '550 bp (Illumina)',
    '800 bp (Illumina)', '1 kb (Oxford Nanopore Technologies, ONT)',
    '5 kb (Oxford Nanopore Technologies, ONT)', '7 kb (Oxford Nanopore Technologies, ONT)',
    '10 kb (Oxford Nanopore Technologies, ONT)', '1-2 kb (PacBio)', '2-3 kb (PacBio)',
    '3-6 kb (PacBio)', '5-10 kb (PacBio)', '10 kb (Continuous Long Read, CLR)',
    '20 kb CLR (Continuous Long Read, CLR)', 'Others'
  ];

  const platformOptions = [
    '', 'NovaSeq 6000/ NovaSeq X', 'NextSeq', 'MiSeq', 'Pacific Biosciences(PacBio)',
    'Oxford Nanopore Technologies (ONT)', 'NanoString', 'Saphyr System (Optical Mapping)',
    'Illumina iScan System', 'Kompetitive Allele-Specific PCR (KASPAR)', 'Others'
  ];

  const readLengthOptions = [
    '', '1X50bp (Illumina)', '1X100bp (Illumina)', '2X100bp (Illumina)',
    '2X150bp (Illumina)', '2X250bp (Illumina)', '2X125bp (Illumina)',
    '2X300bp (Illumina)', 'Others'
  ];

  return (
    <div className="bg-white mx-6 p-6 rounded-lg">
      <h2 className="text-teal-600 text-lg font-bold mb-6 border-b-2 border-teal-600 pb-1">
        Service Information
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Service Requested <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Service_Requested}
              onChange={(e) => handleChange('Service_Requested', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {serviceOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Service_Requested_Other}
              onChange={(e) => handleChange('Service_Requested_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Type of Library <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Type_of_Library}
              onChange={(e) => handleChange('Type_of_Library', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {libraryTypeOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Type_of_Library_Other}
              onChange={(e) => handleChange('Type_of_Library_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Required Library Size <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Required_Library_Size}
              onChange={(e) => handleChange('Required_Library_Size', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {librarySizeOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Required_Library_Size_Other}
              onChange={(e) => handleChange('Required_Library_Size_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Index Information (only for RTRL)</label>
            <input
              type="text"
              value={formData.Index_Information}
              onChange={(e) => handleChange('Index_Information', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Kit Information (only for RTRL)</label>
            <input
              type="text"
              value={formData.Kit_Information}
              onChange={(e) => handleChange('Kit_Information', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Sequencing Platform <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Sequencing_Platform}
              onChange={(e) => handleChange('Sequencing_Platform', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {platformOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Sequencing_Platform_Other}
              onChange={(e) => handleChange('Sequencing_Platform_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Sequencing Read Length <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.Sequencing_Read_Length}
              onChange={(e) => handleChange('Sequencing_Read_Length', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            >
              {readLengthOptions.map(option => (
                <option key={option} value={option}>
                  {option || 'Select'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Please Specify (if Others)</label>
            <input
              type="text"
              value={formData.Sequencing_Read_Length_Other}
              onChange={(e) => handleChange('Sequencing_Read_Length_Other', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Total Data Requirement (in Million or in GB) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.Total_Data_Requirement}
              onChange={(e) => handleChange('Total_Data_Requirement', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Remarks</label>
            <input
              type="text"
              value={formData.Service_Remarks}
              onChange={(e) => handleChange('Service_Remarks', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoSection;