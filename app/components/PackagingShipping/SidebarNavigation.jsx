// components/PackagingShipping/SidebarNavigation.jsx
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
    <div className="bg-white border rounded-lg p-4">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                activeSection === item.id
                  ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNavigation;