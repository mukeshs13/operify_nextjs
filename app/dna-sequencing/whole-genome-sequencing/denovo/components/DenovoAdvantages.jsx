// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const DenovoAdvantages = () => {
  const advantageItems = [
    "Eliminates the need for pre-existing reference genomes, which allows for the discovery of novel genetic elements and variations that may not be present in other genomes, providing a truly unbiased view of the genome.",
    "Identifies new genes and genetic variations that may be missed by relying on reference genomes alone.",
    "Offers high-resolution insights into the genome, including complex regions such as repetitive sequences and heterochromatic regions, which are often challenging to assemble with other sequencing approaches.",
    "Enhances our understanding of genetic diversity, facilitates comparative genomics, and contributes significantly to advancements in genomic research across various fields."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Genome Denovo Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default DenovoAdvantages;