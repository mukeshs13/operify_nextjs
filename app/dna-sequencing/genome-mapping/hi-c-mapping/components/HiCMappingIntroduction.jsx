// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingIntroduction.jsx

const HiCMappingIntroduction = () => {
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
              Hi-C Sequencing is a proximity ligation method that captures the three-dimensional (3-D) structure of chromatin by identifying spatial interactions between different regions of chromosomes.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              It helps understand genome organization, gene regulation, and how chromatin structure affects cellular function.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow involves cross-linking DNA within cells to preserve spatial interactions, followed by fragmentation, ligation of interacting DNA fragments, and sequencing. After sequencing, the resulting data reflects which DNA regions are in close physical proximity within the nucleus.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The sequenced reads are processed using advanced bioinformatics tools, starting with alignment to a reference genome, followed by the identification of chromatin loops and the construction of 3D models of genome organization.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Plays pivotal role in multiple applications, including identifying promoter-enhancer interactions for gene regulation studies, detecting structural rearrangements, scaffolding contigs to define chromosomes de novo, and revealing structural errors while accurately reintegrating mis-joined contigs during genome assembly processes.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('/images/hic-mapping-workflow.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HiCMappingIntroduction;