// Sidebar.jsx - Simple Left Sidebar
import React from 'react';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'general-content', label: '1. General Guidelines' },
    { id: 'search-content', label: '2. Search Sample Requirements' }
  ];

  return (
    <div className="bg-white border rounded-lg p-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
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

export default Sidebar;