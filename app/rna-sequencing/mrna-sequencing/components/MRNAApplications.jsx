const MRNAApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Developmental Biology",
      description: "Studies gene expression patterns during different stages of development, helping to unravel the mechanisms of cell differentiation and tissue formation."
    },
    {
      number: "2", 
      title: "Disease Mechanisms",
      description: "Uncovers mRNA expression profiles associated with various diseases, including genetic disorders and autoimmune conditions, to identify potential diagnostic markers and therapeutic targets."
    },
    {
      number: "3",
      title: "Drug Discovery",
      description: "Analyzes mRNA expression changes in response to drug treatments, providing insights into drug mechanisms of action and helping to identify potential drug candidates."
    },
    {
      number: "4",
      title: "Functional Genomics",
      description: "Provides a comprehensive view of gene expression across different conditions, facilitating the study of gene functions and regulatory networks."
    },
    {
      number: "5",
      title: "Comparative Genomics",
      description: "Compares mRNA expression profiles across different species or environmental conditions to understand evolutionary differences and functional conservation."
    },
    {
      number: "6",
      title: "Toxicology",
      description: "Assesses changes in gene expression in response to toxic substances, aiding in the identification of biomarkers for toxicity and understanding the impact of chemicals on biological systems."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of mRNA Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-4">
          mRNA sequencing is widely utilized across plants, animals, microbes, and humans.
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

export default MRNAApplications;