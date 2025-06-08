// app/rna-sequencing/iso-sequencing/components/IsoAdvantages.jsx

const IsoAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Isoform Sequencing
          </h2>
        </div>
        
        {/* Full-length capture */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Unlike traditional methods, which may miss complex isoforms or splice variants,</strong> Iso-Seq captures full-length RNA sequences, enabling the identification of all transcript isoforms, including those with complex splicing and alternative start or end sites.
          </p>
        </div>

        {/* High-fidelity data */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Provides high-fidelity data with long read lengths,</strong> reducing errors and missing information common in shorter-read sequencing methods.
          </p>
        </div>

        {/* Assembly advantages */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Reduces challenges with transcript assembly and alignment</strong> by providing full-length reads that eliminate ambiguities and enhance transcriptome reconstruction accuracy. Improves genome annotations by precisely identifying gene structures, exons, introns, and regulatory elements, leading to more accurate functional insights.
          </p>
        </div>

        {/* Novel discovery */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Uncovers novel isoforms, splice variants, and post-transcriptional modifications,</strong> providing a comprehensive view of gene expression. This detailed approach is essential for functional genomics, transcriptomics, and alternative splicing studies, offering valuable insights into gene regulation and function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsoAdvantages;