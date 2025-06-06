'use client';
import React, { useState } from 'react';
import ExperienceSelect from './ExperienceSelect';
import FileUpload from './FileUpload';

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
      // Create FormData for file upload
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
      formDataToSend.append('form_type', 'career');

      // Add your form submission logic here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form or show success message
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
      <div className="bg-white p-6 md:p-8 lg:p-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Send a message
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-5 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-5 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-5 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-5 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-5 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              placeholder="Any special Remarks"
              required
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Applying...</span>
                </div>
              ) : (
                <>
                  <span className="mr-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 60 60"
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                    >
                      <path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z" />
                    </svg>
                  </span>
                  <span>Apply</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;