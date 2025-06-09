// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingApplications.jsx

const HiCMappingApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Gene Regulation Studies",
      description: "Helps in identifying interactions between distant regulatory elements, such as enhancers and promoters, providing insights into gene expression and transcriptional regulation mechanisms."
    },
    {
      number: "2", 
      title: "Cancer Research",
      description: "Widely used to study alterations in chromatin structure associated with cancer, aiding in the discovery of genomic rearrangements, fusion genes, and disrupted regulatory networks that contribute to tumorigenesis."
    },
    {
      number: "3",
      title: "Developmental Biology",
      description: "Reveals how genome architecture changes and influences gene expression patterns critical for tissue differentiation and organ development."
    },
    {
      number: "4",
      title: "Epigenetics and Disease Mechanisms",
      description: "Helps in understanding how epigenetic changes, such as histone modifications and DNA methylation, affect chromatin conformation and contribute to diseases like neurodevelopmental disorders, metabolic diseases, and genetic syndromes."
    },
    {
      number: "5",
      title: "Comparative Genomics",
      description: "Allows researchers to compare 3D genome structures across different species, helping to unravel evolutionary changes in genome organization and how they influence biological diversity."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of High-throughput Chromosome Conformation Capture (Hi-C) Mapping
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

export default HiCMappingApplications;