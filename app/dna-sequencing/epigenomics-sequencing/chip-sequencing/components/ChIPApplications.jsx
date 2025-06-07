const ChIPApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Transcription Factor Binding Analysis",
      description: "Identifies and maps the binding sites of transcription factors across the genome, revealing their roles in gene regulation and the modulation of gene expression."
    },
    {
      number: "2", 
      title: "Histone Modification Mapping",
      description: "Profiles histone modifications to understand their influence on chromatin structure and gene accessibility, providing insights into epigenetic regulation and chromatin dynamics."
    },
    {
      number: "3",
      title: "Regulatory Element Discovery",
      description: "Uncovers enhancers, silencers, and other regulatory elements that control gene expression, aiding in the identification of key regions involved in gene regulation."
    },
    {
      number: "4",
      title: "Epigenetic Research",
      description: "Studies epigenetic marks associated with various cellular states and processes, such as differentiation and development, to elucidate the mechanisms underlying gene expression changes and disease states."
    },
    {
      number: "5",
      title: "Cancer Research",
      description: "Examines changes in chromatin structure and transcription factor binding in cancer cells, identifying potential biomarkers and therapeutic targets for cancer treatment."
    },
    {
      number: "6",
      title: "Developmental Biology",
      description: "Investigates changes in gene regulation during development, revealing how chromatin modifications and transcription factor binding contribute to cellular differentiation and tissue development."
    },
    {
      number: "7",
      title: "Drug Discovery",
      description: "Provides insights into the effects of drugs on chromatin structure and gene regulation, supporting the identification of new drug targets and the development of therapeutic strategies."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of ChIP Sequencing
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

export default ChIPApplications;