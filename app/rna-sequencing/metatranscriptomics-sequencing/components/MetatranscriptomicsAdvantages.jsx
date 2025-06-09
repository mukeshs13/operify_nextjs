const MetatranscriptomicsAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Metatranscriptome Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Functional dynamics */}
            <li>
              Provides insights into the functional dynamics of microorganisms by revealing active gene expression and their roles within complex communities. This approach uncovers how microorganisms contribute to ecosystem processes and their interactions.
            </li>

            {/* Direct analysis */}
            <li>
              Analyzes microbial communities directly from environmental samples, removing the need for isolating or cultivating individual microbes. This method captures a more comprehensive view of microbial diversity.
            </li>

            {/* NGS advantages */}
            <li>
              Uses next-generation sequencing (NGS) to identify novel genes and track transcriptional changes, offering high-resolution data on gene expression. This allows for precise identification of active genes, pathways, and regulatory networks within microbial communities.
            </li>

            {/* Metagenomics advantage */}
            <li>
              Offers an advantage over metagenomics by including both microbial species information and gene expression data. This dual focus provides a deeper understanding of microbial community changes from a transcriptional perspective and aids in the discovery of potential new genes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetatranscriptomicsAdvantages;