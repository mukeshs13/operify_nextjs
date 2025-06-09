'use client';
import React, { useState, useEffect } from 'react';
import { sequencingData } from './sequencingData';
import TooltipIcon from './TooltipIcon';

const SearchFilters = ({ filters, onFilterChange, onSearch, onReset, isSearchEnabled }) => {
  const [availableOptions, setAvailableOptions] = useState({
    nucleicAcid: [],
    category: [],
    application: [],
    sampleType: []
  });

  useEffect(() => {
    updateAvailableOptions();
  }, [filters]);

  const updateAvailableOptions = () => {
    // Get nucleic acid options
    const nucleicAcids = [...new Set(sequencingData.map(item => item.nucleicAcid))];
    
    // Filter data based on current selections
    let filteredData = sequencingData;
    if (filters.nucleicAcid) {
      filteredData = filteredData.filter(item => item.nucleicAcid === filters.nucleicAcid);
    }
    
    const categories = [...new Set(filteredData.map(item => item.category))];
    
    // Further filter for applications
    if (filters.category) {
      filteredData = filteredData.filter(item => item.category === filters.category);
    }
    
    const applications = [...new Set(filteredData.map(item => item.application))];
    
    // Further filter for sample types
    if (filters.application) {
      filteredData = filteredData.filter(item => item.application === filters.application);
    }
    
    const sampleTypes = [...new Set(filteredData.map(item => item.sampleType))];

    setAvailableOptions({
      nucleicAcid: nucleicAcids.sort(),
      category: categories.sort(),
      application: applications.sort(),
      sampleType: sampleTypes.sort()
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Nucleic Acid */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            Nucleic Acid
          </label>
          <select
            value={filters.nucleicAcid}
            onChange={(e) => onFilterChange('nucleicAcid', e.target.value)}
            style={{ color: '#555555' }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" style={{ color: '#555555' }}>Select</option>
            {availableOptions.nucleicAcid.map(option => (
              <option key={option} value={option} style={{ color: '#555555' }}>{option}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            disabled={!filters.nucleicAcid}
            style={{ color: '#555555' }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="" style={{ color: '#555555' }}>{filters.nucleicAcid ? 'Select' : 'Select Previous Option First'}</option>
            {availableOptions.category.map(option => (
              <option key={option} value={option} style={{ color: '#555555' }}>{option}</option>
            ))}
          </select>
        </div>

        {/* Applications */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            Applications
            <TooltipIcon text="Lists all the applications for the sample." />
          </label>
          <select
            value={filters.application}
            onChange={(e) => onFilterChange('application', e.target.value)}
            disabled={!filters.category}
            style={{ color: '#555555' }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="" style={{ color: '#555555' }}>{filters.category ? 'Select' : 'Select Previous Option First'}</option>
            {availableOptions.application.map(option => (
              <option key={option} value={option} style={{ color: '#555555' }}>{option}</option>
            ))}
          </select>
        </div>

        {/* Sample Type */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            Sample Type
            <TooltipIcon text="Describes the nature of the sample. Common sample types are listed, though some categories might not be included." />
          </label>
          <select
            value={filters.sampleType}
            onChange={(e) => onFilterChange('sampleType', e.target.value)}
            disabled={!filters.application}
            style={{ color: '#555555' }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="" style={{ color: '#555555' }}>{filters.application ? 'Select' : 'Select Previous Option First'}</option>
            {availableOptions.sampleType.map(option => (
              <option key={option} value={option} style={{ color: '#555555' }}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center space-x-4 mt-6">
        <button
          onClick={onReset}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          title="Reset filters"
        >
          ✖
        </button>
        <button
          onClick={onSearch}
          disabled={!isSearchEnabled}
          className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;