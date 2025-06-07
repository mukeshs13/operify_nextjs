const ChIPIntroduction = () => {
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
              ChIP-Seq provides a comprehensive genome-wide map of protein-nucleic acid interactions, offering detailed insights into protein-DNA binding events and chromatin organization.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with chromatin preparation, which includes cross-linking proteins to DNA and fragmenting the chromatin. Protein-DNA complexes are then isolated using specific antibodies and purified.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Following this, NGS libraries are created by adding adapters and amplifying the DNA, which is subsequently sequenced on an Illumina platform.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It provides valuable insights into gene regulation, revealing dysregulated pathways in cancers, developmental processes, and other biological phenomena.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/chip-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">ChIP WORKFLOW</span>
              </div>
              <div className="text-gray-600 text-sm">
                Workflow from Chromatin Immunoprecipitation (ChIP) Sequencing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChIPIntroduction;