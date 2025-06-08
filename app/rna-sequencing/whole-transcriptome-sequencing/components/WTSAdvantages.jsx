const WTSAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Whole Transcriptome Sequencing (WTS)
          </h2>
        </div>
        
        {/* Novel transcripts identification */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Enables the identification of novel transcripts,** alternative splicing events, post-transcriptional 
            modifications, and gene fusions without prior knowledge, making it ideal for exploratory research.
          </p>
        </div>

        {/* Comprehensive understanding */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Analyzing the entire transcriptome** helps gain a deeper understanding of gene regulation, 
            cellular responses, and pathways, leading to a more comprehensive view of biological processes.
          </p>
        </div>

        {/* Allele-specific analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Enables allele-specific gene expression analysis,** offering valuable insights into gene 
            regulation and genetic variability.
          </p>
        </div>

        {/* Higher detection rates */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Facilitates higher detection rates** of gene fusions, indels, SNPs, and other genetic variations, 
            offering greater reliability in research outcomes.
          </p>
        </div>

        {/* Research applications */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Widely used in fields such as cancer research and developmental biology,** WTS uncovers 
            complex molecular mechanisms and aids in the discovery of potential biomarkers.
          </p>
        </div>

        {/* Bacterial insights */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            **Provides valuable insights into bacterial gene expression,** helping to unravel the mysteries of 
            gene regulation, host-pathogen interactions, antibiotic resistance, and the underlying causes 
            of various diseases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WTSAdvantages;