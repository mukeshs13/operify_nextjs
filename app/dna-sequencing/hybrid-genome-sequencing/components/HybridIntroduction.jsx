// app/dna-sequencing/hybrid-genome-sequencing/components/HybridIntroduction.jsx

const HybridIntroduction = () => {
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
              Hybrid sequencing integrates the accuracy of short-read sequencing (Illumina) with the comprehensive coverage of long-read sequencing (PacBio or Nanopore), ensuring detailed and complete genome assemblies.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This approach involves sequencing the same sample with both technologies, which means different libraries are prepared for both the technology followed by sequencing.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Following sequencing, advanced bioinformatics tools are used to align and integrate the long and short reads, enhancing variant detection and improving the resolution of complex genomic regions.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Hybrid sequencing is applicable to a wide range of research areas, from complex genome assemblies to resolving repetitive regions and improving the quality of reference genomes.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('images/sample-process-steps.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HybridIntroduction;