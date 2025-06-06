'use client';
import React, { useState } from 'react';

const TooltipIcon = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <span
        className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-teal-600 border-2 border-teal-600 rounded-full cursor-pointer hover:bg-teal-600 hover:text-white transition-all duration-200"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
      </span>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-800 rounded-md shadow-lg z-50 w-56 text-left">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default TooltipIcon;