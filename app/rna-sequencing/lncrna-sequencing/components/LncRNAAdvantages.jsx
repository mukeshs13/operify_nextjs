// app/rna-sequencing/lncrna-sequencing/components/LncRNAAdvantages.jsx

const LncRNAAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of lncRNA sequencing
          </h2>
        </div>
        
        {/* Novel identification */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Identifies both well-known and novel lncRNAs,</strong> providing fresh insights into their roles and potential as biomarkers.
          </p>
        </div>

        {/* Chromatin remodeling */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Reveals lncRNAs' involvement in a broad range of molecular functions,</strong> such as chromatin remodeling, which is essential for regulating gene expression. This process includes modifying chromatin structure to control gene accessibility and influencing various cellular mechanisms, demonstrating lncRNAs' crucial roles in gene regulation and cellular function across mammals and plants.
          </p>
        </div>

        {/* Gene regulation understanding */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Provides a thorough understanding of lncRNAs' roles in gene regulation,</strong> encompassing both transcriptional and post-transcriptional levels. It highlights how lncRNAs affect transcription factors, alter nucleosome positioning, and contribute to RNA splicing and stability, thus impacting overall gene expression and cellular processes.
          </p>
        </div>

        {/* High-resolution analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Enables high-resolution analysis,</strong> allowing for precise detection and detailed characterization of lncRNA expression and their regulatory networks, offering a deep dive into their functional roles within cells.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LncRNAAdvantages;