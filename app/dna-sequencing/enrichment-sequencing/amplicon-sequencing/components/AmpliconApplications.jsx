const AmpliconApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Microbial Diversity and Ecology",
      description: "Offers comprehensive profiles of microbial communities by focusing on specific genes, such as the 16S rRNA gene in bacteria, to analyze microbial diversity, community structure, and interactions within various environments."
    },
    {
      number: "2", 
      title: "Pathogen Detection and Identification",
      description: "Provides rapid and precise identification of pathogens, including bacteria, viruses, and fungi, through the amplification and sequencing of targeted genomic regions linked to disease-causing organisms."
    },
    {
      number: "3",
      title: "Genetic Variation and Mutation Analysis",
      description: "Targets specific genomic regions to detect genetic variations, mutations, or polymorphisms associated with diseases or traits, enabling focused genetic research and advancements in personalized medicine."
    },
    {
      number: "4",
      title: "Cancer Research and Diagnostics",
      description: "Helps identify cancer-related mutations and genetic alterations by sequencing targeted genes or exons within tumor samples, enhancing our understanding of cancer biology and supporting the development of targeted treatments."
    },
    {
      number: "5",
      title: "Environmental Monitoring",
      description: "Applies amplicon sequencing to evaluate the effects of environmental changes on microbial communities, track specific species, and assess ecosystem health and biodiversity."
    },
    {
      number: "6",
      title: "Plant Genomics",
      description: "Explores genetic markers associated with important agronomic traits, aiding in crop improvement and breeding programs."
    },
    {
      number: "7",
      title: "Genome-Wide Association Studies (GWAS)",
      description: "Links genetic variations to specific traits, advancing selective breeding and improving understanding of genetic disorders in livestock."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Amplicon Sequencing
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

export default AmpliconApplications;