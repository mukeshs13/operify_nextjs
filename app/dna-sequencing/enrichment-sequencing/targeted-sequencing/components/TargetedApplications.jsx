const TargetedApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Microbial Genomics",
      description: "Focuses on infectious disease research by targeting specific microbial genes to identify and characterize pathogens, improving diagnostic accuracy and outbreak tracking."
    },
    {
      number: "2", 
      title: "Cancer Genomics",
      description: "Applies targeted DNA sequencing to detect mutations in cancer-related genes, enhancing diagnostic precision, prognostic assessments, and the selection of targeted therapies for better cancer management."
    },
    {
      number: "3",
      title: "Inherited Genetic Disorders",
      description: "Identifies disease-causing variants in genes associated with hereditary conditions, facilitating early diagnosis and the development of personalized treatment plans."
    },
    {
      number: "4",
      title: "Pharmacogenomics",
      description: "Evaluates genetic variations that influence individual responses to medications, enabling optimization of drug therapy and reduction of adverse effects through tailored treatment approaches."
    },
    {
      number: "5",
      title: "Personalized Healthcare",
      description: "Uses targeted sequencing to analyze genetic variants in a patient's DNA, influencing disease risk, treatment responses, and overall health management, supporting a more customized approach to healthcare."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Targeted Sequencing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full text-sm font-semibold">
                    {app.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetedApplications;