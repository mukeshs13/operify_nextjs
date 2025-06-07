// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeApplications.jsx
export default function ExomeApplications() {
  const applications = [
    {
      title: "Genetic Disorder Diagnosis",
      description: "Identifies genetic mutations associated with rare and inherited disorders by focusing on the exonic regions where most disease-related variants occur. This enables accurate diagnosis and personalized treatment plans."
    },
    {
      title: "Cancer Research", 
      description: "Detects somatic mutations in cancer genomes, providing insights into tumor biology, identifying potential biomarkers for early detection, and guiding targeted therapies for more effective treatment."
    },
    {
      title: "Drug Development",
      description: "Assists in the discovery of new drug targets and the development of precision medicine by revealing the genetic underpinnings of diseases and how genetic variations affect drug responses."
    },
    {
      title: "Population Genetics",
      description: "Explores genetic variations in diverse populations to understand genetic diversity, evolutionary processes, and the genetic basis of complex traits and diseases, aiding in public health and epidemiological studies."
    },
    {
      title: "Functional Genomics",
      description: "Provides insights into gene function and regulation by identifying coding mutations that impact protein function, contributing to our understanding of gene-disease relationships and mechanisms of gene action."
    },
    {
      title: "Plant Genomics",
      description: "Supports crop improvement and plant breeding programs by revealing the genetic basis of desirable traits and enhancing the understanding of plant genomes."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Whole Exome Sequencing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}