// app/dna-sequencing/hybrid-genome-sequencing/components/HybridApplications.jsx

const HybridApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Comprehensive Genome Mapping",
      description: "Hybrid genome sequencing is used to create detailed genome maps by combining the strengths of both short-read and long-read technologies, leading to more complete and accurate assemblies of complex genomes."
    },
    {
      number: "2", 
      title: "Structural Variant Detection",
      description: "This approach is effective in identifying structural variants, such as large deletions, duplications, and insertions, which are often challenging to detect with short-read sequencing alone."
    },
    {
      number: "3",
      title: "Genetic Diversity and Evolutionary Studies",
      description: "It facilitates the study of genetic diversity and evolutionary processes by providing high-resolution data on genomic variations across different species and populations."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of Hybrid Genome Sequencing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

export default HybridApplications;