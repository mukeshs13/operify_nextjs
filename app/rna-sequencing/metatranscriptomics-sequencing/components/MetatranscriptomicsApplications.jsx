const MetatranscriptomicsApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Environmental Monitoring",
      description: "Used to assess microbial community dynamics and functional potential in diverse environments like soil, oceans, and freshwater. It helps track microbial contributions to ecosystem processes and environmental health."
    },
    {
      number: "2", 
      title: "Biogeochemical Cycling",
      description: "Investigates the roles of microorganisms in nutrient cycling processes, such as carbon, nitrogen, and sulfur cycles, providing insights into how microbes influence these critical ecological functions."
    },
    {
      number: "3",
      title: "Disease Research",
      description: "Explores the microbial contributions to human health and disease by studying the microbial communities in the human gut, oral cavity, or other body sites, revealing potential biomarkers and therapeutic targets."
    },
    {
      number: "4",
      title: "Biotechnology and Industry",
      description: "Facilitates the discovery of novel enzymes and metabolic pathways from microbial communities, which can be applied in biotechnology, agriculture, and industrial processes."
    },
    {
      number: "5",
      title: "Microbial Interactions",
      description: "Examines interactions between different microorganisms within complex communities, helping to understand symbiotic relationships, competition, and microbial networks."
    },
    {
      number: "6",
      title: "Pathogen Detection",
      description: "Aids in identifying and characterizing pathogenic microbes and their gene expression profiles during infections, enhancing our ability to monitor and manage microbial diseases."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Metatranscriptome Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-8">
          Metatranscriptomics sequencing is widely used in microbial genomics to explore microbial diversity, functional potentials, and ecological interactions across environments from soil to human microbiomes.
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

export default MetatranscriptomicsApplications;