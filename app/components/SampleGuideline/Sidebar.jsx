import React from 'react';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'general-content', label: '1. General Guidelines' },
    { id: 'search-content', label: '2. Search Sample Requirements' }
  ];

  return (
    <div className="space-y-3">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`w-full text-left px-6 py-4 text-base font-medium rounded-full transition-all duration-300 border-2 whitespace-nowrap ${
            activeSection === item.id
              ? 'text-white shadow-lg border-transparent'
              : 'bg-white text-gray-600 border-transparent hover:border-2'
          }`}
          style={
            activeSection === item.id
              ? { backgroundColor: '#ffa72a' }
              : {}
          }
          onMouseEnter={(e) => {
            if (activeSection !== item.id) {
              e.target.style.borderColor = '#ffa72a';
            }
          }}
          onMouseLeave={(e) => {
            if (activeSection !== item.id) {
              e.target.style.borderColor = 'transparent';
            }
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;