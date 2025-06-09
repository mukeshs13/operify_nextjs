const LncRNAAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of lncRNA sequencing
        </h2>
        
        {/* Novel identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Identifies both well-known and novel lncRNAs, providing fresh insights into their roles and potential as biomarkers.
          </p>
        </div>

        {/* Chromatin remodeling */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Reveals lncRNAs' involvement in a broad range of molecular functions, such as chromatin remodeling, which is essential for regulating gene expression. This process includes modifying chromatin structure to control gene accessibility and influencing various cellular mechanisms, demonstrating lncRNAs' crucial roles in gene regulation and cellular function across mammals and plants.
          </p>
        </div>

        {/* Gene regulation understanding */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides a thorough understanding of lncRNAs' roles in gene regulation, encompassing both transcriptional and post-transcriptional levels. It highlights how lncRNAs affect transcription factors, alter nucleosome positioning, and contribute to RNA splicing and stability, thus impacting overall gene expression and cellular processes.
          </p>
        </div>

        {/* High-resolution analysis */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enables high-resolution analysis, allowing for precise detection and detailed characterization of lncRNA expression and their regulatory networks, offering a deep dive into their functional roles within cells.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LncRNAAdvantages;