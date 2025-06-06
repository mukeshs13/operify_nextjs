'use client';
import React, { useState, useRef, useEffect } from 'react';

const ExperienceSelect = ({ value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Years of Experience');
  const dropdownRef = useRef(null);

  const experienceOptions = [
    { value: '', label: 'Years of Experience', disabled: true },
    { value: '0-1', label: '0-1 years' },
    { value: '1-3', label: '1-3 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-8', label: '5-8 years' },
    { value: '8-10', label: '8-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  useEffect(() => {
    const selectedOption = experienceOptions.find(option => option.value === value);
    if (selectedOption && !selectedOption.disabled) {
      setSelectedLabel(selectedOption.label);
    } else {
      setSelectedLabel('Years of Experience');
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={`w-full px-5 py-4 border border-gray-300 rounded-full cursor-pointer flex items-center justify-between bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ${
          isOpen ? 'ring-2 ring-blue-500 border-transparent' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${value ? 'text-gray-800' : 'text-gray-500'} pr-4`}>
          {selectedLabel}
        </span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            width="16" 
            height="12" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M6 8l4 4 4-4"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
          {experienceOptions.map((option, index) => {
            if (option.disabled) return null;
            
            return (
              <div
                key={index}
                className="px-6 py-3 cursor-pointer hover:bg-gray-50 text-gray-800 transition-colors duration-150"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        name="experience"
        value={value}
        required={required}
      />
    </div>
  );
};

export default ExperienceSelect;