import React from 'react';

const SidebarNavigation = ({ activeSection, onSectionChange }) => {
  const items = [
    { id: 'general-content', label: '1. General Guidelines' },
    { id: 'packaging-content', label: '2. Packaging Guideline' },
    { id: 'dna-content', label: '3. Shipping of DNA Samples' },
    { id: 'rna-content', label: '4. Shipping of RNA Samples' },
    { id: 'temperature-content', label: '5. Shipping Temperature and Condition' },
    { id: 'schedule-content', label: '6. Shipping Schedule and Address' }
  ];

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`w-full text-left px-6 py-4 text-base font-medium rounded-full transition-all duration-300 border-2 ${
            item.id === 'temperature-content' ? '' : 'whitespace-nowrap'
          } ${
            activeSection === item.id
              ? 'text-white shadow-lg border-transparent'
              : 'bg-white text-gray-600 border-transparent hover:border-orange-400'
          }`}
          style={
            activeSection === item.id
              ? { backgroundColor: '#ffa72a' }
              : {}
          }
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarNavigation;