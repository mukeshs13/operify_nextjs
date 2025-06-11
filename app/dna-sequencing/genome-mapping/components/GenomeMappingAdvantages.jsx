// app/dna-sequencing/genome-mapping/components/GenomeMappingAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const GenomeMappingAdvantages = () => {
  const advantageItems = [
    "Provides detailed structural variant detection and genomic rearrangements, offering comprehensive insights into complex genomic architecture.",
    "Enables high-resolution analysis of large eukaryotic genomes and their structural features, facilitating better understanding of genome organization.",
    "Offers comprehensive mapping capabilities that reveal the three-dimensional structure of chromosomes and identify regulatory interactions between distant genomic regions.",
    "Supports multiple research applications including cancer research, developmental biology, and evolutionary studies by providing detailed genomic structural information."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Genome Mapping"
      advantageItems={advantageItems}
    />
  );
};

export default GenomeMappingAdvantages;