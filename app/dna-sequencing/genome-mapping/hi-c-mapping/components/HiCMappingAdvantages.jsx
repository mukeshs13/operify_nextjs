// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingAdvantages.jsx

const HiCMappingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of High-throughput Chromosome Conformation Capture (Hi-C) Mapping
        </h2>
        
        {/* Genomic loci interactions */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Quantifies interactions between closely located genomic loci</strong> in 3-D space, despite being separated by many nucleotides in the linear genome.
          </p>
        </div>

        {/* 3D architecture view */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Provides a detailed view of the 3D architecture</strong> of the genome, helping researchers understand how chromatin folding impacts gene regulation, genome organization, and cellular function.
          </p>
        </div>

        {/* Distant region interactions */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Captures interactions between distant regions of DNA,</strong> enabling the mapping of chromatin loops, topologically associated domains (TADs), and other structural features at high resolution.
          </p>
        </div>

        {/* Gene expression control */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>By revealing interactions between regulatory elements,</strong> such as enhancers and promoters, Hi-C mapping sheds light on how gene expression is controlled at the epigenetic and transcriptional levels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiCMappingAdvantages;