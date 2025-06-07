// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsApplications.jsx

const MetagenomicsApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Environmental Monitoring",
      description: "Assessing microbial diversity in natural environments, tracking changes in response to environmental factors, and monitoring ecosystem health."
    },
    {
      number: "2", 
      title: "Biotechnology",
      description: "Discovering novel enzymes, bioactive compounds, and metabolic pathways from microbial communities for applications in bioremediation, biofuel production, and pharmaceuticals."
    },
    {
      number: "3",
      title: "Agriculture",
      description: "Studying soil microbiomes to improve crop yield, enhance nutrient cycling, and develop sustainable agricultural practices."
    },
    {
      number: "4",
      title: "Human Health",
      description: "Investigating the human microbiome to understand its role in health and disease, including studies on gut microbiota, antibiotic resistance, and personalized medicine."
    },
    {
      number: "5",
      title: "Ecological Studies",
      description: "Exploring microbial interactions, community dynamics, and ecosystem functions in diverse habitats, from oceans to terrestrial environments."
    },
    {
      number: "6",
      title: "Microbial Ecology",
      description: "Analyzing community structure, biodiversity, and adaptation strategies of microbes in various ecosystems, advancing our understanding of microbial ecology and evolution."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Metagenomics Sequencing
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

export default MetagenomicsApplications;