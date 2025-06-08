// app/rna-sequencing/small-rna-sequencing/components/SRNAAdvantages.jsx

const SRNAAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Small RNA (sRNA) sequencing (miRNA)
          </h2>
        </div>
        
        {/* Comprehensive view */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Provides a comprehensive view</strong> of the small RNA landscape by capturing a broad range of small RNA species, including miRNAs, siRNAs, snoRNAs, piRNAs, and tasiRNAs.
          </p>
        </div>

        {/* Comparative studies */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Facilitates comparative studies</strong> by allowing the comparison of small RNA expression profiles across different conditions or species, supporting investigations into developmental, environmental, and disease-related changes.
          </p>
        </div>

        {/* Novel discovery */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Identifies previously unmapped small RNAs and isoforms,</strong> as well as novel biomarkers, expanding the scope of genetic research and potential clinical applications.
          </p>
        </div>

        {/* Functional insights */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Enhances understanding</strong> of how post-transcriptional regulation affects phenotypes and offers detailed functional insights into small RNA-target interactions and their roles in various cellular pathways, improving the understanding of gene regulation and function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SRNAAdvantages;