// app/rna-sequencing/mrna-sequencing/components/MRNAAdvantages.jsx

const MRNAAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of mRNA Sequencing (mRNA-Seq) over Whole Transcriptome Sequencing
          </h2>
        </div>
        
        {/* Targeted analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>mRNA-Seq provides a targeted analysis</strong> of gene expression specific to protein-coding regions, making it ideal for studies focused on gene regulation, protein synthesis, and disease-related expression changes.
          </p>
        </div>

        {/* Enhanced sensitivity */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>mRNA-Seq focuses on mRNA enrichment,</strong> which minimizes the impact of non-coding RNAs and enhances sensitivity for detecting gene expression changes.
          </p>
        </div>

        {/* Cost-effective */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Focusing solely on coding regions,</strong> mRNA-Seq does not require rRNA-specific probes (Costly) for ribosomal RNA removal and requires comparatively lesser data, making it a more cost-effective alternative to Whole Transcriptome Sequencing.
          </p>
        </div>

        {/* Simpler analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>With a more targeted dataset,</strong> the bioinformatics analysis of mRNA-Seq is often simpler and faster, focusing on coding genes without the complexity introduced by non-coding RNAs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MRNAAdvantages;