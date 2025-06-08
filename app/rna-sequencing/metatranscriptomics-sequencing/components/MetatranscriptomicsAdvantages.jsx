// app/rna-sequencing/metatranscriptomics-sequencing/components/MetatranscriptomicsAdvantages.jsx

const MetatranscriptomicsAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Metatranscriptome Sequencing
          </h2>
        </div>
        
        {/* Functional dynamics */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Provides insights into the functional dynamics of microorganisms</strong> by revealing active gene expression and their roles within complex communities. This approach uncovers how microorganisms contribute to ecosystem processes and their interactions.
          </p>
        </div>

        {/* Direct analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Analyzes microbial communities directly from environmental samples,</strong> removing the need for isolating or cultivating individual microbes. This method captures a more comprehensive view of microbial diversity.
          </p>
        </div>

        {/* NGS advantages */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Uses next-generation sequencing (NGS)</strong> to identify novel genes and track transcriptional changes, offering high-resolution data on gene expression. This allows for precise identification of active genes, pathways, and regulatory networks within microbial communities.
          </p>
        </div>

        {/* Metagenomics advantage */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Offers an advantage over <span className="bg-yellow-200 px-1 rounded">metagenomics</span></strong> by including both microbial species information and gene expression data. This dual focus provides a deeper understanding of microbial community changes from a transcriptional perspective and aids in the discovery of potential new genes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetatranscriptomicsAdvantages;