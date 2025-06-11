// components/shared/IntroductionLayout.jsx

const IntroductionLayout = ({ 
  title = "Introduction and Workflow",
  contentItems = [],
  imageUrl,
  imageAlt = "",
  badgeText,
  badgeSubtext,
  backgroundColor = "#f8f9fa",
  badgeColor = "bg-teal-600"
}) => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8 mb-4">
          {title}
        </h2>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          {/* Left side content */}
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed lg:px-10 text-justify-center">
              {contentItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100"
            style={{ 
              backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
              backgroundColor: backgroundColor
            }}
          >
            {(badgeText || badgeSubtext) && (
              <div className="text-center p-4">
                {badgeText && (
                  <div className={`${badgeColor} text-white px-4 py-2 rounded-lg mb-4`}>
                    <span className="text-sm font-medium">{badgeText}</span>
                  </div>
                )}
                {badgeSubtext && (
                  <div className="text-gray-600 text-sm">
                    {badgeSubtext}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionLayout;