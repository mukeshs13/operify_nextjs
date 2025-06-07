const AmpliconIntroduction = () => {
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
              Amplicon sequencing focuses on the targeted amplification and sequencing of specific DNA regions enabling researchers to analyze genetic variation in specific genomic regions.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with DNA isolation, followed by PCR amplification of target regions. Barcoded strand-specific libraries are then prepared using adapters, allowing different samples to be pooled together.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This multiplexing enables the simultaneous targeting of hundreds of genes from various libraries in a single run.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This method is particularly useful for studying genetic variation, microbial communities, and evolutionary relationships. By selectively amplifying regions of interest, such as 16S rRNA for bacteria or ITS regions for fungi.
            </p>
          </div>
          
          {/* Right side image placeholder */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100"
            style={{ 
              backgroundImage: "url('/images/amplicon-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">AMPLICON SEQUENCING</span>
              </div>
              <div className="text-gray-600 text-sm">
                Brochure to be modified from Amplicon Sequencing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmpliconIntroduction;