// app/rna-sequencing/lncrna-sequencing/components/LncRNAApplications.jsx

const LncRNAApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Cancer Research",
      description: "Identifies tumor-specific lncRNAs and their roles in cancer development, progression, and metastasis, offering potential biomarkers and therapeutic targets."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Studies lncRNAs involved in developmental processes and cell differentiation, providing insights into gene regulation during development."
    },
    {
      number: "3",
      title: "Disease Mechanisms",
      description: "Uncovers lncRNAs associated with various diseases, including genetic disorders, cardiovascular diseases, and neurodegenerative conditions, facilitating the discovery of novel diagnostic and prognostic markers."
    },
    {
      number: "4",
      title: "Drug Discovery",
      description: "Assists in identifying lncRNAs that can be targeted or modulated by drugs, contributing to the development of new therapeutic strategies."
    },
    {
      number: "5",
      title: "Gene Regulation",
      description: "Explores lncRNAs' roles in regulating gene expression through chromatin remodeling, transcriptional control, and post-transcriptional modifications, enhancing the understanding of complex gene regulatory networks."
    },
    {
      number: "6",
      title: "Functional Genomics",
      description: "Provides insights into the functional roles of lncRNAs in cellular processes, helping to elucidate their impact on gene expression and cellular functions."
    },
    {
      number: "7",
      title: "Comparative Genomics",
      description: "Analyzes lncRNA profiles across different species or conditions, supporting research into evolutionary differences and functional conservation of lncRNAs."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of lncRNA Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            LncRNA sequencing is widely utilized across{" "}
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

export default LncRNAApplications;