const IsoAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Isoform Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Full-length capture */}
            <li>
              Unlike traditional methods, which may miss complex isoforms or splice variants, Iso-Seq captures full-length RNA sequences, enabling the identification of all transcript isoforms, including those with complex splicing and alternative start or end sites.
            </li>

            {/* High-fidelity data */}
            <li>
              Provides high-fidelity data with long read lengths, reducing errors and missing information common in shorter-read sequencing methods.
            </li>

            {/* Assembly advantages */}
            <li>
              Reduces challenges with transcript assembly and alignment by providing full-length reads that eliminate ambiguities and enhance transcriptome reconstruction accuracy. Improves genome annotations by precisely identifying gene structures, exons, introns, and regulatory elements, leading to more accurate functional insights.
            </li>

            {/* Novel discovery */}
            <li>
              Uncovers novel isoforms, splice variants, and post-transcriptional modifications, providing a comprehensive view of gene expression. This detailed approach is essential for functional genomics, transcriptomics, and alternative splicing studies, offering valuable insights into gene regulation and function.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IsoAdvantages;