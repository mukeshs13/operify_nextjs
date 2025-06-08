// app/rna-sequencing/whole-transcriptome-sequencing/components/WTSApplications.jsx

const WTSApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Developmental Biology",
      description: "Explores gene expression changes during development, providing insights into cellular differentiation and organismal growth."
    },
    {
      number: "2", 
      title: "Genetic Research",
      description: "Enables allele-specific expression analysis, enhancing the understanding of genetic variability and gene regulation."
    },
    {
      number: "3",
      title: "Microbial Studies",
      description: "Examines microbial gene expression, host-pathogen interactions, and antibiotic resistance, providing insights into microbial ecology and disease prevention."
    },
    {
      number: "4",
      title: "Human Health",
      description: "Identifies gene fusions, mutations, and expression profiles in cancer, neurological disorders, and other diseases, aiding in the discovery of biomarkers and therapeutic targets."
    },
    {
      number: "5",
      title: "Immunology",
      description: "Analyzes immune response pathways and gene expression in various immune cell types, contributing to improving our understanding of immune system function and disorders."
    },
    {
      number: "6",
      title: "Environmental Biology",
      description: "Assesses the impact of environmental changes on gene expression in plants, animals, and microbes, aiding in ecological and evolutionary studies."
    },
    {
      number: "7",
      title: "Plant Genomics",
      description: "Investigates gene expression during growth, stress responses, and development, aiding in crop improvement and understanding plant-environment interactions."
    },
    {
      number: "8",
      title: "Animal Genomics",
      description: "Explores gene regulation, development, and disease mechanisms across various animal species, contributing to veterinary research and comparative genomics."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Whole Transcriptome Sequencing (WTS)
          </h2>
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

export default WTSApplications;