// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoIntroduction.jsx

const DenovoIntroduction = () => {
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
              Whole Genome Denovo Sequencing involves sequencing an organism's entire genome from scratch, without a reference genome. This approach is essential for species with unsequenced or incomplete genomes.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow includes isolating DNA, fragmenting it, and sequencing to produce millions of short reads.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              These reads are then assembled into longer sequences, called contigs, using bioinformatics tools in the genome assembly process.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It can be used for sequencing diverse species, such as agriculturally important livestock, plants, bacteria, or disease-related microbes.
            </p>
          </div>
          
          {/* Right side image placeholder */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100"
            style={{ 
              backgroundImage: "url('/images/denovo-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">DE NOVO ASSEMBLY</span>
              </div>
              <div className="text-gray-600 text-sm">
                Brochure from whole genome
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DenovoIntroduction;