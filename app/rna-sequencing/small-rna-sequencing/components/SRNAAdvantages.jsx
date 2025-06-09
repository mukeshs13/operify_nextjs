const SRNAAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Small RNA (sRNA) sequencing (miRNA)
        </h2>
        
        {/* Comprehensive view */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides a comprehensive view of the small RNA landscape by capturing a broad range of small RNA species, including miRNAs, siRNAs, snoRNAs, piRNAs, and tasiRNAs.
          </p>
        </div>

        {/* Comparative studies */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Facilitates comparative studies by allowing the comparison of small RNA expression profiles across different conditions or species, supporting investigations into developmental, environmental, and disease-related changes.
          </p>
        </div>

        {/* Novel discovery */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Identifies previously unmapped small RNAs and isoforms, as well as novel biomarkers, expanding the scope of genetic research and potential clinical applications.
          </p>
        </div>

        {/* Functional insights */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enhances understanding of how post-transcriptional regulation affects phenotypes and offers detailed functional insights into small RNA-target interactions and their roles in various cellular pathways, improving the understanding of gene regulation and function.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SRNAAdvantages;