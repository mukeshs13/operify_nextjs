// app/dna-sequencing/genome-mapping/optical-mapping/components/OpticalMappingIntroduction.jsx

const OpticalMappingIntroduction = () => {
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
              Method to resolve large-scale structural variations by linearizing strands of high molecular weight (HMW) DNA and imaging them in their native state, offering high sensitivity and accuracy to correct sequencing-based errors.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with isolating high-molecular-weight DNA, followed by labeling specific sequences with fluorescent tags. These labeled long DNA molecules are then loaded onto Saphyr Chip's NanoChannels for imaging, where they are linearized and imaged to create a "barcode" pattern representing the genome's structure.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The barcode patterns are aligned to a reference genome for assembly with enhanced contiguity using bioinformatics tools to detect structural variations and assemble large genomic segments.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This allows for the comparison of genomic maps, identification of rearrangements, and integration with other sequencing data for comprehensive genome analysis.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              With the application in clinical and discovery research, the technique is improving genomics assembly, understanding of genetic disease and cancer by detecting CNVs, chromosomal aberrations and structural variants. Enables high-resolution analysis of large eukaryotic genomes and their structural features.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('/images/optical-mapping-workflow.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default OpticalMappingIntroduction;