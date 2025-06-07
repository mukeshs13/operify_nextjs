// app/dna-sequencing/genome-mapping/components/GenomeMappingAdvantages.jsx

const GenomeMappingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Genome Mapping
        </h2>
        
        {/* Structural variant detection */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Provides detailed structural variant detection</strong> and genomic rearrangements, offering comprehensive insights into complex genomic architecture.
          </p>
        </div>

        {/* High-resolution analysis */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Enables high-resolution analysis</strong> of large eukaryotic genomes and their structural features, facilitating better understanding of genome organization.
          </p>
        </div>

        {/* Comprehensive mapping */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Offers comprehensive mapping capabilities</strong> that reveal the three-dimensional structure of chromosomes and identify regulatory interactions between distant genomic regions.
          </p>
        </div>

        {/* Multiple applications */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Supports multiple research applications</strong> including cancer research, developmental biology, and evolutionary studies by providing detailed genomic structural information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GenomeMappingAdvantages;