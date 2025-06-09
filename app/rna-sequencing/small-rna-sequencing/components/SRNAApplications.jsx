const SRNAApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Cancer Research",
      description: "Identifies novel small RNAs and biomarkers, revealing their roles in tumor development and progression, and aiding in the discovery of potential therapeutic targets."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Examines small RNA expression during development to understand gene regulation, cellular differentiation, and developmental disorders."
    },
    {
      number: "3",
      title: "Genetic Studies",
      description: "Analyzes allele-specific expression and variations in small RNAs to gain insights into genetic regulation and variability."
    },
    {
      number: "4",
      title: "Microbial Genomics",
      description: "Investigates small RNA profiles in bacteria, aiding in the understanding of gene regulation, host-pathogen interactions, and antibiotic resistance."
    },
    {
      number: "5",
      title: "Neuroscience",
      description: "Explores small RNA involvement in brain function and neurodevelopmental disorders, offering insights into neural regulation and disease mechanisms."
    },
    {
      number: "6",
      title: "Immunology",
      description: "Studies small RNA expression in immune cells to understand immune responses, autoimmune diseases, and immune system regulation."
    },
    {
      number: "7",
      title: "Environmental and Ecological Research",
      description: "Analyzes the impact of environmental changes on small RNA profiles in plants, animals, and microbes, supporting studies on adaptation and stress responses."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of Small RNA (sRNA) sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-4">
          sRNA sequencing is widely utilized across plants, animals, microbes, and humans.
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

export default SRNAApplications;