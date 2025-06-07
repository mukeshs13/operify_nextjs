const ResequencingIntroduction = () => {
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
              Whole Genome Resequencing involves sequencing an organism's entire genome where reference genome is already available. Unlike de novo sequencing, which builds a genome from scratch, resequencing focuses on identifying variations and differences compared to a previously known reference genome.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow involves DNA isolation, fragmentation, and sequencing to generate millions of short reads.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              These reads undergo alignment to a reference genome, followed by the analysis of genetic variations using advanced bioinformatics tools.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It enables detailed analysis of genetic variations across diverse species like humans, plants, and bacteria.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/resequencing-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">RESEQUENCING</span>
              </div>
              <div className="text-gray-600 text-sm">
                Change only sequencing and analysis by adding it from whole exome
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResequencingIntroduction;