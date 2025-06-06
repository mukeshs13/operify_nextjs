import React from 'react';

const CareerHero = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-6 h-24" 
      style={{ backgroundImage: "url('images/bredcrumb.jpg')" }}
    >
      {/* Breadcrumb */}
      <div className="relative z-10 mb-1 -mt-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-white hover:text-yellow-400 underline">Home</a>
            <span className="text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <a href="/about-us" className="text-white hover:text-yellow-400 underline">About Us</a>
            <span className="text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-white">Career</span>
          </nav>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="relative z-10 text-center -mt-2">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Career
        </h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
      </div>
    </section>
  );
};

export default CareerHero;