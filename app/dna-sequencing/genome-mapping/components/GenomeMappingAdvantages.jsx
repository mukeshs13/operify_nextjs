// app/dna-sequencing/genome-mapping/components/GenomeMappingAdvantages.jsx

const GenomeMappingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Genome Mapping
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides detailed structural variant detection and genomic rearrangements, offering comprehensive insights into complex genomic architecture.
            </li>
            <li>
              Enables high-resolution analysis of large eukaryotic genomes and their structural features, facilitating better understanding of genome organization.
            </li>
            <li>
              Offers comprehensive mapping capabilities that reveal the three-dimensional structure of chromosomes and identify regulatory interactions between distant genomic regions.
            </li>
            <li>
              Supports multiple research applications including cancer research, developmental biology, and evolutionary studies by providing detailed genomic structural information.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GenomeMappingAdvantages;