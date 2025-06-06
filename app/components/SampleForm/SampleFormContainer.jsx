'use client';
import React, { useEffect, useState } from 'react';
import CustomerInfoSection from './CustomerInfoSection';
import SampleInfoSection from './SampleInfoSection';
import ServiceInfoSection from './ServiceInfoSection';
import BioinformaticsSection from './BioinformaticsSection';
import SampleDetailsSection from './SampleDetailsSection';

const SampleFormContainer = () => {
  const [formData, setFormData] = useState({
    // Customer Information
    Principal_Investigator: '',
    Email: '',
    Company_Institution: '',
    Contact_Number: '',
    Address: '',
    City: '',
    State: '',
    Pin: '',
    Secondary_Contact: '',
    Secondary_Email: '',
    Secondary_Company_Institution: '',
    Secondary_Contact_Number: '',
    
    // Sample Information
    Project_Title: '',
    Number_of_Samples: '',
    Sample_Type: '',
    Sample_Type_Other: '',
    Sample_Source: '',
    Sample_Source_Other: '',
    Pathogenicity: '',
    Sample_Remarks: '',
    
    // Service Information
    Service_Requested: '',
    Service_Requested_Other: '',
    Type_of_Library: '',
    Type_of_Library_Other: '',
    Required_Library_Size: '',
    Required_Library_Size_Other: '',
    Index_Information: '',
    Kit_Information: '',
    Sequencing_Platform: '',
    Sequencing_Platform_Other: '',
    Sequencing_Read_Length: '',
    Sequencing_Read_Length_Other: '',
    Total_Data_Requirement: '',
    Service_Remarks: '',
    
    // Bioinformatics Information
    Analysis_Requested: '',
    Analysis_Details: '',
    Reference_Genome_Available: '',
    Genome_Size: '',
    Special_Consideration: '',
  });

  const [sampleDetails, setSampleDetails] = useState([
    {
      Serial_Number: '',
      Sample_Name: '',
      Storage_Temp: '',
      Preservative_Reagent: '',
      Temp_Information: '',
      Comments: ''
    }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check for Excel data in sessionStorage
    const excelData = sessionStorage.getItem('excelData');
    const uploadedFileName = sessionStorage.getItem('uploadedFileName');

    if (excelData) {
      try {
        const jsonData = JSON.parse(excelData);
        autoFillForm(jsonData);
        
        // Clear stored data
        sessionStorage.removeItem('excelData');
        sessionStorage.removeItem('uploadedFileName');
        
        setMessage(`Form auto-filled from uploaded file: ${uploadedFileName}`);
      } catch (error) {
        console.error('Error parsing Excel data:', error);
      }
    }
  }, []);

  const autoFillForm = (jsonData) => {
    if (jsonData.length === 0) return;

    const data = jsonData[0];
    const newFormData = { ...formData };

    // Helper function to safely get value
    const getValue = (key) => data[key] ? data[key].toString().trim() : '';

    // Customer Information
    newFormData.Principal_Investigator = getValue('Principal Investigator');
    newFormData.Email = getValue('Email');
    newFormData.Company_Institution = getValue('Company/Institution');
    newFormData.Contact_Number = getValue('Contact Number');
    newFormData.Address = getValue('Address');
    newFormData.City = getValue('City');
    newFormData.State = getValue('State');
    newFormData.Pin = getValue('Pin');
    newFormData.Secondary_Contact = getValue('Secondary Contact');
    newFormData.Secondary_Email = getValue('Secondary Email');
    newFormData.Secondary_Company_Institution = getValue('Secondary Company/Institution');
    newFormData.Secondary_Contact_Number = getValue('Secondary Contact Number');

    // Sample Information
    newFormData.Project_Title = getValue('Project Title');
    newFormData.Number_of_Samples = getValue('Number of Samples');
    newFormData.Sample_Type = getValue('Sample Type');
    newFormData.Sample_Type_Other = getValue('Sample Type Other');
    newFormData.Sample_Source = getValue('Sample Source');
    newFormData.Sample_Source_Other = getValue('Sample Source Other');
    newFormData.Pathogenicity = getValue('Pathogenicity');
    newFormData.Sample_Remarks = getValue('Sample Remarks');

    // Service Information
    newFormData.Service_Requested = getValue('Service Requested');
    newFormData.Service_Requested_Other = getValue('Service Requested Other');
    newFormData.Type_of_Library = getValue('Type of Library');
    newFormData.Type_of_Library_Other = getValue('Type of Library Other');
    newFormData.Required_Library_Size = getValue('Required Library Size');
    newFormData.Required_Library_Size_Other = getValue('Required Library Size Other');
    newFormData.Index_Information = getValue('Index Information');
    newFormData.Kit_Information = getValue('Kit Information');
    newFormData.Sequencing_Platform = getValue('Sequencing Platform');
    newFormData.Sequencing_Platform_Other = getValue('Sequencing Platform Other');
    newFormData.Sequencing_Read_Length = getValue('Sequencing Read Length');
    newFormData.Sequencing_Read_Length_Other = getValue('Sequencing Read Length Other');
    newFormData.Total_Data_Requirement = getValue('Total Data Requirement');
    newFormData.Service_Remarks = getValue('Service Remarks');

    // Bioinformatics Information
    newFormData.Analysis_Requested = getValue('Analysis Requested');
    newFormData.Analysis_Details = getValue('Analysis Details');
    newFormData.Reference_Genome_Available = getValue('Reference Genome Available');
    newFormData.Genome_Size = getValue('Genome Size');
    newFormData.Special_Consideration = getValue('Special Consideration');

    setFormData(newFormData);

    // Handle Sample Details
    const sampleDetailsData = jsonData.filter(row => 
      row['Serial Number'] || row['Sample Name'] || 
      row['Storage Temp'] || row['Preservative Reagent'] || 
      row['Temp Information'] || row['Comments']
    );

    if (sampleDetailsData.length > 0) {
      const newSampleDetails = sampleDetailsData.map(sample => ({
        Serial_Number: getValue('Serial Number'),
        Sample_Name: getValue('Sample Name'),
        Storage_Temp: getValue('Storage Temp'),
        Preservative_Reagent: getValue('Preservative Reagent'),
        Temp_Information: getValue('Temp Information'),
        Comments: getValue('Comments')
      }));
      setSampleDetails(newSampleDetails);
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Add form data
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Add sample details
      sampleDetails.forEach((sample, index) => {
        Object.keys(sample).forEach(key => {
          formDataToSend.append(`sample_details[${index}][${key}]`, sample[key]);
        });
      });
      
      formDataToSend.append('form_type', 'sample');

      // Here you would typically send to your backend
      console.log('Form submitted:', { formData, sampleDetails });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage('Form submitted successfully!');
      
      // Reset form
      setFormData({
        Principal_Investigator: '', Email: '', Company_Institution: '', Contact_Number: '',
        Address: '', City: '', State: '', Pin: '', Secondary_Contact: '', Secondary_Email: '',
        Secondary_Company_Institution: '', Secondary_Contact_Number: '', Project_Title: '',
        Number_of_Samples: '', Sample_Type: '', Sample_Type_Other: '', Sample_Source: '',
        Sample_Source_Other: '', Pathogenicity: '', Sample_Remarks: '', Service_Requested: '',
        Service_Requested_Other: '', Type_of_Library: '', Type_of_Library_Other: '',
        Required_Library_Size: '', Required_Library_Size_Other: '', Index_Information: '',
        Kit_Information: '', Sequencing_Platform: '', Sequencing_Platform_Other: '',
        Sequencing_Read_Length: '', Sequencing_Read_Length_Other: '', Total_Data_Requirement: '',
        Service_Remarks: '', Analysis_Requested: '', Analysis_Details: '',
        Reference_Genome_Available: '', Genome_Size: '', Special_Consideration: ''
      });
      
      setSampleDetails([{
        Serial_Number: '', Sample_Name: '', Storage_Temp: '',
        Preservative_Reagent: '', Temp_Information: '', Comments: ''
      }]);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-teal-50 shadow-lg border border-gray-300 font-arial text-xs">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="form_type" value="sample" />
          
          {/* Show message if exists */}
          {message && (
            <div className="mx-6 mt-6">
              <div className={`p-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                {message}
              </div>
            </div>
          )}

          <CustomerInfoSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
          
          <SampleInfoSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
          
          <ServiceInfoSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
          
          <BioinformaticsSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />
          
          <SampleDetailsSection 
            sampleDetails={sampleDetails}
            setSampleDetails={setSampleDetails}
          />

          {/* Submit Button */}
          <div className="text-center py-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SampleFormContainer;