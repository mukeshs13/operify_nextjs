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
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of lncRNA Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-4">
          LncRNA sequencing is widely utilized across plants, animals, microbes, and humans.
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

export default LncRNAApplications;