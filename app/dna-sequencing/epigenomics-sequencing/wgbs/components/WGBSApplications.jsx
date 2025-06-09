const WGBSApplications = () => {
  const applications = [
    {
      number: "1",
      title: "DNA Methylation Profiling",
      description: "Provides a comprehensive map of DNA methylation across the entire genome, revealing methylation patterns associated with gene regulation, epigenetic modifications, and cellular differentiation."
    },
    {
      number: "2", 
      title: "Cancer Epigenetics",
      description: "Identifies aberrant DNA methylation patterns in cancerous tissues, which can help in understanding tumorigenesis, detecting early biomarkers for cancer diagnosis, and developing epigenetic-based therapies."
    },
    {
      number: "3",
      title: "Developmental Biology",
      description: "Analyzes changes in DNA methylation during development, offering insights into how epigenetic modifications influence cell differentiation and tissue development."
    },
    {
      number: "4",
      title: "Genetic and Epigenetic Research",
      description: "Explores the interplay between genetic sequences and epigenetic modifications, enhancing our understanding of how genetic variations and environmental factors interact to affect gene expression and contribute to complex diseases."
    },
    {
      number: "5",
      title: "Disease Mechanisms",
      description: "Uncovers epigenetic alterations associated with various diseases, including neurological disorders and cardiovascular diseases, helping in the identification of novel biomarkers and therapeutic targets."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of Whole Genome Bisulphite Sequencing (WGBS)
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

export default WGBSApplications;