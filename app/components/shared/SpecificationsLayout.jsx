// components/shared/SpecificationsLayout.jsx
import Link from 'next/link';

const SpecificationsLayout = ({ 
  title = "Service Specifications",
  titleColor = "text-gray-800",
  specificationItems = [],
  backgroundColor = "#e8f5f3",
  iconBackgroundColor = "bg-teal-600"
}) => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-fluid px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className={`text-2xl lg:text-3xl ${titleColor} text-left pb-2 mb-6 lg:mb-6`}>
            {title}
          </h2>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specificationItems.map((spec, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Background Card */}
              <div 
                className="rounded-3xl p-8 h-full min-h-[280px] flex flex-col"
                style={{ backgroundColor: backgroundColor }}
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 ${iconBackgroundColor} rounded-full flex items-center justify-center`}>
                    <img 
                      src={spec.icon} 
                      className="w-14 h-14 object-contain brightness-0 invert" 
                      alt={`${spec.title} Icon`}
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-center text-gray-800 text-lg font-semibold mb-4">
                  {spec.title}
                </h3>
                
                {/* Content */}
                <div className="text-gray-700 text-sm leading-relaxed text-center flex-grow flex items-center justify-center">
                  <div className="w-full">
                    {spec.renderContent ? spec.renderContent() : (
                      <div className="text-gray-600">
                        {spec.content}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsLayout;