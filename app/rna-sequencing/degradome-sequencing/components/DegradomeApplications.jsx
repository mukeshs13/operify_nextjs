const DegradomeApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Gene Regulation Studies",
      description: "Used to identify miRNA targets and cleavage sites, elucidating the regulatory networks that control gene expression and RNA turnover in different organisms."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Explores RNA degradation patterns during developmental stages, uncovering the molecular mechanisms underlying cell differentiation and tissue formation."
    },
    {
      number: "3",
      title: "Disease Research",
      description: "Investigates RNA cleavage profiles associated with diseases such as cancer and neurodegenerative disorders, helping to identify potential biomarkers and therapeutic targets."
    },
    {
      number: "4",
      title: "Functional Genomics",
      description: "Provides a detailed view of RNA decay dynamics, enabling the study of gene function and the roles of regulatory RNAs in cellular processes."
    },
    {
      number: "5",
      title: "Comparative Genomics",
      description: "Analyzes RNA degradation patterns across species or environmental conditions to understand evolutionary conservation and differences in regulatory mechanisms."
    },
    {
      number: "6",
      title: "Stress and Environmental Responses",
      description: "Examines changes in RNA stability under stress conditions, shedding light on the molecular mechanisms of stress adaptation and survival strategies."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Degradome Sequencing
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

export default DegradomeApplications;