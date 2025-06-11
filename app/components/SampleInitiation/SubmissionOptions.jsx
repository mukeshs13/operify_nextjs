'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SubmissionOptions = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFillManually = () => {
    window.location.href = '/samples-form';
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['.xlsx', '.xls'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

      if (validTypes.includes(fileExtension)) {
        processExcelFile(file);
      } else {
        alert('Please select a valid Excel file (.xlsx or .xls)');
        event.target.value = '';
      }
    }
  };

  const processExcelFile = async (file) => {
    setIsProcessing(true);
    
    try {
      // Import XLSX dynamically since it's a client-side library
      const XLSX = await import('xlsx');
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

          if (jsonData.length > 0) {
            // Store the Excel data in sessionStorage
            sessionStorage.setItem('excelData', JSON.stringify(jsonData));
            sessionStorage.setItem('uploadedFileName', file.name);

            // Redirect to samples_form after a short delay
            setTimeout(() => {
              window.location.href = '/samples-form';
            }, 1000);
          } else {
            alert('No valid data found in the Excel file.');
            setIsProcessing(false);
          }
        } catch (error) {
          console.error('Excel processing error:', error);
          alert('Error processing Excel file. Please check the file format and try again.');
          setIsProcessing(false);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error loading XLSX library:', error);
      alert('Error loading file processor. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      // Import XLSX dynamically
      const XLSX = await import('xlsx');
      
      // Create template data structure with only column headers
      const templateData = [
        {
          // Customer Information
          'Principal Investigator': '',
          'Email': '',
          'Company/Institution': '',
          'Contact Number': '',
          'Address': '',
          'City': '',
          'State': '',
          'Pin': '',
          'Secondary Contact': '',
          'Secondary Email': '',
          'Secondary Company/Institution': '',
          'Secondary Contact Number': '',

          // Sample Information
          'Project Title': '',
          'Number of Samples': '',
          'Sample Type': '',
          'Sample Type Other': '',
          'Sample Source': '',
          'Sample Source Other': '',
          'Pathogenicity': '',
          'Sample Remarks': '',

          // Service Information
          'Service Requested': '',
          'Service Requested Other': '',
          'Type of Library': '',
          'Type of Library Other': '',
          'Required Library Size': '',
          'Required Library Size Other': '',
          'Index Information': '',
          'Kit Information': '',
          'Sequencing Platform': '',
          'Sequencing Platform Other': '',
          'Sequencing Read Length': '',
          'Sequencing Read Length Other': '',
          'Total Data Requirement': '',
          'Service Remarks': '',

          // Bioinformatics Information
          'Analysis Requested': '',
          'Analysis Details': '',
          'Reference Genome Available': '',
          'Genome Size': '',
          'Special Consideration': '',

          // Sample Details
          'Serial Number': '',
          'Sample Name': '',
          'Storage Temp': '',
          'Preservative Reagent': '',
          'Temp Information': '',
          'Comments': ''
        }
      ];

      // Create workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(templateData);

      // Set column widths for better readability
      const colWidths = Object.keys(templateData[0]).map(() => ({ wch: 20 }));
      worksheet['!cols'] = colWidths;

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sample Initiation Form');

      // Generate Excel file and download
      const today = new Date().toISOString().split('T')[0];
      const filename = `Sample_Initiation_Form_Template_${today}.xlsx`;
      XLSX.writeFile(workbook, filename);

      // Show success message
      showMessage('Excel template downloaded successfully!', 'success');
    } catch (error) {
      console.error('Error downloading template:', error);
      alert('Error downloading template. Please try again.');
    }
  };

  const showMessage = (message, type) => {
    // Create and show a toast message
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-5 right-5 z-50 max-w-sm p-4 rounded-lg shadow-lg font-medium ${
      type === 'success' 
        ? 'bg-green-100 text-green-800 border border-green-200' 
        : 'bg-red-100 text-red-800 border border-red-200'
    }`;
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  };

  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <h3 className="text-gray-600 text-lg md:text-xl font-medium mb-6">
          Based on the convenience, please select one option:
        </h3>
        
        {/* Process Image */}
        <div className="text-center my-6">
          <Image
            src="/images/sample-process-steps1.png"
            alt="Sample Submission Process"
            width={500}
            height={300}
            className="max-w-full h-auto rounded-lg mx-auto"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        {/* Main Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <button
            onClick={handleFillManually}
            className="w-full md:w-auto px-6 py-3 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 transition-colors"
          >
            Fill Manually
          </button>

          <button
            onClick={() => document.getElementById('fileUpload').click()}
            className="w-full md:w-auto px-6 py-3 bg-transparent border border-gray-300 text-gray-600 font-normal rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Image
              src="/images/file-icon.svg"
              alt="File Icon"
              width={16}
              height={16}
            />
            Upload
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
        />

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="text-center py-4">
            <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-teal-600 rounded-full animate-spin mb-2"></div>
            <p className="text-gray-600">Processing Excel file and redirecting...</p>
          </div>
        )}

        {/* Or Divider */}
        <div className="text-center text-gray-500 text-base">
          or
        </div>

        {/* Download Template Button */}
        <div className="text-center">
          <button
            onClick={handleDownloadTemplate}
            className="text-teal-600 text-base underline hover:text-teal-700 transition-colors bg-transparent border-none cursor-pointer"
          >
            Download form as Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionOptions;