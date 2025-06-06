'use client';
import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(placeholder);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption && !selectedOption.disabled) {
      setSelectedLabel(selectedOption.label);
    } else {
      setSelectedLabel(placeholder);
    }
  }, [value, options, placeholder]);

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
          {options.map((option, index) => {
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
        name="service_interest"
        value={value}
        required={required}
      />
    </div>
  );
};

export default CustomSelect;