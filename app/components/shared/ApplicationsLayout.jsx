// components/shared/ApplicationsLayout.jsx

const ApplicationsLayout = ({ 
  title = "Applications",
  applicationItems = [],
  backgroundColor = "bg-gray-50",
  titleColor = "text-gray-700"
}) => {
  return (
    <section className={`py-5 lg:py-8 ${backgroundColor}`}>
      <div className="container-fluid px-4 lg:px-6">
        <h2 className={`text-2xl lg:text-3xl ${titleColor} text-left pb-2 mb-6 lg:mb-6`}>
          {title}
        </h2>
        
        <ul className="list-disc list-inside space-y-4 text-gray-600 leading-relaxed lg:px-10">
          {applicationItems.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ApplicationsLayout;