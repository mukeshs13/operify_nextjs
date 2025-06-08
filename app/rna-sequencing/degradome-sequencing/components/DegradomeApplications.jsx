// app/rna-sequencing/degradome-sequencing/components/DegradomeApplications.jsx

const DegradomeApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Gene Regulation Studies",
      description: "Used to identify miRNA targets and cleavage sites, elucidating the regulatory networks that control gene expression and RNA turnover in different organisms."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Explores RNA degradation patterns during developmental stages, uncovering the molecular mechanisms underlying cell differentiation and tissue formation."
    },
    {
      number: "3",
      title: "Disease Research",
      description: "Investigates RNA cleavage profiles associated with diseases such as cancer and neurodegenerative disorders, helping to identify potential biomarkers and therapeutic targets."
    },
    {
      number: "4",
      title: "Functional Genomics",
      description: "Provides a detailed view of RNA decay dynamics, enabling the study of gene function and the roles of regulatory RNAs in cellular processes."
    },
    {
      number: "5",
      title: "Comparative Genomics",
      description: "Analyzes RNA degradation patterns across species or environmental conditions to understand evolutionary conservation and differences in regulatory mechanisms."
    },
    {
      number: "6",
      title: "Stress and Environmental Responses",
      description: "Examines changes in RNA stability under stress conditions, shedding light on the molecular mechanisms of stress adaptation and survival strategies."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Degradome Sequencing
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

export default DegradomeApplications;