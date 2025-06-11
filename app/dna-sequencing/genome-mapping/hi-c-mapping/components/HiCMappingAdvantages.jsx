// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const HiCMappingAdvantages = () => {
  const advantageItems = [
    "Quantifies interactions between closely located genomic loci in 3-D space, despite being separated by many nucleotides in the linear genome.",
    "Provides a detailed view of the 3D architecture of the genome, helping researchers understand how chromatin folding impacts gene regulation, genome organization, and cellular function.",
    "Captures interactions between distant regions of DNA, enabling the mapping of chromatin loops, topologically associated domains (TADs), and other structural features at high resolution.",
    "By revealing interactions between regulatory elements, such as enhancers and promoters, Hi-C mapping sheds light on how gene expression is controlled at the epigenetic and transcriptional levels."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of High-throughput Chromosome Conformation Capture (Hi-C) Mapping"
      advantageItems={advantageItems}
    />
  );
};

export default HiCMappingAdvantages;