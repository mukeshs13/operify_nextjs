// app/dna-sequencing/whole-genome-sequencing/components/WGSAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const WGSAdvantages = () => {
  const advantageItems = [
    "Provides a comprehensive, high-resolution view of the genome, surpassing the coverage offered by targeted sequencing.",
    "Identifies both small (SNVs, CNVs, InDels) and large structural variants that may be missed with targeted approaches, offering valuable insights into inherited genetic conditions and characterizing mutations driving cancer progression.",
    "Generates large volumes of data quickly, facilitating the assembly of novel genomes.",
    "Uncovers genomic diversity, taxonomic classifications, and evolutionary relationships, enhancing our understanding of biological complexity."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Genome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default WGSAdvantages;