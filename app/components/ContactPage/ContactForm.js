"use client"
import React, { useState } from 'react';

const CustomSelect = ({ options, value, onChange, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none text-gray-600"
        required={required}
      >
        <span className={value ? 'text-gray-800' : 'text-gray-500'}>
          {value || placeholder}
        </span>
        <svg
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option, index) => (
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    service_interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Service and Product of Interest', disabled: true },
    { value: 'DNA Sequencing', label: 'DNA Sequencing' },
    { value: 'RNA Sequencing', label: 'RNA Sequencing' },
    { value: 'Genotyping', label: 'Genotyping' },
    { value: 'Bioinformatics', label: 'Bioinformatics' },
    { value: 'Other', label: 'Other' }
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        organisation: '',
        service_interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
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
          <input type="hidden" name="form_type" value="contact" />
          
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

          <div>
            <CustomSelect
              options={serviceOptions}
              value={formData.service_interest}
              onChange={(value) => handleSelectChange('service_interest', value)}
              placeholder="Service and Product of Interest"
              required
            />
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
                name="organisation"
                value={formData.organisation}
                onChange={handleInputChange}
                placeholder="Organisation"
                required
                className="w-full px-5 py-4 bg-white border border-teal-400 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Project description"
              required
              className="w-full px-5 py-4 bg-white border border-teal-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical placeholder-gray-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <>
                  <span className="mr-2">Submit</span>
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

export default ContactForm;