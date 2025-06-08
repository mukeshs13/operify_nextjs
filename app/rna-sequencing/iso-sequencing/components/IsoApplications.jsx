// app/rna-sequencing/iso-sequencing/components/IsoApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Isoform Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            LncRNA sequencing is widely utilized across{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">plants</span>,{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">animals</span>,{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">microbes</span>, and{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">humans</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                  {app.number}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IsoApplications;