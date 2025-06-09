const ATACApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Chromatin Accessibility and Epigenetic Mapping",
      description: "ATAC sequencing enables the identification of open chromatin regions, offering insights into regulatory elements like promoters, enhancers, and transcription factor binding sites. This approach is essential for understanding gene regulation and studying the epigenetic landscape across different cell types, tissues, and conditions."
    },
    {
      number: "2", 
      title: "Cancer Genomics and Neuroscience",
      description: "ATAC sequencing plays a crucial role in cancer research by identifying alterations in chromatin accessibility that drive tumor development or progression. It helps uncover cancer-specific regulatory elements and potential therapeutic targets. Additionally, in neuroscience, ATAC sequencing is used to investigate the chromatin landscape of neural cells and tissues."
    },
    {
      number: "3",
      title: "Cell Type Identification and Heterogeneity",
      description: "When applied at the single-cell level, ATAC sequencing can reveal chromatin accessibility patterns in individual cells. This capability allows for the identification of distinct cell types, the study of cellular heterogeneity, and an understanding of how chromatin accessibility varies among different cell populations within a tissue."
    },
    {
      number: "4",
      title: "Transcription Factor Binding and Developmental Biology",
      description: "ATAC sequencing, combined with transcription factor motif analysis, helps predict and validate transcription factor binding sites, elucidating their roles in regulating gene expression. This is particularly valuable in developmental biology, where ATAC sequencing is employed to study chromatin dynamics over time."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of ATAC Sequencing
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

export default ATACApplications;