// components/shared/TitleBar.jsx
import React from 'react';
import Link from 'next/link';

const TitleBar = ({ title, breadcrumbs, backgroundImage = "/images/bredcrumb.jpg" }) => {
  return (
    <section 
      className="relative bg-cover bg-center py-4 sm:py-6 h-auto sm:h-32 md:h-40 lg:h-24 min-h-[120px] sm:min-h-[140px]" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Breadcrumb */}
      <div className="relative z-10 mb-6 sm:mb-5 pt-2 sm:pt-0 sm:-mt-3 lg:-mt-3">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.current ? (
                  <span className="text-white whitespace-nowrap">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    href={crumb.href} 
                    className="text-white hover:text-yellow-400 underline whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="relative z-10 text-center pb-2 sm:pb-0 sm:-mt-2 lg:mt-2">
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 px-4 leading-tight">
          {title}
        </h1>
        <div className="w-12 sm:w-14 md:w-16 lg:w-16 h-1 bg-yellow-400 mx-auto"></div>
      </div>
    </section>
  );
};

export default TitleBar;