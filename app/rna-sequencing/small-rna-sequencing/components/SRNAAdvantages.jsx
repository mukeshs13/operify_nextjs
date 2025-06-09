const SRNAAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Small RNA (sRNA) sequencing (miRNA)
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Comprehensive view */}
            <li>
              Provides a comprehensive view of the small RNA landscape by capturing a broad range of small RNA species, including miRNAs, siRNAs, snoRNAs, piRNAs, and tasiRNAs.
            </li>

            {/* Comparative studies */}
            <li>
              Facilitates comparative studies by allowing the comparison of small RNA expression profiles across different conditions or species, supporting investigations into developmental, environmental, and disease-related changes.
            </li>

            {/* Novel discovery */}
            <li>
              Identifies previously unmapped small RNAs and isoforms, as well as novel biomarkers, expanding the scope of genetic research and potential clinical applications.
            </li>

            {/* Functional insights */}
            <li>
              Enhances understanding of how post-transcriptional regulation affects phenotypes and offers detailed functional insights into small RNA-target interactions and their roles in various cellular pathways, improving the understanding of gene regulation and function.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SRNAAdvantages;