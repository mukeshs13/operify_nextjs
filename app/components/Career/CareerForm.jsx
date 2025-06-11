'use client';
import React, { useState } from 'react';

const ExperienceSelect = ({ value, onChange, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const experienceOptions = [
    { value: '', label: 'Select Experience', disabled: true },
    { value: 'Fresher', label: 'Fresher' },
    { value: '1-2 years', label: '1-2 years' },
    { value: '3-5 years', label: '3-5 years' },
    { value: '5+ years', label: '5+ years' }
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[52px] px-5 bg-white border border-teal-400 rounded-full text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none flex items-center justify-between"
        required={required}
      >
        <span className={value ? 'text-gray-800' : 'text-gray-500'}>
          {value || 'Select Experience'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {experienceOptions.map((option, index) => (
            <button
              key={index}
              type="button"
              disabled={option.disabled}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${option.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const FileUpload = ({ onFileChange, currentFile, required }) => {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileSelect}
        required={required}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        id="resume-upload"
      />
      <div className="w-full h-[52px] px-5 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer flex items-center justify-between">
        <span className={currentFile ? 'text-gray-800' : 'text-gray-500'}>
          {currentFile ? currentFile.name : 'Upload Resume'}
        </span>
        <button 
          type="button"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors flex-shrink-0"
        >
          Choose File
        </button>
      </div>
    </div>
  );
};

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    Education_Qualification: '',
    experience: '',
    Specify_your_interest_in_Genomics: '',
    message: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (file) => {
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
      formDataToSend.append('form_type', 'career');

      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Application submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        Education_Qualification: '',
        experience: '',
        Specify_your_interest_in_Genomics: '',
        message: '',
        resume: null
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:w-7/12">
      <div className="p-6 md:p-8 lg:p-10 rounded-3xl" style={{ backgroundColor: '#f2fcfc' }}>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-normal text-teal-700 mb-2">
            Send a message
          </h2>
        </div>

        <div className="space-y-6">
          <input type="hidden" name="form_type" value="career" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone"
                required
                className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="Education_Qualification"
                value={formData.Education_Qualification}
                onChange={handleInputChange}
                placeholder="Education Qualification"
                required
                className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ExperienceSelect
                value={formData.experience}
                onChange={(value) => handleSelectChange('experience', value)}
                required
              />
            </div>
            <div>
              <FileUpload
                onFileChange={handleFileChange}
                currentFile={formData.resume}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="Specify_your_interest_in_Genomics"
              value={formData.Specify_your_interest_in_Genomics}
              onChange={handleInputChange}
              placeholder="Specify your interest in Genomics"
              required
              className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any special Remarks"
              required
              className="w-full px-5 py-4 bg-white border border-teal-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical placeholder-gray-500"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Applying...</span>
                </div>
              ) : (
                <>
                  <span className="mr-2">Apply</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;