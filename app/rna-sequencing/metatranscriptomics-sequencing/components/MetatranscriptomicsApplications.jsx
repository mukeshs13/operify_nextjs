// app/rna-sequencing/metatranscriptomics-sequencing/components/MetatranscriptomicsApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Metatranscriptome Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Metatranscriptomics sequencing is widely used in{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">microbial</span>{" "}
            genomics to explore microbial diversity, functional potentials, and ecological interactions across environments from soil to human microbiomes.
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

export default MetatranscriptomicsApplications;