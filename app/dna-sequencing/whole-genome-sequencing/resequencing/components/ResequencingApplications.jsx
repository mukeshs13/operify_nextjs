const ResequencingApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Genetic Variation Discovery",
      description: "Identifies and characterizes genetic variations, including single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, across different individuals or populations, aiding in the study of genetic diversity and evolution."
    },
    {
      number: "2", 
      title: "Disease Research",
      description: "Helps in pinpointing genetic mutations and variants associated with genetic disorders, complex diseases, and rare conditions, enhancing our understanding of disease mechanisms and enabling the development of targeted therapies."
    },
    {
      number: "3",
      title: "Personalized Medicine",
      description: "Facilitates the tailoring of medical treatments based on an individual's genetic profile, allowing for more precise and effective interventions and drug responses."
    },
    {
      number: "4",
      title: "Population Genetics",
      description: "Assists in studying the genetic makeup of populations to understand evolutionary processes, migration patterns, and adaptation to environmental changes, providing insights into the genetic basis of traits and diseases."
    },
    {
      number: "5",
      title: "Agricultural Genomics",
      description: "Identifies genetic markers linked to desirable traits and maps quantitative trait loci (QTL) to enhance selective breeding and improve characteristics such as yield, disease resistance, and stress tolerance. It also supports genome-wide association studies (GWAS) to connect genetic variants with specific traits or diseases."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Whole Genome ReSequencing
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

export default ResequencingApplications;