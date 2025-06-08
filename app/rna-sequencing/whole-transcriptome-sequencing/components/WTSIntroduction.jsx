// app/rna-sequencing/whole-transcriptome-sequencing/components/WTSIntroduction.jsx

const WTSIntroduction = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introduction and Workflow
          </h2>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whole Transcriptome Sequencing (WTS) comprehensively captures and quantifies all RNA transcripts, both coding (mRNA) and long non-coding (rRNA, tRNA), providing an in-depth view of gene expression.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This method combines a ribosomal RNA depletion strategy with Illumina NGS technology for efficient and precise results. The approach (1) reduces ribosomal contamination and increases the proportion of uniquely mapped reads, and (2) is particularly beneficial for species, such as bacteria, whose mRNA may lack a poly-A tail.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The bioinformatics pipeline includes data preprocessing, genome mapping, transcript identification, and downstream analyses like differential expression analysis, lncRNA target gene analysis, GO enrichment analysis, and KEGG enrichment analysis.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed italic">
              "This technique is applicable to a wide range of species, including humans, mouse, rat, other animals, plants, and prokaryotes. It is compatible with various samples like; high and low-quality RNA samples, cell-free RNA, formalin-fixed paraffin-embedded (FFPE) tissues and RNA."
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <img 
              src="https://stock.adobe.com/in/images/messenger-rna-or-mrna-strand-3d-rendering-illustration-with-copy-space-genetics-science-medical-research-genome-replication-concepts/404350568"
              alt="Whole Transcriptome Sequencing Workflow"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WTSIntroduction;