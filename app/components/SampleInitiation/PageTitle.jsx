import React from 'react';

const PageTitle = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-4 sm:py-6 h-auto sm:h-32 md:h-40 lg:h-24 min-h-[120px] sm:min-h-[140px]" 
      style={{ backgroundImage: "url('images/bredcrumb.jpg')" }}
    >
      {/* Breadcrumb */}
      <div className="relative z-10 mb-2 sm:mb-1 pt-2 sm:pt-0 sm:-mt-3 lg:-mt-3">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-sm">
            <a href="/" className="text-white hover:text-yellow-400 underline whitespace-nowrap">Home</a>
            <span className="text-white flex-shrink-0">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <a href="/sample-submission-guideline" className="text-white hover:text-yellow-400 underline whitespace-nowrap">Knowledge Hub</a>
            <span className="text-white flex-shrink-0">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-white">Sample Initiation Form</span>
          </nav>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="relative z-10 text-center pb-2 sm:pb-0 sm:-mt-2 lg:-mt-2">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 px-4 leading-tight">
          Sample Initiation Form
        </h1>
        <div className="w-12 sm:w-14 md:w-16 lg:w-16 h-1 bg-yellow-400 mx-auto"></div>
      </div>
    </section>
  );
};

export default PageTitle;