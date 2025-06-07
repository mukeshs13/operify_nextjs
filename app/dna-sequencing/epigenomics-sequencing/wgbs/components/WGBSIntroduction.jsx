const WGBSIntroduction = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8">
          Introduction and Workflow
        </h2>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          {/* Left side content */}
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <p className="mb-3 text-gray-600 leading-relaxed">
              Whole Genome Bisulphite Sequencing (WGBS) maps DNA methylation patterns across an entire genome at single-base resolution, offering insights into transcriptional activity and gene regulation.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow includes DNA isolation, followed by treatment with sodium bisulfite (Gold standard method). This treatment converts unmethylated cytosines into uracils, which are subsequently amplified by PCR and sequenced.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              In bioinformatics analysis, sequencing data is aligned to a reference genome using advanced bioinformatics tools to determine the methylation status at CpG, CHG, and CHH sites.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Valuable in epigenetic research for its ability to provide high-resolution insights into the regulatory mechanisms of the genome, offering a deeper understanding of cellular functions and molecular pathways.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/wgbs-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">WGBS WORKFLOW</span>
              </div>
              <div className="text-gray-600 text-sm">
                Workflow from Whole Genome Bisulfite Sequencing (WGBS)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WGBSIntroduction;