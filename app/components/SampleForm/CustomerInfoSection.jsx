import React from 'react';

const CustomerInfoSection = ({ formData, onInputChange }) => {
  const handleChange = (field, value) => {
    onInputChange('customer', field, value);
  };

  return (
    <div className="bg-white mx-6 mt-6 p-6 rounded-lg">
      <h2 className="text-teal-600 text-lg font-semibold mb-6 border-b-2 border-teal-600 pb-1">
        Customer Information
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Principal Investigator <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.Principal_Investigator}
              onChange={(e) => handleChange('Principal_Investigator', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.Email}
              onChange={(e) => handleChange('Email', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Company/Institution <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.Company_Institution}
              onChange={(e) => handleChange('Company_Institution', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.Contact_Number}
              onChange={(e) => handleChange('Contact_Number', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-sm text-gray-600">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.Address}
            onChange={(e) => handleChange('Address', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.City}
              onChange={(e) => handleChange('City', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.State}
              onChange={(e) => handleChange('State', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">
              Pin <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.Pin}
              onChange={(e) => handleChange('Pin', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Secondary Contact</label>
            <input
              type="text"
              value={formData.Secondary_Contact}
              onChange={(e) => handleChange('Secondary_Contact', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={formData.Secondary_Email}
              onChange={(e) => handleChange('Secondary_Email', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Company/Institution</label>
            <input
              type="text"
              value={formData.Secondary_Company_Institution}
              onChange={(e) => handleChange('Secondary_Company_Institution', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm text-gray-600">Contact Number</label>
            <input
              type="tel"
              value={formData.Secondary_Contact_Number}
              onChange={(e) => handleChange('Secondary_Contact_Number', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-sm font-arial h-10 box-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSection;