import Link from 'next/link';
import React from 'react';

const PageTitle = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-6 h-24" 
      style={{ backgroundImage: "url('images/bredcrumb.jpg')" }}
    >
      {/* Breadcrumb */}
      <div className="relative z-10 mb-1 -mt-3">
        <div className="container mx-auto max-w-none px-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white hover:text-yellow-400 underline">Home</Link>
            <span className="text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="relative z-10 text-center -mt-2">
        <h1 className="text-4xl md:text-4xl font-bold text-white mb-2">
          Contact Us
        </h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
      </div>
    </section>
  );
};

export default PageTitle;