// app/dna-sequencing/whole-genome-sequencing/components/WGSIntroduction.jsx

const WGSIntroduction = () => {
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
              Whole Genome Sequencing (WGS) is a comprehensive approach to analyze entire genomes base-by-base, providing a complete genomic view.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow includes isolating DNA, fragmenting it, and sequencing to produce millions of short reads.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              In the bioinformatics analysis, these reads are then assembled to construct the genome or aligned to a known reference genome.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ 
              backgroundImage: "url('/images/sample-process-steps.png')"
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default WGSIntroduction;