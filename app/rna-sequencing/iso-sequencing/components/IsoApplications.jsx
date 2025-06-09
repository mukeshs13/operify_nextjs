const IsoApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Gene Annotation",
      description: "Enhances the annotation of complex genomes by providing precise information on transcript structures, helping to accurately define gene boundaries and functions."
    },
    {
      number: "2", 
      title: "Alternative Splicing Analysis",
      description: "Investigates alternative splicing events and isoform diversity, contributing to a deeper understanding of gene regulation and functional diversity."
    },
    {
      number: "3",
      title: "Functional Genomics",
      description: "Supports functional studies by linking isoform-specific expression profiles to phenotypic traits, disease mechanisms, and developmental processes."
    },
    {
      number: "4",
      title: "Disease Research",
      description: "Identifies aberrant isoforms associated with diseases, aiding in the discovery of biomarkers and therapeutic targets for conditions such as cancer and genetic disorders."
    },
    {
      number: "5",
      title: "Plant and Crop Improvement",
      description: "It allows the haplotype resolution of complex polyploids like those in plants. Explores transcript diversity in plants and crops, contributing to better understanding of stress responses, developmental processes, and traits relevant for agriculture."
    },
    {
      number: "6",
      title: "Microbial Genomics",
      description: "Studies microbial transcriptomes to uncover complex regulatory networks, metabolic pathways, and interactions within microbial communities, advancing our knowledge in microbiology and biotechnology."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of Isoform Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-4">
          Isoform sequencing is widely utilized across plants, animals, microbes, and humans.
        </p>
        
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

export default IsoApplications;