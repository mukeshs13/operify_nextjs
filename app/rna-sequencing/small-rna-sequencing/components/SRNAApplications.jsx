// app/rna-sequencing/small-rna-sequencing/components/SRNAApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Small RNA (sRNA) sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            sRNA sequencing is widely utilized across{" "}
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

export default SRNAApplications;