'use client';
import React, { useRef } from 'react';

const FileUpload = ({ onFileChange, currentFile, required = false }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        onFileChange(file);
      } else {
        alert('Please upload a PDF, DOC, or DOCX file.');
        e.target.value = '';
      }
    } else {
      onFileChange(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full">
      <input
        ref={fileInputRef}
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        required={required}
        className="hidden"
      />
      
      <div
        onClick={handleClick}
        className="w-full px-5 py-4 border border-gray-300 rounded-full cursor-pointer flex items-center justify-between bg-white hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-colors"
      >
        <span className={`${currentFile ? 'text-gray-800' : 'text-gray-500'} pr-4 truncate`}>
          {currentFile ? currentFile.name : 'Upload Resume'}
        </span>
        <button
          type="button"
          className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
        >
          Choose File
        </button>
      </div>
    </div>
  );
};

export default FileUpload;