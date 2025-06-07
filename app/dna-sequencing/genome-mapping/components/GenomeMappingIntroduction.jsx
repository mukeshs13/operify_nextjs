// app/dna-sequencing/genome-mapping/components/GenomeMappingIntroduction.jsx

const GenomeMappingIntroduction = () => {
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
              Genome Mapping focuses on determining the structure and order of genes within a genome, providing comprehensive insights into genomic organization and structural variations.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow includes isolating DNA, fragmenting it, capturing the regions of interest followed by sequencing to produce millions of short reads.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              In the bioinformatics analysis, these reads are aligned to a known reference genome to detect genomic alterations and structural arrangements.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/genome-mapping-overview.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            {/* Service types overlay */}
            <div className="text-center">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">GENOME MAPPING</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
                  HiC Mapping
                </div>
                <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
                  Optical Sequencing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenomeMappingIntroduction;