// app/rna-sequencing/mrna-sequencing/components/MRNAApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of mRNA Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            mRNA sequencing is widely utilized across{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">plants</span>,{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">animals</span>,{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">microbes</span>, and{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">humans</span>
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

export default MRNAApplications;