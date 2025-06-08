// app/rna-sequencing/mrna-sequencing/components/MRNAIntroduction.jsx

const MRNAIntroduction = () => {
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
              Messenger RNA-Seq (mRNA-Seq) is a focused RNA-Seq method that targets polyadenylated (poly-A) transcripts, which comprise only about 1-2% of the transcriptome, mainly representing coding genes. By enriching these poly-A-tailed RNAs, mRNA-Seq offers a precise snapshot of gene expression, capturing the complete range of mRNA transcripts within a sample and enabling detailed analysis of gene activity across various conditions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              mRNA-seq workflow typically includes RNA extraction, enrichment or depletion of mRNA, library preparation, and high-throughput sequencing. This workflow ensures precise and efficient capture of mRNA transcripts for thorough downstream analysis.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Bioinformatics analysis</strong> for mRNA-seq involves several key steps: data preprocessing, alignment to a reference genome, quantifying gene expression levels, and advanced downstream analyses such as differential expression, pathway enrichment, and gene ontology analysis.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Widely applicable across diverse research fields, including human, animal, and plant studies, providing profound insights into genetic landscapes and contributing to our understanding of gene function and regulation.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <img 
              src="https://stock.adobe.com/in/images/messenger-rna-or-mrna-strand-3d-rendering-illustration-with-copy-space-genetics-science-medical-research-genome-replication-concepts/404350568"
              alt="mRNA Sequencing Workflow"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MRNAIntroduction;