// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingAdvantages.jsx

const HiCMappingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of High-throughput Chromosome Conformation Capture (Hi-C) Mapping
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Quantifies interactions between closely located genomic loci in 3-D space, despite being separated by many nucleotides in the linear genome.
            </li>
            <li>
              Provides a detailed view of the 3D architecture of the genome, helping researchers understand how chromatin folding impacts gene regulation, genome organization, and cellular function.
            </li>
            <li>
              Captures interactions between distant regions of DNA, enabling the mapping of chromatin loops, topologically associated domains (TADs), and other structural features at high resolution.
            </li>
            <li>
              By revealing interactions between regulatory elements, such as enhancers and promoters, Hi-C mapping sheds light on how gene expression is controlled at the epigenetic and transcriptional levels.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HiCMappingAdvantages;