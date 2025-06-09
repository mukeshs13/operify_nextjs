const MRNAAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of mRNA Sequencing (mRNA-Seq) over Whole Transcriptome Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Targeted analysis */}
            <li>
              mRNA-Seq provides a targeted analysis of gene expression specific to protein-coding regions, making it ideal for studies focused on gene regulation, protein synthesis, and disease-related expression changes.
            </li>

            {/* Enhanced sensitivity */}
            <li>
              mRNA-Seq focuses on mRNA enrichment, which minimizes the impact of non-coding RNAs and enhances sensitivity for detecting gene expression changes.
            </li>

            {/* Cost-effective */}
            <li>
              Focusing solely on coding regions, mRNA-Seq does not require rRNA-specific probes (Costly) for ribosomal RNA removal and requires comparatively lesser data, making it a more cost-effective alternative to Whole Transcriptome Sequencing.
            </li>

            {/* Simpler analysis */}
            <li>
              With a more targeted dataset, the bioinformatics analysis of mRNA-Seq is often simpler and faster, focusing on coding genes without the complexity introduced by non-coding RNAs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MRNAAdvantages;