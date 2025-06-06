'use client';
import React, { useState, useEffect } from 'react';
import { sequencingData } from './sequencingData';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';

const SearchSampleRequirements = () => {
  const [filters, setFilters] = useState({
    nucleicAcid: '',
    category: '',
    application: '',
    sampleType: ''
  });
  
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterName]: value };
      
      // Reset subsequent filters when a parent filter changes
      const filterOrder = ['nucleicAcid', 'category', 'application', 'sampleType'];
      const currentIndex = filterOrder.indexOf(filterName);
      
      for (let i = currentIndex + 1; i < filterOrder.length; i++) {
        newFilters[filterOrder[i]] = '';
      }
      
      return newFilters;
    });
  };

  const handleSearch = () => {
    let results = sequencingData;
    
    if (filters.nucleicAcid) {
      results = results.filter(item => item.nucleicAcid === filters.nucleicAcid);
    }
    if (filters.category) {
      results = results.filter(item => item.category === filters.category);
    }
    if (filters.application) {
      results = results.filter(item => item.application === filters.application);
    }
    if (filters.sampleType) {
      results = results.filter(item => item.sampleType === filters.sampleType);
    }
    
    setFilteredResults(results);
    setShowResults(true);
  };

  const handleReset = () => {
    setFilters({
      nucleicAcid: '',
      category: '',
      application: '',
      sampleType: ''
    });
    setFilteredResults([]);
    setShowResults(false);
  };

  const isSearchEnabled = filters.nucleicAcid && filters.category && filters.application && filters.sampleType;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-600">Search Sample Requirements</h3>
      </div>
      
      <SearchFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onReset={handleReset}
        isSearchEnabled={isSearchEnabled}
      />
      
      {showResults && (
        <SearchResults results={filteredResults} />
      )}
    </div>
  );
};

export default SearchSampleRequirements;