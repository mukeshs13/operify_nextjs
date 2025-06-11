// components/shared/AdvantagesLayout.jsx

const AdvantagesLayout = ({ 
  title = "Advantages",
  advantageItems = [],
  backgroundGradient = "bg-gradient-to-br from-white to-white",
  titleColor = "text-gray-700"
}) => {
  return (
    <section className={`py-5 lg:py-8 ${backgroundGradient} rounded-2xl shadow-sm`}>
      <div className="container-fluid px-4 lg:px-6">
        <h2 className={`text-2xl lg:text-3xl ${titleColor} text-left pb-2 mb-6 lg:mb-6`}>
          {title}
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {advantageItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesLayout;